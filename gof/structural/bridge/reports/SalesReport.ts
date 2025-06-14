import { Report } from "./Report";

export class SalesReport extends Report {
  title(): string {
    return "Monthly Sales Report";
  }

  data(): Record<string, any>[] {
    return [
      { product: "Shoes", total: 1200 },
      { product: "Shirts", total: 850 },
    ];
  }
}
