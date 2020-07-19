"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var doubly_linked_list_1 = require("@jeremiah_tenbrink/doubly-linked-list");
/**
 * Queue implementation using a doubly linked list.
 *
 */
var Queue = /** @class */ (function () {
    function Queue() {
        this.dll = new doubly_linked_list_1.DoublyLinkedList();
        this.length = 0;
    }
    /**
     * get length of the queue.
     * @return {number} length
     */
    Queue.prototype.getLength = function () {
        return (this.length);
    };
    /**
     * returns if the queue is empty or not
     * @return {boolean} empty
     */
    Queue.prototype.isEmpty = function () {
        return (this.length == 0);
    };
    /**
     * Adds the item to the queue.
     * @param item
     */
    Queue.prototype.enqueue = function (item) {
        this.dll.addToTail(item);
        this.length += 1;
    };
    /**
     * Returns the first item in the queue.
     * @return {(any | undefined)} item
     */
    Queue.prototype.dequeue = function () {
        if (this.length === 0) {
            return undefined;
        }
        var value = this.dll.removeFromHead();
        this.length -= 1;
        return value;
    };
    return Queue;
}());
exports.Queue = Queue;
//# sourceMappingURL=Queue.js.map