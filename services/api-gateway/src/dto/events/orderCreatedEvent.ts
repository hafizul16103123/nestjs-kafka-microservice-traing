export class OrderCreatedEvent{
    constructor(
        private readonly orderId:string,
        private readonly userId:string,
        private readonly price:number
    ){}
    toString(){
        return JSON.stringify({
            orderId:this.orderId,
            userId:this.userId,
            price:this.price
        })
    
    }
       
}