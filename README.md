[![Actions Status](https://github.com/Codibre/multi-serializer-rsa/workflows/build/badge.svg)](https://github.com/Codibre/multi-serializer-rsa/actions)
[![Actions Status](https://github.com/Codibre/multi-serializer-rsa/workflows/test/badge.svg)](https://github.com/Codibre/multi-serializer-rsa/actions)
[![Actions Status](https://github.com/Codibre/multi-serializer-rsa/workflows/lint/badge.svg)](https://github.com/Codibre/multi-serializer-rsa/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/test_coverage)](https://codeclimate.com/github/Codibre/multi-serializer-rsa/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/maintainability)](https://codeclimate.com/github/Codibre/multi-serializer-rsa/maintainability)
[![Packages](https://david-dm.org/Codibre/multi-serializer-rsa.svg)](https://david-dm.org/Codibre/@multi-serializer/rsa)
[![npm version](https://badge.fury.io/js/%40codibre%2Fmulti-serializer-rsa.svg)](https://badge.fury.io/js/%40codibre%2Fmulti-serializer-rsa)

This library delivers a brotli compression using magic numbers as a prefix to the generated stream, so the compression is identifiable.
The magic numbers are selecting following the proposal (here)[https://github.com/madler/brotli/blob/master/br-format-v3.txt], yet only the magic numbers was considered to it, so it is not a perfect implementation

## How to Install

```
npm i @multi-serializer/rsa
```

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
