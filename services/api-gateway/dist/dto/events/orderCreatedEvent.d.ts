export declare class OrderCreatedEvent {
    private readonly orderId;
    private readonly userId;
    private readonly price;
    constructor(orderId: string, userId: string, price: number);
    toString(): string;
}
