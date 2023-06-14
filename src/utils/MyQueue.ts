class MyQueue {
  private stack1: number[] = []
  private stack2: number[] = []

  add(n: number) {
    this.stack1.push(n)
  }

  delete(): number | null {
    const stack1 = this.stack1
    const stack2 = this.stack2
    while (stack1.length > 0) {
      const data = stack1.pop()
      if (data != null) stack2.push(data)
    }
    const result: number = stack2.pop() as number

    while (stack2.length) {
      const data = stack2.pop()
      if (data != null) {
        stack1.push(data)
      }
    }
    return result || null
  }

  get length(): number {
    return this.stack1.length
  }
}

const queue = new MyQueue()
queue.add(100)
queue.add(200)
const result = queue.delete()
console.log(result, queue)
