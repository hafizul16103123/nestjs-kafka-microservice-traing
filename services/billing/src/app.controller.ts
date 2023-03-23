import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka, EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController implements OnModuleInit {
  constructor(private readonly appService: AppService,@Inject('AUTH_SERVICE') private readonly authClient: ClientKafka) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // EventPattern is used to emit an event
  @EventPattern('order_created')
  handleOrderCreated(data: any) {
    this.appService.handleOrderCreated(data);
  }


  // // MessagePattern is used to emit an message and retur response
  // @MessagePattern('order_created')
  // handleOrderCreated(data: any) {
  //   return this.appService.handleOrderCreated(data);
  // }
  onModuleInit() {
    this.authClient.subscribeToResponseOf('get_user')
  }
}
