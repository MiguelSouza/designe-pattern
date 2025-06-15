import { Order } from "../core/Order";
import { State } from "../core/State";
import { Shipped } from "./Shipped";

export class Paid implements State {
  private order!: Order;

  setContext(order: Order): void {
    this.order = order;
  }

  pay(): void {
    console.log("Pedido já foi pago.");
  }

  ship(): void {
    console.log("Pedido enviado.");
    this.order.setState(new Shipped());
  }

  deliver(): void {
    console.log("Pedido precisa ser enviado antes de ser entregue.");
  }

  cancel(): void {
    console.log("Pedido já foi pago e não pode ser cancelado.");
  }
}
