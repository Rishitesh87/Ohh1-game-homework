// Returns array with indices of the wrongly placed values.
//
// Example:
//
// threeOrMoreInARow([0,1,1,1,2,1])
// => [1,2,3]
//
export const threeOrMoreInARow = (rowOrCol) => {
  const counts = rowOrCol
    .join('')
    .match(/([1-2]|0)\1*/g) || []

  const matches = []
    .concat
    .apply([], counts.map((m, i) =>
      new Array(m.length).fill(m.match(/0/) ? null : m.length)
    ))
    .map((l, i) => (l > 2 ? i : null))
    .filter((l) => (l !== null))

  return matches
}

export const numberOfValues = (rowOrCol, value) => {
  return rowOrCol
    .filter(i => i === value)
    .length
}
