import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetStripeUserResponse } from './dto/getStripeUserResponse';
import { GetUserRequest } from './dto/getUserRequest';
import { OrderCreatedEvent } from './events/orderCreatedEvent';

@Injectable()
export class AppService {
  constructor( @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,){}
  getHello(): string {
    return 'Hello World!';
  }
  handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
    console.log('Billing service called')
    this.authClient
      .send('get_user', new GetUserRequest(orderCreatedEvent.userId))
      .subscribe((user:GetStripeUserResponse) => {
        console.log(
          `Billing user with stripe ID ${user.stripeUserId} a price of $${orderCreatedEvent.price}...`,
        );
        return user
      });
  }
}
