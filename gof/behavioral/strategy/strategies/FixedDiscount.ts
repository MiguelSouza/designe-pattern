import { DiscountStrategy } from "../core/DiscountStrategy";

export class FixedDiscount implements DiscountStrategy {
  constructor(private discount: number) {}
  calculate(amount: number): number {
    return amount - this.discount;
  }
}
