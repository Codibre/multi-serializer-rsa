import {
	ChainSerializerStrategy,
	Serialized,
	concatStream,
	resolver,
	promiseFactory,
	SerializerMode,
} from 'multi-serializer';
import { Stream } from 'stream';
import { EncryptionScheme, KeyType, RsaOptions } from './types';
import NodeRSA = require('node-rsa');

export class RsaStrategy
	implements ChainSerializerStrategy<Stream | Serialized> {
	serialize: (content: Serialized | Stream) => Serialized | Promise<Serialized>;
	deserialize: (
		content: Serialized | Stream,
	) => Serialized | Stream | Promise<Serialized | Stream>;

	constructor(options: RsaOptions) {
		const { key, keyType, encryptionScheme = EncryptionScheme.pkcs1 } = options;
		const cipher = new NodeRSA(key, keyType, {
			encryptionScheme,
		});
		if (keyType === KeyType.private) {
			this.serialize = (content) =>
				resolver(concatStream(content), (x) =>
					cipher.encryptPrivate(x, 'buffer'),
				);
			this.deserialize = (content) =>
				resolver(concatStream(content), (x) =>
					cipher.decrypt(x as Buffer, 'buffer'),
				);
		} else {
			this.serialize = (content) =>
				resolver(concatStream(content), (x) => cipher.encrypt(x, 'buffer'));
			this.deserialize = (content) =>
				resolver(concatStream(content), (x) =>
					cipher.decryptPublic(x as Buffer, 'buffer'),
				);
		}
		if (options?.mode !== SerializerMode.SYNC) {
			this.serialize = promiseFactory(
				this.serialize,
			) as typeof RsaStrategy.prototype.serialize;
			this.deserialize = promiseFactory(
				this.deserialize,
			) as typeof RsaStrategy.prototype.deserialize;
		}
	}
}
