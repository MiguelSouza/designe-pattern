import { ICoffee } from "./ICoffee";

export abstract class CoffeeDecorator implements ICoffee {
  protected decoratedCoffee: ICoffee;

  constructor(coffee: ICoffee) {
    this.decoratedCoffee = coffee;
  }

  abstract getDescription(): string;
  abstract getCost(): number;
}
