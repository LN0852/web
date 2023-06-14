import { binarySearch1, binarySearch2 } from '@/utils/binary-search'

describe('二分查询', () => {
  it('可以找到目标值', () => {
    const arr = [1, 2, 3, 45, 567, 889]
    expect(binarySearch1(arr, 45)).toBe(3)
    expect(binarySearch2(arr, 45)).toBe(3)
  })
  it('招不到目标值', () => {
    const arr = [1, 2, 3, 45, 567, 889]
    expect(binarySearch1(arr, 5)).toBe(-1)
    expect(binarySearch2(arr, 5)).toBe(-1)
  })
  it('空数组', () => {
    const arr: number[] = []
    expect(binarySearch1(arr, 5)).toBe(-1)
    expect(binarySearch2(arr, 5)).toBe(-1)
  })
})
