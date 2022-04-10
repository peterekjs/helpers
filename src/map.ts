import { curry } from 'ramda'

/**
 * Get item from Map if exists, otherwise create a new entry
 */
export const getOrCreate = curry(
  <T, K>(initFn: (k: K) => T, map: Map<K, T>, key: K) => {
    if (map.has(key)) return map.get(key)

    const value = initFn(key)
    map.set(key, value)

    return value
  }
)
