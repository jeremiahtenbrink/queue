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
    }
    /**
     * @type {function} getSize  get length of the queue.
     * @return {number} size
     */
    Queue.prototype.getSize = function () {
        return this.dll.getSize();
    };
    /**
     * @type {function} isEmpty  returns if the queue is empty or not
     * @return {boolean} empty
     */
    Queue.prototype.isEmpty = function () {
        return (this.dll.getSize() == 0);
    };
    /**
     * @type {function} enqueue  Adds the item to the queue.
     * @param {any} item
     */
    Queue.prototype.enqueue = function (item) {
        this.dll.addToTail(item);
    };
    /**
     * Returns the first item in the queue.
     * @return {any | null} item
     */
    Queue.prototype.dequeue = function () {
        return this.dll.removeFromHead();
    };
    return Queue;
}());
exports.Queue = Queue;
//# sourceMappingURL=Queue.js.map