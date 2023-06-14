// 将一个数组旋转 K步
export const rotate = (arr: number[], k: number): number[] => {
  const length = arr.length
  if (!k || length === 0) return arr
  const step = Math.abs(k % length)
  for (let i = 0; i < step; i++) {
    const temp = arr.pop()
    if (temp) {
      arr.unshift(temp) // O(n) unshift非常非常慢，类似插排，要一点一点往后移动，空出一个空间
    }
  }
  return arr
}
const arr = [1, 2, 3, 4, 5, 6, 7]
const result = rotate(arr, 3)
console.log(result)

// 方法二
// 将数组拆分，再用concat拼装，concat操作很费时，但是从时间复杂的上考虑，这个方式是O(1)，相对方法1，是数量级上的优化

// [1,2,3,4] 与 [5,6,7]拼装
