import { rotate } from '@/utils/rotate'

describe('数组旋转K步', () => {
  it('正常旋转', () => {
    // 单元测试需要执行的函数
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = 3
    const res = rotate(arr, k)
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]) // res 是结果，判断结果和期望的输出是否相等
  })
  it('数组为空', () => {
    const arr = [] as number[]
    const k = 3
    const res = rotate(arr, k)
    expect(res).toEqual([])
  })
  it('k 是负值', () => {
    const res = rotate([1, 2, 3, 4, 5, 6, 7], -3)
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
  })
  it('k 是 0', () => {
    const res = rotate([1, 2, 3, 4, 5, 6, 7], 0)
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
})
