"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreatedEvent = void 0;
class OrderCreatedEvent {
    constructor(orderId, userId, price) {
        this.orderId = orderId;
        this.userId = userId;
        this.price = price;
    }
    toString() {
        return JSON.stringify({
            orderId: this.orderId,
            userId: this.userId,
            price: this.price
        });
    }
}
exports.OrderCreatedEvent = OrderCreatedEvent;
//# sourceMappingURL=orderCreatedEvent.js.map