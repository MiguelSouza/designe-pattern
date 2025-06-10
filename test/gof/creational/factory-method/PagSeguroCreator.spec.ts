import { faker } from "@faker-js/faker";
import { PagSeguroCreator } from "../../../../gof/creational/factory-method/creators/PagSeguroCreator";

describe("PagSeguroCreator", () => {
  it("deve processar o pagamento com PagSeguroService", () => {
    const creator = new PagSeguroCreator();
    const amount = faker.number.float();

    const result = creator.processPayment(amount);

    expect(result).toBe(`PagSeguro processou pagamento de R$${amount}`);
  });
});
