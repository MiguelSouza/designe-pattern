import { Observer } from "../core/Observer";

export class InventoryService implements Observer {
  update(event: string, data: any): void {
    if (event === "order_created") {
      console.log(`[Estoque] Atualizando estoque para os itens: ${data.items.join(", ")}`);
    }
  }
}
