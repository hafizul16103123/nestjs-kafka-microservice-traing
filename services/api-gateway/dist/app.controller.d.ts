import { OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateOrderDTO } from './dto/createOrderDTO';
export declare class AppController implements OnModuleInit {
    private readonly appService;
    readonly billingClient: ClientKafka;
    constructor(appService: AppService, billingClient: ClientKafka);
    getHello(): string;
    createOrder(createOrder: CreateOrderDTO): string;
    onModuleInit(): void;
}
