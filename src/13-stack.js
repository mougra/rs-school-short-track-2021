/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(/* element */) {
    throw new Error('Not implemented');
  }

  pop() {
    throw new Error('Not implemented');
  }

  peek() {
    throw new Error('Not implemented');
  }
}

module.exports = Stack;

// push(element) {
//   const stack = new Stack();
//   return arr.push(element);
// }

// pop() {
//   // if (this.lenght === 0) {
//   const current = this.head;
//   this.head = this.head.next;
//   this.lenght--;
//   return current.value;
// }

// peek() {
//   console.log(this.head.value, this.head);
//   return this.head;
// }
// }
