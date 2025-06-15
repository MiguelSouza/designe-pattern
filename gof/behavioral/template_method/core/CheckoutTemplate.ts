export abstract class CheckoutTemplate {
  calculate(total: number): number {
    const discounted = this.applyDiscount(total);
    const taxed = this.applyTax(discounted);
    return taxed;
  }

  protected abstract applyDiscount(total: number): number;

  protected applyTax(total: number): number {
    return total * 1.1;
  }
}
