import { threeOrMoreInARow, numberOfValues, areIdentical } from './game'

describe('threeOrMoreInARow', () => {
  const row = [0,2,1,2,2,2]
  const col = [1,1,1,0,2,2]
  const col1 = [0,1,1,1,2,1]

  it('returns the indices of the wrongly placed values', () => {
    expect(threeOrMoreInARow(row)).toEqual([3,4,5])
    expect(threeOrMoreInARow(col)).toEqual([0,1,2])
    expect(threeOrMoreInARow(col1)).toEqual([1,2,3])
  })
})

describe('numberOfValues', () => {
  const row = [0,2,1,2,2,2]

  it('returns the number of values', () => {
    expect(numberOfValues(row, 2)).toEqual(4)
    expect(numberOfValues(row, 1)).toEqual(1)
  })
})

// describe('areIdentical', () => {
//   it('returns true of rows or cols are identical', () => {
//     expect(areIdentical([1,2,1,2], [1,2,1,2])).toBe(true)
//   })
//
//   it('returns false of rows or cols are not identical', () => {
//     expect(areIdentical([1,1,2,2], [1,2,1,2])).toBe(false)
//   })
//
//   it('returns false if rows are not fully filled in', () => {
//     expect(areIdentical([1,2,0,2], [1,2,0,2])).toBe(false)
//   })
// })
