import { CheckoutTemplate } from "../core/CheckoutTemplate";

export class RegularCheckout extends CheckoutTemplate {
  protected applyDiscount(total: number): number {
    return total;
  }
}
