import { Report } from "./Report";

export class InventoryReport extends Report {
  title(): string {
    return "Inventory Summary";
  }

  data(): Record<string, any>[] {
    return [
      { item: "Socks", quantity: 300 },
      { item: "Belts", quantity: 150 },
    ];
  }
}
