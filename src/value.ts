import { either } from 'ramda'
import { isFiniteNumber } from './number'

export function isDictionary<T extends Record<string, unknown>>(
  v: unknown
): v is T {
  return !!v && typeof v === 'object' && !Array.isArray(v)
}

export function isFilledDictionary<T extends Record<string, unknown>>(
  v: unknown
): v is T {
  return isDictionary(v) && !!Object.values({ ...v }).length
}

export function isString(v: unknown): v is string {
  return typeof v === 'string'
}

export function isFilledString(v: unknown): v is string {
  return isString(v) && !!v.length
}

export function isFunction<T extends (...args: unknown[]) => unknown>(
  v: unknown
): v is T {
  return typeof v === 'function'
}

export function isStringOrNumber(v: unknown): v is string | number {
  return either<(v: unknown) => v is string | number>(
    isString,
    isFiniteNumber
  )(v)
}
