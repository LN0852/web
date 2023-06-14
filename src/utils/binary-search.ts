export function binarySearch1(arr: number[], target: number): number {
  // 循环二分
  const length = arr.length
  if (length === 0) return -1
  let start = 0
  let end = length - 1
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (arr[mid] === target) return mid
    if (arr[mid] > target) end = mid - 1
    if (arr[mid] < target) start = mid + 1
  }
  return -1
}
export function binarySearch2(arr: number[], target: number, start?: number, end?: number): number {
  // 递归二分
  const length = arr.length
  if (length === 0) return -1
  if (start == null) start = 0
  if (end == null) end = length - 1
  if (start > end) return -1
  const mid = Math.floor((start + end) / 2)
  if (arr[mid] > target) return binarySearch2(arr, target, start, mid - 1)
  else if (arr[mid] < target) return binarySearch2(arr, target, mid + 1, end)
  return mid
}

const arr = []
for (let i = 0; i < 10; i++) {
  arr.push(i * i)
}
const index = binarySearch2(arr, 3)
console.log(index)
