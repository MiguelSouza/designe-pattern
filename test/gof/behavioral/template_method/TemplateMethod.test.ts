import { RegularCheckout } from "../../../../gof/behavioral/template_method/implementations/RegularCheckout";
import { VipCheckout } from "../../../../gof/behavioral/template_method/implementations/VipCheckout";

describe("Template Method Pattern - Checkout", () => {
  it("calcula total para cliente VIP com desconto e imposto", () => {
    const checkout = new VipCheckout();
    const result = checkout.calculate(1000);
    expect(result).toBeCloseTo(880, 2);
  });

  it("calcula total para cliente comum com imposto padrão", () => {
    const checkout = new RegularCheckout();
    const result = checkout.calculate(1000);
    expect(result).toBe(1100);
  });
});
