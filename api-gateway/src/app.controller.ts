import { Body, Controller, Get, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateOrderDTO } from './dto/createOrderDTO';

@Controller()
//Need to implements onModuleInit for initiate something while loading
export class AppController  implements OnModuleInit{
  constructor(private readonly appService: AppService,@Inject("BILLING_SERVICE") readonly billingClient:ClientKafka) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("create-order")
  createOrder(@Body() createOrder: CreateOrderDTO) {
    return this.appService.createOrder(createOrder)
  }
  //to subscribe a topic to get data
  onModuleInit() {
    this.billingClient.subscribeToResponseOf('order_created')
  }
}
