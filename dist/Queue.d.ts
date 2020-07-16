/**
 * Queue implementation using a doubly linked list.
 *
 */
export declare class Queue extends Object {
    private dll;
    private length;
    constructor();
    /**
     * get length of the queue.
     * @return {number} length
     */
    getLength(): number;
    /**
     * returns if the queue is empty or not
     * @return {boolean} empty
     */
    isEmpty(): boolean;
    /**
     * Adds the item to the queue.
     * @param item
     */
    enqueue(item: any): void;
    /**
     * Returns the first item in the queue.
     * @return {(any | undefined)} item
     */
    dequeue(): undefined | any;
}
