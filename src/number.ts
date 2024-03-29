import { curry } from 'ramda'

//#region Number Identity
export function assertNumber(value: unknown, message = 'Expected number'): asserts value is number {
  if (!isNumber(value)) throw new TypeError(message)
}
export function ensureNumber(value: unknown) {
  assertNumber(value)
  return value
}
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !Number.isNaN(value)
}
//#endregion

//#region Finite Number Identity
export function assertFiniteNumber(value: unknown, message = 'Expected finite number'): asserts value is number {
  assertNumber(value)
  if (!Number.isFinite(value)) throw new TypeError(message)
}
export function ensureFiniteNumber(value: unknown) {
  assertFiniteNumber(value)
  return value
}
export function isFiniteNumber(v: unknown): v is number {
  return isNumber(v) && Number.isFinite(v)
}
//#endregion

//#region Integer Identity
export function assertInteger(value: unknown, message = 'Expected integer'): asserts value is number {
  assertNumber(value)
  if (!Number.isInteger(value)) throw new TypeError(message)
}
export function ensureInteger(value: unknown) {
  assertInteger(value)
  return value
}
export function isInteger(v: unknown): v is number {
  return isNumber(v) && Number.isInteger(v)
}

export function assertSafeInteger(value: unknown, message = 'Expected safe integer'): asserts value is number {
  assertNumber(value)
  if (!Number.isSafeInteger(value)) throw new TypeError(message)
}
export function ensureSafeInteger(value: unknown) {
  assertSafeInteger(value)
  return value
}
export function isSafeInteger(v: unknown): v is number {
  return isNumber(v) && Number.isSafeInteger(v)
}
//#endregion

//#region Positive Number Identity
export function assertPositiveNumber(value: unknown, message = 'Expected number > 0'): asserts value is number {
  assertNumber(value)
  if (!(value > 0)) throw new TypeError(message)
}
export function ensurePositiveNumber(value: unknown) {
  assertPositiveNumber(value)
  return value
}
export function isPositiveNumber(v: unknown): v is number {
  return isNumber(v) && v > 0
}

export function assertPositiveNumberOrZero(value: unknown, message = 'Expected number >= 0'): asserts value is number {
  assertNumber(value)
  if (!(value >= 0)) throw new TypeError(message)
}
export function ensurePositiveNumberOrZero(value: unknown) {
  assertPositiveNumberOrZero(value)
  return value
}
export function isPositiveNumberOrZero(v: unknown): v is number {
  return isNumber(v) && v >= 0
}
//#endregion

//#region Negative Number Identity
export function assertNegativeNumber(value: unknown, message = 'Expected number < 0'): asserts value is number {
  assertNumber(value)
  if (!(value < 0)) throw new TypeError(message)
}
export function ensureNegativeNumber(value: unknown) {
  assertNegativeNumber(value)
  return value
}
export function isNegativeNumber(v: unknown): v is number {
  return isNumber(v) && v < 0
}

export function assertNegativeNumberOrZero(value: unknown, message = 'Expected number <= 0'): asserts value is number {
  assertNumber(value)
  if (!(value <= 0)) throw new TypeError(message)
}
export function ensureNegativeNumberOrZero(value: unknown) {
  assertNegativeNumberOrZero(value)
  return value
}
export function isNegativeIntegerOrZero(v: unknown): v is number {
  return isNumber(v) && v <= 0
}
//#endregion

export const pad = curry((len: number, num: number) => {
  const str = String(num)
  const diff = len - str.length
  return diff > 0 ? '0'.repeat(diff) + str : str
})
