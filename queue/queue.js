class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.queue[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    if (this.size() === 0) {
      return console.log("fila vazia!!");
    }

    const result = this.queue[this.head];
    delete this.queue[this.head];
    this.head++;
    return result
  }

  size() {
    return this.tail - this.head;
  }
}

const fila = new Queue();

let element;

do {
  element = prompt("Digite um elemento para adicionar na fila: ");
  if (element != null) {
    fila.enqueue(element);
  }
} while (element !== null);

console.log(fila.queue);
