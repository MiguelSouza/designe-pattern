import { Order } from "../core/Order";
import { State } from "../core/State";
import { Paid } from "./Paid";
import { Cancelled } from "./Cancelled";

export class NewOrder implements State {
  private order!: Order;

  setContext(order: Order): void {
    this.order = order;
  }

  pay(): void {
    console.log("Pedido pago.");
    this.order.setState(new Paid());
  }

  ship(): void {
    console.log("Não é possível enviar um pedido não pago.");
  }

  deliver(): void {
    console.log("Pedido ainda não foi enviado.");
  }

  cancel(): void {
    console.log("Pedido cancelado.");
    this.order.setState(new Cancelled());
  }
}
