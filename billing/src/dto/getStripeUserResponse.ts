export class GetStripeUserResponse {
    constructor(public readonly stripeUserId: string,public readonly price: number) {}
  
    toString() {
      return JSON.stringify({
        stripeUserId: this.stripeUserId,
        price: this.price,
      });
    }
  }
  