import { CoffeeDecorator } from "./CoffeeDecorator";

export class WithWhippedCream extends CoffeeDecorator {
  getDescription(): string {
    return this.decoratedCoffee.getDescription() + ", Whipped Cream";
  }

  getCost(): number {
    return this.decoratedCoffee.getCost() + 3;
  }
}
