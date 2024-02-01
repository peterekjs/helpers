//#region Array Identity
export function assertArray<T>(value: unknown, message = 'Expected array'): asserts value is T[] {
  if (!Array.isArray(value)) throw new TypeError(message)
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
export type FilledArray<Type> = [Type, ...Type[]]

export function assertFilledArray<T>(value: unknown, message = 'Expected array to have at least one item'): asserts value is FilledArray<T> {
  assertArray(value)
  if (!value.length) throw new TypeError(message)
}
export function ensureFilledArray<T>(value: unknown) {
  assertFilledArray<T>(value)
  return value
}
export function isFilledArray<T>(value: unknown): value is FilledArray<T> {
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
