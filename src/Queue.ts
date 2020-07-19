import { DoublyLinkedList } from "@jeremiah_tenbrink/doubly-linked-list";

/**
 * Queue implementation using a doubly linked list.
 *
 */
export class Queue {
  private dll = new DoublyLinkedList();
  
  constructor() {
  
  }
  
  /**
   * @type {function} getSize  get length of the queue.
   * @return {number} size
   */
  getSize(): number {
    return this.dll.getSize()
  }
  
  /**
   * @type {function} isEmpty  returns if the queue is empty or not
   * @return {boolean} empty
   */
  isEmpty(): boolean {
    return ( this.dll.getSize() == 0 );
  }
  
  /**
   * @type {function} enqueue  Adds the item to the queue.
   * @param {any} item
   */
  enqueue( item: any ): void {
    this.dll.addToTail( item );
  }
  
  /**
   * Returns the first item in the queue.
   * @return {any | null} item
   */
  dequeue(): undefined | any {
    return this.dll.removeFromHead();
  }
  
}
