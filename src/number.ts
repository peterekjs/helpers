import { curry } from 'ramda'

export function isNumber(v: unknown): v is number {
  return typeof v === 'number' && !Number.isNaN(v)
}

export function isFiniteNumber(v: unknown): v is number {
  return isNumber(v) && Number.isFinite(v)
}

export function isInteger(v: unknown): v is number {
  return isNumber(v) && Number.isInteger(v)
}

export function isPositiveInteger(v: unknown): v is number {
  return isInteger(v) && v > 0
}

export function isPositiveIntegerOrZero(v: unknown): v is number {
  return isInteger(v) && v >= 0
}

export function isNegativeInteger(v: unknown): v is number {
  return isInteger(v) && v < 0
}

export function isNegativeIntegerOrZero(v: unknown): v is number {
  return isInteger(v) && v <= 0
}

export const pad = curry((len: number, num: number) => {
  const str = String(num)
  const diff = len - str.length
  return diff > 0 ? '0'.repeat(diff) + str : str
})
