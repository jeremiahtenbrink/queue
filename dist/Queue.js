"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var doubly_linked_list_1 = require("@jeremiah_tenbrink/doubly-linked-list");
/**
 * Queue implementation using a doubly linked list.
 *
 */
var Queue = /** @class */ (function (_super) {
    __extends(Queue, _super);
    function Queue() {
        var _this = _super.call(this) || this;
        _this.dll = new doubly_linked_list_1.DoublyLinkedList();
        _this.length = 0;
        return _this;
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
}(Object));
exports.Queue = Queue;
//# sourceMappingURL=Queue.js.map