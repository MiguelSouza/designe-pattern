import { CoffeeDecorator } from "./CoffeeDecorator";

export class WithSugar extends CoffeeDecorator {
  getDescription(): string {
    return this.decoratedCoffee.getDescription() + ", Sugar";
  }

  getCost(): number {
    return this.decoratedCoffee.getCost() + 1;
  }
}
