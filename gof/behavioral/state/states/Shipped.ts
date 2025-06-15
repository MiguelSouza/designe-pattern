import { Order } from "../core/Order";
import { State } from "../core/State";
import { Delivered } from "./Delivered";

export class Shipped implements State {
  private order!: Order;

  setContext(order: Order): void {
    this.order = order;
  }

  pay(): void {
    console.log("Pedido já foi pago.");
  }

  ship(): void {
    console.log("Pedido já foi enviado.");
  }

  deliver(): void {
    console.log("Pedido entregue.");
    this.order.setState(new Delivered());
  }

  cancel(): void {
    console.log("Não é possível cancelar um pedido que já foi enviado.");
  }
}
