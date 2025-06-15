import { DiscountStrategy } from "./DiscountStrategy";

export class Checkout {
  constructor(private strategy: DiscountStrategy) {}

  getTotal(amount: number): number {
    return this.strategy.calculate(amount);
  }
}
