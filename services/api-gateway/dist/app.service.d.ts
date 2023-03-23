import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderDTO } from './dto/createOrderDTO';
export declare class AppService {
    readonly billingClient: ClientKafka;
    constructor(billingClient: ClientKafka);
    getHello(): string;
    createOrder({ userId, price }: CreateOrderDTO): string;
}
