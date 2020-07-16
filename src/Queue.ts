import { DoublyLinkedList } from "@jeremiah_tenbrink/doubly-linked-list";

/**
 * Queue implementation using a doubly linked list.
 *
 */
export class Queue extends Object {
  private dll = new DoublyLinkedList();
  private length = 0;
  
  constructor() {
    super();
  }
  
  /**
   * get length of the queue.
   * @return {number} length
   */
  getLength(): number {
    return ( this.length );
  }
  
  /**
   * returns if the queue is empty or not
   * @return {boolean} empty
   */
  isEmpty(): boolean {
    return ( this.length == 0 );
  }
  
  /**
   * Adds the item to the queue.
   * @param item
   */
  enqueue( item: any ): void {
    this.dll.addToTail( item );
    this.length += 1;
  }
  
  /**
   * Returns the first item in the queue.
   * @return {(any | undefined)} item
   */
  dequeue(): undefined | any {
    
    if ( this.length === 0 ) {
      return undefined;
    }
    const value = this.dll.removeFromHead();
    
    this.length -= 1;
    
    return value;
    
  }
  
}
