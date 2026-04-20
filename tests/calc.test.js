import { describe, it, expect } from 'vitest'
import { calculateCompoundInterest } from '../src/calc'

describe('calculateCompoundInterest', () => {
    it('returns start amount when years and monthly saving are zero', () => {
        expect(calculateCompoundInterest(10000, 0, 0, 7)).toBe(10000)
    })

    it('adds monthly saving correctly when interest is zero', () => {
        expect(calculateCompoundInterest(0, 1000, 1, 0)).toBe(12000)
    })

    it('grows with positive interest', () => {
        expect(calculateCompoundInterest(10000, 0, 1, 12)).toBeGreaterThan(10000)
    })

    it('throws error for negative values', () => {
        expect(() => calculateCompoundInterest(-1, 500, 10, 7)).toThrow()
    })
})