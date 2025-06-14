import { ICoffee } from "./ICoffee";

export class SimpleCoffee implements ICoffee {
  getDescription(): string {
    return "Simple coffee";
  }

  getCost(): number {
    return 5;
  }
}
