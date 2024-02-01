//#region Nullable Identity
export type Nullable<T> = T | undefined | null

export function assertUndefined(value: unknown, message = 'Expected undefined'): asserts value is undefined {
  if (!isUndefined(value)) throw new TypeError(message)
}
export function ensureUndefined(value: unknown) {
  assertUndefined(value)
  return value
}
export function isUndefined(value: unknown): value is undefined {
  return typeof value === 'undefined'
}

export function assertDefined<T>(value: T, message = 'Expected defined'): asserts value is T extends undefined ? never : T {
  if (!isDefined(value)) throw new TypeError(message)
}
export function ensureDefined<T>(value: T) {
  assertDefined<T>(value)
  return value
}
export function isDefined<T>(value: T): value is T extends undefined ? never : T {
  return typeof value !== 'undefined'
}

export function assertNull(value: unknown, message = 'Expected null'): asserts value is null {
  if (!isNull(value)) throw new TypeError(message)
}
export function ensureNull(value: unknown) {
  assertNull(value)
  return value
}
export function isNull(value: unknown): value is undefined {
  return value === null
}

export function assertNullable(value: unknown, message = 'Expected nullable'): asserts value is undefined | null {
  if (!isNullable(value)) throw new TypeError(message)
}
export function ensureNullable(value: unknown) {
  assertNullable(value)
  return value
}
export function isNullable(value: unknown): value is undefined | null {
  return isUndefined(value) || isNull(value)
}

export function assertNonNullable<T>(value: T, message = 'Expected not null'): asserts value is NonNullable<T> {
  assertDefined(value)
  if (value === null) throw new TypeError(message)
}
export function ensureNonNullable<T>(value: T) {
  assertNonNullable<T>(value)
  return value
}
export function isNonNullable<T>(value: T): value is T & {} {
  return typeof value !== 'undefined' && value !== null
}
//#endregion

//#region Object Identity
export function assertObject(value: unknown, message = 'Expected object type'): asserts value is Record<string | number | symbol, unknown> {
  assertNonNullable(value)
  if (typeof value !== 'object') throw new TypeError(message)
}
export function ensureObject(value: unknown) {
  assertObject(value)
  return value
}
export function isObject(value: unknown): value is Record<string | number | symbol, unknown> {
  return isNonNullable(value) && typeof value === 'object'
}
//#endregion

//#region String Identity
export function assertString(value: unknown, message = 'Expected string'): asserts value is string {
  if (!isString(value)) throw new TypeError(message)
}
export function ensureString(value: unknown) {
  assertString(value)
  return value
}
export function isString(v: unknown): v is string {
  return typeof v === 'string'
}

export function assertFilledString(value: unknown, message = 'Expected string not to be empty'): asserts value is string {
  assertString(value)
  if (!value.length) throw new TypeError(message)
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
export function assertFunction(value: unknown, message = 'Expected function'): asserts value is (...args: unknown[]) => unknown {
  if (!isFunction(value)) throw new TypeError(message)
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
export function assertIterable<T>(value: unknown, message = 'Expected iterable'): asserts value is Iterable<T> {
  assertNonNullable(value)
  if ((value as T & { [key: symbol]: unknown })[Symbol.iterator] !== 'function') throw new TypeError(message)
}
export function ensureIterable(value: unknown) {
  assertIterable(value)
  return value
}
export function isIterable<T>(value: unknown): value is Iterable<T> {
  return isNonNullable(value) && typeof (value as T & { [key: symbol]: unknown })[Symbol.iterator] === 'function'
}
//#endregion
