export class LinkedList<T> {
  public head: any;
  public length = 0;
  public isEmpty(): boolean {
    return true;
  }
  public addToHead(value: T) {
    this.head = { value, next: this.head };
    this.length++;
  }
  public getValueByIndex(index: number): T | undefined {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }
}
