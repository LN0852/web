// 将一个数组旋转 K步
export const rotate = (arr: number[], k: number): number[] => {
  const length = arr.length
  if (!k || length === 0) return arr
  const step = Math.abs(k % length)
  for (let i = 0; i < step; i++) {
    const temp = arr.pop()
    if (temp) {
      arr.unshift(temp)
    }
  }
  return arr
}
const arr = [1, 2, 3, 4, 5, 6, 7]
const result = rotate(arr, 3)
console.log(result)

// 方法二
// 将数组拆分，再用concat拼装， 比较费时

// [1,2,3,4] 与 [5,6,7]拼装
