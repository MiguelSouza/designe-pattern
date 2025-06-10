import { faker } from "@faker-js/faker";
import { MercadoPagoCreator } from "../../../../gof/creational/factory-method/creators/MercadoPagoCreator";

describe("MercadoPagoCreator", () => {
  it("deve processor pagamento com MercadoPagoService", () => {
    const creator = new MercadoPagoCreator();
    const amount = faker.number.float();

    const result = creator.processPayment(amount);

    expect(result).toBe(`MercadoPago processou pagamento de R$${amount}`);
  });
});
