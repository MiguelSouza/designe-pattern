import { CheckoutTemplate } from "../core/CheckoutTemplate";

export class VipCheckout extends CheckoutTemplate {
  protected applyDiscount(total: number): number {
    return total * 0.8;
  }
}
