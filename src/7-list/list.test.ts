/**
 * 0️⃣ construct a generic linked list
 * 1️⃣ the isEmpty method determines whether the list has no head
 * 2️⃣ the addToHead method sets a node object on the head with this value inside
 * 3️⃣ if there was a head the addToHead method should set the it as the next node link of the new head
 * 4️⃣ the length property returns zero on empty lists
 * 4️⃣ the length property returns the number of nodes in the list
 */
import { LinkedList } from './list';
describe('a generic linked list', () => {
  let sutList: LinkedList<number>;
  beforeEach(() => {
    sutList = new LinkedList<number>();
  });
  it('0️⃣ construct a generic linked list', () => {
    expect(sutList).toBeDefined();
  });
  it('1️⃣ the isEmpty method determines whether the list has no head', () => {
    const actual = sutList.isEmpty();
    const expected = sutList.head === undefined;
    expect(actual).toBe(expected);
  });
  it('2️⃣ the addToHead method sets a node object on the head with this value inside', () => {
    sutList.addToHead(1);
    const actual = sutList.head?.value === 1;
    const expected = true;
    expect(actual).toBe(expected);
  });
  it('3️⃣ if there was a previous head, the addToHead method should set the old as the next node link of the new head', () => {
    sutList.addToHead(1); // first head --> new tail
    sutList.addToHead(2); // new head
    const actual = sutList.head?.next?.value;
    const expected = 1;
    expect(actual).toBe(expected);
  });
});
