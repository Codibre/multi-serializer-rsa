import { SerializerMode, Serialized } from 'multi-serializer';
import { KeyType, RsaStrategy } from '../../src';

const priKey = `-----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----`;

const pubKey = `-----BEGIN PUBLIC KEY-----
MIICITANBgkqhkiG9w0BAQEFAAOCAg4AMIICCQKCAgBRuU91bDRYpWG8xy93pmSN
yk0fqF5vBMOF5XGlJsHFRShl15YJZvSPG2krlguieJ275U33WpL6bcr942f35Mok
jzuCOwGnJJsbGZkqIEu3gYRCPA3eXW3kbj+Z5+7DpgxJ5wa5HAhVi2F1NqroZ0LF
yYWTJlGU9dnLH5s3C5vGKC3ZoIMpF+nSrjKe5Qh93iKUn65eqq2sZ02yzlb7lqbu
gHMP74q7QdGoIz5dMiAPa0ruUORY1qADznhWMsV5xmTp/COTODqdLrS/dWwCirCj
FeM9qCtxZPkQCPr8h+Avhzl8kNbIZdrY/hP3/9aaa5KZVf40U/xUBhPqMmhKwuga
TgGAH/vABBa+F+drQur2JvpeAJqGYu7ptxJOEO7yzaa/4nA+Sr4QvD1a3JZGTEwZ
kadZRwv04i6Za4ZKXh3crVEJ+4z2GiTB7awNWiYCsrPBj6a+ealteV/WbPJk6bM3
tyF3YWo/Depvs/7wAg/tmoLYUcPgVsejP6+F+DplK/Q5qZKBhesn8K2dMBlmTNqA
yexpZ22lU4xZcPh1ZBYF2BQ2YdzNec94AznwKTkk57DJDl5oBnuNGLTgCfLETPZq
cAoqU4H7rAClHlxOWQu/KqNAdQg71+AkaovUmQbu4lwHkVdtdyzuIuY90WdrOJmb
HdPoyGqWwLqCT6Sxa4NSXwIDAQAB
-----END PUBLIC KEY-----`;

describe('index.ts', () => {
	it('should serialize with public and deserialize with private', async () => {
		const req = JSON.stringify({
			bar: 'abc',
		});
		const pubSerializer = new RsaStrategy({
			key: pubKey,
			keyType: KeyType.public,
		});
		const privSerializer = new RsaStrategy({
			key: priKey,
			keyType: KeyType.private,
		});

		const encrypted = await pubSerializer.serialize(req);
		const original = await privSerializer.deserialize(encrypted);

		expect(original.toString()).toEqual(req);
	});

	it('should serialize with private and deserialize with public', async () => {
		const req = JSON.stringify({
			bar: 'abc',
		});
		const pubSerializer = new RsaStrategy({
			key: pubKey,
			keyType: KeyType.public,
		});
		const privSerializer = new RsaStrategy({
			key: priKey,
			keyType: KeyType.private,
		});

		const encrypted = await privSerializer.serialize(req);
		const original = await pubSerializer.deserialize(encrypted);

		expect(original.toString()).toEqual(req);
	});
	it('should serialize with public and deserialize with private and sync mode', () => {
		const req = JSON.stringify({
			bar: 'abc',
		});
		const pubSerializer = new RsaStrategy({
			key: pubKey,
			keyType: KeyType.public,
			mode: SerializerMode.SYNC,
		});
		const privSerializer = new RsaStrategy({
			key: priKey,
			keyType: KeyType.private,
			mode: SerializerMode.SYNC,
		});

		const encrypted = pubSerializer.serialize(req) as Serialized;
		const original = privSerializer.deserialize(encrypted);

		expect(original.toString()).toEqual(req);
	});

	it('should serialize with private and deserialize with public and sync mode', () => {
		const req = JSON.stringify({
			bar: 'abc',
		});
		const pubSerializer = new RsaStrategy({
			key: pubKey,
			keyType: KeyType.public,
			mode: SerializerMode.SYNC,
		});
		const privSerializer = new RsaStrategy({
			key: priKey,
			keyType: KeyType.private,
			mode: SerializerMode.SYNC,
		});

		const encrypted = privSerializer.serialize(req) as Serialized;
		const original = pubSerializer.deserialize(encrypted);

		expect(original.toString()).toEqual(req);
	});

	it('should serialize with public and deserialize with private, serializing sync mode ad deserializing async mode', async () => {
		const req = JSON.stringify({
			bar: 'abc',
		});
		const pubSerializer = new RsaStrategy({
			key: pubKey,
			keyType: KeyType.public,
			mode: SerializerMode.SYNC,
		});
		const privSerializer = new RsaStrategy({
			key: priKey,
			keyType: KeyType.private,
		});

		const encrypted = pubSerializer.serialize(req) as Serialized;
		const original = await privSerializer.deserialize(encrypted);

		expect(original.toString()).toEqual(req);
	});

	it('should serialize with private and deserialize with public, serializing sync mode ad deserializing async mode', async () => {
		const req = JSON.stringify({
			bar: 'abc',
		});
		const pubSerializer = new RsaStrategy({
			key: pubKey,
			keyType: KeyType.public,
			mode: SerializerMode.SYNC,
		});
		const privSerializer = new RsaStrategy({
			key: priKey,
			keyType: KeyType.private,
		});

		const encrypted = privSerializer.serialize(req) as Serialized;
		const original = await pubSerializer.deserialize(encrypted);

		expect(original.toString()).toEqual(req);
	});

	it('should serialize with public and deserialize with private, serializing async mode ad deserializing sync mode', async () => {
		const req = JSON.stringify({
			bar: 'abc',
		});
		const pubSerializer = new RsaStrategy({
			key: pubKey,
			keyType: KeyType.public,
		});
		const privSerializer = new RsaStrategy({
			key: priKey,
			keyType: KeyType.private,
			mode: SerializerMode.SYNC,
		});

		const encrypted = await pubSerializer.serialize(req);
		const original = await privSerializer.deserialize(encrypted);

		expect(original.toString()).toEqual(req);
	});

	it('should serialize with private and deserialize with public, serializing async mode ad deserializing sync mode', async () => {
		const req = JSON.stringify({
			bar: 'abc',
		});
		const pubSerializer = new RsaStrategy({
			key: pubKey,
			keyType: KeyType.public,
		});
		const privSerializer = new RsaStrategy({
			key: priKey,
			keyType: KeyType.private,
			mode: SerializerMode.SYNC,
		});

		const encrypted = await privSerializer.serialize(req);
		const original = await pubSerializer.deserialize(encrypted);

		expect(original.toString()).toEqual(req);
	});
});
