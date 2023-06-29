function findTowNumbers1(arr: number[], target: number): number[] {
  if (arr.length === 0) return arr
  const length = arr.length
  const map = new Map()
  for (let i = 0; i < length; i++) {
    if (map.has(target - arr[i])) {
      return [target - arr[i], arr[i]]
    } else {
      map.set(arr[i], i)
    }
  }
  return []
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(findTowNumbers1(arr, 3))
