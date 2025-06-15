import { Observer } from "../core/Observer";

export class EmailService implements Observer {
  update(event: string, data: any): void {
    if (event === "order_created") {
      console.log(
        `[Email] Confirmação enviada para ${data.customer} sobre o pedido ${data.orderId}.`,
      );
    }
  }
}
