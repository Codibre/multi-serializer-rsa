[![Actions Status](https://github.com/Codibre/multi-serializer-rsa/workflows/build/badge.svg)](https://github.com/Codibre/multi-serializer-rsa/actions)
[![Actions Status](https://github.com/Codibre/multi-serializer-rsa/workflows/test/badge.svg)](https://github.com/Codibre/multi-serializer-rsa/actions)
[![Actions Status](https://github.com/Codibre/multi-serializer-rsa/workflows/lint/badge.svg)](https://github.com/Codibre/multi-serializer-rsa/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/test_coverage)](https://codeclimate.com/github/Codibre/multi-serializer-rsa/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/maintainability)](https://codeclimate.com/github/Codibre/multi-serializer-rsa/maintainability)
[![Packages](https://david-dm.org/Codibre/multi-serializer-rsa.svg)](https://david-dm.org/Codibre/@multi-serializer/rsa)
[![npm version](https://badge.fury.io/js/%40codibre%2Fmulti-serializer-rsa.svg)](https://badge.fury.io/js/%40codibre%2Fmulti-serializer-rsa)

This library delivers a RSA serializer and deserializer, fit to be used with [multi-serializer](https://www.npmjs.com/package/multi-serializer);

## How to Install

```
npm i @multi-serializer/rsa
```

## How to use

By itself:

```
const rsa = new RsaStrategy({ key, type: 'public'});
const serialized = await rsa.serialize(info); // this result is buffer

const origin = await rsa.deserialize(incomingMessage); // this result is also a buffer
```

Or adding it in the strategy chain of [multi-serializer](https://www.npmjs.com/package/multi-serializer):

```
const serializer = new Serializer(
    new JsonStrategy(),
    new GzipStrategy(),
    new RsaStrategy({ key, type: 'public'}),
    new Base64Strategy(),
);

const serialized = await serializer.serialize(info);

const origin = await serializer.deserialize(incomingMessage);
```

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
