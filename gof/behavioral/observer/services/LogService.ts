import { Observer } from "../core/Observer";

export class LogService implements Observer {
  update(event: string, data: any): void {
    if (event === "order_created") {
      console.log(`[Log] Pedido ${data.orderId} registrado no sistema.`);
    }
  }
}
