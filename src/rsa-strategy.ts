import {
	ChainSerializerStrategy,
	Serialized,
	concatStream,
} from 'multi-serializer';
import { Stream } from 'stream';
import { EncryptionScheme, KeyType, RsaOptions } from './types';
import NodeRSA = require('node-rsa');

export class RsaStrategy
	implements ChainSerializerStrategy<Stream | Serialized> {
	serialize: (content: Serialized | Stream) => Promise<Serialized>;
	deserialize: (content: Serialized | Stream) => Promise<Serialized | Stream>;

	constructor(options: RsaOptions) {
		const { key, keyType, encryptionScheme = EncryptionScheme.pkcs1 } = options;
		const cipher = new NodeRSA(key, keyType, {
			encryptionScheme,
		});
		if (keyType === KeyType.private) {
			this.serialize = async (content) =>
				cipher.encryptPrivate(await concatStream(content), 'buffer');
			this.deserialize = async (content) =>
				cipher.decrypt((await concatStream(content)) as Buffer, 'buffer');
		} else {
			this.serialize = async (content) =>
				cipher.encrypt(await concatStream(content), 'buffer');
			this.deserialize = async (content) =>
				cipher.decryptPublic((await concatStream(content)) as Buffer, 'buffer');
		}
	}
}
