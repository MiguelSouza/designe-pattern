import { Checkout } from "../../../../gof/behavioral/strategy/core/Checkout";
import { FixedDiscount } from "../../../../gof/behavioral/strategy/strategies/FixedDiscount";
import { PercentageDiscount } from "../../../../gof/behavioral/strategy/strategies/PercentageDiscount";

describe("Strategy Pattern", () => {
  it("aplica desconto fixo", () => {
    const checkout = new Checkout(new FixedDiscount(50));
    expect(checkout.getTotal(300)).toBe(250);
  });

  it("aplica desconto percentual", () => {
    const checkout = new Checkout(new PercentageDiscount(10));
    expect(checkout.getTotal(300)).toBe(270);
  });

  it("retorna o mesmo valor se desconto fixo for maior que o total", () => {
    const checkout = new Checkout(new FixedDiscount(200));
    expect(checkout.getTotal(300)).toBe(100);
  });

  it("retorna total correto com desconto percentual zero", () => {
    const checkout = new Checkout(new PercentageDiscount(0));
    expect(checkout.getTotal(300)).toBe(300);
  });
});
