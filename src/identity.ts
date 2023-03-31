import { assert } from 'ts-essentials'

//#region Nullable Identity
export type Nullable<T> = T | undefined | null

export function assertUndefined(value: unknown): asserts value is undefined {
  assert(typeof value === 'undefined', 'Expected undefined')
}
export function ensureUndefined(value: unknown) {
  assertUndefined(value)
  return value
}
export function isUndefined(value: unknown): value is undefined {
  return typeof value === 'undefined'
}

export function assertDefined<T>(value: T): asserts value is T extends undefined ? never : T {
  assert(typeof value !== 'undefined', 'Expected not undefined')
}
export function ensureDefined<T>(value: T) {
  assertDefined<T>(value)
  return value
}
export function isDefined<T>(value: T): value is T extends undefined ? never : T {
  return typeof value !== 'undefined'
}

export function assertNull(value: unknown): asserts value is null {
  assert(value === null, 'Expected null')
}
export function ensureNull(value: unknown) {
  assertNull(value)
  return value
}
export function isNull(value: unknown): value is undefined {
  return value === null
}

export function assertNullable(value: unknown): asserts value is undefined | null {
  assert(isNullable(value), 'Expected nullable')
}
export function ensureNullable(value: unknown) {
  assertNullable(value)
  return value
}
export function isNullable(value: unknown): value is undefined | null {
  return isUndefined(value) || isNull(value)
}

export function assertNonNullable<T>(value: T): asserts value is NonNullable<T> {
  assertDefined(value)
  assert(value !== null, 'Expected not null')
}
export function ensureNonNullable<T>(value: T) {
  assertNonNullable<T>(value)
  return value
}
export function isNonNullable<T>(value: T): value is NonNullable<T> {
  return typeof value !== 'undefined' && value !== null
}
//#endregion

//#region Object Identity
export function assertObject(value: unknown): asserts value is {} {
  assertNonNullable(value)
  assert(typeof value === 'object', 'Expected object type')
}
export function ensureObject(value: unknown) {
  assertObject(value)
  return value
}
export function isObject(value: unknown): value is {} {
  return isNonNullable(value) && typeof value === 'object'
}
//#endregion

//#region String Identity
export function assertString(value: unknown): asserts value is string {
  assert(typeof value === 'string', 'Expected string')
}
export function ensureString(value: unknown) {
  assertString(value)
  return value
}
export function isString(v: unknown): v is string {
  return typeof v === 'string'
}

export function assertFilledString(value: unknown): asserts value is string {
  assertString(value)
  assert(value.length, 'Expected string not to be empty')
}
export function ensureFilledString(value: unknown) {
  assertFilledString(value)
  return value
}
export function isFilledString(value: unknown): value is string {
  return isString(value) && !!value.length
}
//#endregion

//#region Function Identity
export function assertFunction(value: unknown): asserts value is (...args: unknown[]) => unknown {
  assert(typeof value === 'function', 'Expected function')
}
export function ensureFunction(value: unknown) {
  assertFunction(value)
  return value
}
export function isFunction(v: unknown): v is (...args: unknown[]) => unknown {
  return typeof v === 'function'
}
//#endregion

//#region Iterable Identity
export function assertIterable<T>(value: unknown): asserts value is Iterable<T> {
  assertNonNullable(value)
  assert(typeof value[Symbol.iterator] === 'function', 'Expected iterable')
}
export function ensureIterable(value: unknown) {
  assertIterable(value)
  return value
}
export function isIterable<T>(value: unknown): value is Iterable<T> {
  return isNonNullable(value) && typeof value[Symbol.iterator] === 'function'
}
//#endregion
