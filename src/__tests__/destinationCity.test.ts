import { describe, it, expect } from 'vitest'
import { validDestinationCity } from '@/destinationCity/destinationCity'
import testCases from '@/destinationCity/testCases.json'

describe('destination city', () => {
  testCases.forEach(({ paths, expected }, index) => {
    it(`Test case #${index + 1}`, () => {
      expect(validDestinationCity(paths)).toBe(expected)
    })
  })
})
