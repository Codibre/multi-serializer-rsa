[fluent-iterable - v0.0.1](../README.md) / RsaStrategy

# Class: RsaStrategy

## Implements

* *ChainSerializerStrategy*<Stream \| Serialized\>

## Table of contents

### Constructors

- [constructor](rsastrategy.md#constructor)

### Properties

- [deserialize](rsastrategy.md#deserialize)
- [serialize](rsastrategy.md#serialize)

## Constructors

### constructor

\+ **new RsaStrategy**(`options`: [*RsaOptions*](../interfaces/rsaoptions.md)): [*RsaStrategy*](rsastrategy.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*RsaOptions*](../interfaces/rsaoptions.md) |

**Returns:** [*RsaStrategy*](rsastrategy.md)

## Properties

### deserialize

• **deserialize**: (`content`: *Stream* \| Serialized) => *Promise*<Stream \| Serialized\>

#### Type declaration:

▸ (`content`: *Stream* \| Serialized): *Promise*<Stream \| Serialized\>

#### Parameters:

Name | Type |
:------ | :------ |
`content` | *Stream* \| Serialized |

**Returns:** *Promise*<Stream \| Serialized\>

Implementation of: void

___

### serialize

• **serialize**: (`content`: *Stream* \| Serialized) => *Promise*<Serialized\>

#### Type declaration:

▸ (`content`: *Stream* \| Serialized): *Promise*<Serialized\>

#### Parameters:

Name | Type |
:------ | :------ |
`content` | *Stream* \| Serialized |

**Returns:** *Promise*<Serialized\>

Implementation of: void
