import { CoffeeDecorator } from "./CoffeeDecorator";

export class WithMilk extends CoffeeDecorator {
  getDescription(): string {
    return this.decoratedCoffee.getDescription() + ", Milk";
  }

  getCost(): number {
    return this.decoratedCoffee.getCost() + 2;
  }
}
