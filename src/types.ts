export enum EncryptionScheme {
	pkcs1Oaep = 'pkcs1_oaep',
	pkcs1 = 'pkcs1',
}

export enum KeyType {
	public = 'public',
	private = 'private',
}

export type Key = string | Buffer;

export interface RsaOptions {
	key: Key;
	keyType: KeyType;
	encryptionScheme?: EncryptionScheme;
}
