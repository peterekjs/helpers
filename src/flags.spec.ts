import { describe, it } from 'vitest'
import { decToFlags, flagsToDec } from './flags'

describe('flags', () => {
  const FLAGS_VALUE = [true, false, true]
  const DECIMAL_VALUE = 5

  it('should convert flags array into decimal number', ({ expect }) => {
    expect(flagsToDec(FLAGS_VALUE)).toEqual(DECIMAL_VALUE)
  })

  it('should convert decimal number into flags array', ({ expect }) => {
    expect(decToFlags(DECIMAL_VALUE)).toEqual(FLAGS_VALUE)
  })
})
