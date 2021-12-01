export class LinkedList<T> {
  public head: any;
  public isEmpty(): boolean {
    return true;
  }
  public addToHead(value: T) {
    this.head = { value, next: this.head };
  }
}
