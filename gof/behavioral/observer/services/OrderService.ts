import { Subject } from "../core/Subject";

export class OrderService {
  constructor(private subject: Subject) {}

  createOrder(orderId: string, customer: string, items: string[]) {
    console.log(`Pedido ${orderId} criado para ${customer}.`);
    this.subject.notify("order_created", { orderId, customer, items });
  }
}
