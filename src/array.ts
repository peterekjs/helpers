export function ensureArray<T>(v: T | T[]): T[] {
  return Array.isArray(v) ? v : [v]
}

export function isFilledArray(v: unknown): v is unknown[] {
  return Array.isArray(v) && !!v.length
}

export function cycleArray<T>(arr: T[]) {
  let i = -1

  return () => {
    if (++i >= arr.length) i = 0
    return arr[i]
  }
}
