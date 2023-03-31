import { assert } from 'ts-essentials'
import type { NonEmptyArray } from 'ts-essentials'

//#region Array Identity
export function assertArray<T>(value: unknown): asserts value is T[] {
  assert(Array.isArray(value), 'Expected array')
}
export function ensureArray<T>(value: unknown) {
  assertArray<T>(value)
  return value
}
export function isArray<T>(value: unknown): value is T[] {
  return Array.isArray(value)
}
//#endregion

//#region Filled Array Identity
export function assertFilledArray<T>(value: unknown): asserts value is NonEmptyArray<T> {
  assertArray(value)
  assert(value.length, 'Expected array to have at least one item')
}
export function ensureFilledArray<T>(value: unknown) {
  assertFilledArray<T>(value)
  return value
}
export function isFilledArray<T>(value: unknown): value is NonEmptyArray<T> {
  return Array.isArray(value) && !!value.length
}
//#endregion

export function toArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value]
}

export function cycleArray<T>(array: T[], loop = false): () => typeof loop extends true ? T : T | undefined {
  const copy = [...array]
  const { length } = copy
  if (!length) return () => undefined

  let i = -1
  return () => {
    if (i >= length) return undefined

    const value = copy[++i]
    if (loop && i >= length) i = 0
    return value
  }
}
