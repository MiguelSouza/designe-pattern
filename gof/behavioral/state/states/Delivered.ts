import { Order } from "../core/Order";
import { State } from "../core/State";

export class Delivered implements State {
  private order!: Order;

  setContext(order: Order): void {
    this.order = order;
  }

  pay(): void {
    console.log("Pedido já foi entregue. Pagamento já processado.");
  }

  ship(): void {
    console.log("Pedido já foi entregue.");
  }

  deliver(): void {
    console.log("Pedido já foi entregue.");
  }

  cancel(): void {
    console.log("Não é possível cancelar um pedido já entregue.");
  }
}
