// 将 0 移动至数组后边
const arrs = [1, 2, 0, 0, 0, 0, 33]
let _length = 0
// O(n^2)
for (let i = 0; i < arrs.length - _length; i++) {
  if (arrs[i] === 0) {
    arrs.push(0)
    arrs.splice(i, 1)
    i--
    _length++
  }
}
// console.log(arrs)

// O(n)
function moverZero(arr: number[]) {
  const length = arr.length
  if (length === 0) return

  let i
  let j = -1
  for (i = 0; i < length; i++) {
    if (arr[i] === 0 && j < 0) {
      j = i
    }
    if (arr[i] !== 0 && j >= 0) {
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      j++
    }
  }
}
moverZero(arrs)
console.log(arrs)
