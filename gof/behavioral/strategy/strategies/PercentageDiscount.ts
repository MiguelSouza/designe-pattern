import { DiscountStrategy } from "../core/DiscountStrategy";

export class PercentageDiscount implements DiscountStrategy {
  constructor(private percent: number) {}
  calculate(amount: number): number {
    return amount - amount * (this.percent / 100);
  }
}
