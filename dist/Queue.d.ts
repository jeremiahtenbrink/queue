/**
 * Queue implementation using a doubly linked list.
 *
 */
export declare class Queue {
    private dll;
    constructor();
    /**
     * @type {function} getSize  get length of the queue.
     * @return {number} size
     */
    getSize(): number;
    /**
     * @type {function} isEmpty  returns if the queue is empty or not
     * @return {boolean} empty
     */
    isEmpty(): boolean;
    /**
     * @type {function} enqueue  Adds the item to the queue.
     * @param {any} item
     */
    enqueue(item: any): void;
    /**
     * Returns the first item in the queue.
     * @return {any | null} item
     */
    dequeue(): undefined | any;
}
