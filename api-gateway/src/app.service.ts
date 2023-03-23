import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderDTO } from './dto/createOrderDTO';
import { OrderCreatedEvent } from './dto/events/orderCreatedEvent';

@Injectable()
export class AppService {
  constructor(@Inject("BILLING_SERVICE") readonly billingClient:ClientKafka){}
  getHello(): string {
    return 'Hello World!';
  }
  // Emit when no need to return response
  createOrder({userId,price}:CreateOrderDTO) {
    this.billingClient.emit(
      'order_created',
      new OrderCreatedEvent('123', userId, price),
    );
    return "Order created successfully"
  }

  // // Send when  need to return response
  // createOrder({userId,price}:CreateOrderDTO) {
  //   return this.billingClient.send(
  //     'order_created',
  //     new OrderCreatedEvent('123', userId, price),
  //   ).subscribe((data:any)=>{
  //     return data
  //   });
  // }
}
