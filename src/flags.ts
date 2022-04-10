import { compose } from 'ramda'

function flagsToValues(flags: boolean[]) {
  return flags.map((v, i) => Number(v) * 2 ** i)
}

function valuesToDec(values: number[]) {
  return values.reduce((p, c) => (c |= p), 0)
}

export const flagsToDec = compose(valuesToDec, flagsToValues)

export function decToFlags(dec: number) {
  return [...(dec >>> 0).toString(2)].map((v) => v === '1')
}
