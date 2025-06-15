export interface DiscountStrategy {
  calculate(amount: number): number;
}
