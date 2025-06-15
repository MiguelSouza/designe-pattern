import { Order } from "../core/Order";
import { State } from "../core/State";

export class Cancelled implements State {
  private order!: Order;

  setContext(order: Order): void {
    this.order = order;
  }

  pay(): void {
    console.log("Pedido foi cancelado. Não é possível pagar.");
  }

  ship(): void {
    console.log("Pedido foi cancelado. Não é possível enviar.");
  }

  deliver(): void {
    console.log("Pedido foi cancelado. Não pode ser entregue.");
  }

  cancel(): void {
    console.log("Pedido já está cancelado.");
  }
}
