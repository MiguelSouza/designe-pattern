import { faker } from "@faker-js/faker";
import { PaymentRequestBuilder } from "../../../../gof/creational/builder/PaymentRequestBuilder";

describe("PaymentRequestBuilder", () => {
  it("deve construir um PaymentRequest completo", () => {
    const email = faker.internet.email();
    const description = faker.commerce.productDescription();
    const amount = faker.number.float({ min: 10, max: 1000 });
    const installments = faker.number.int({ min: 1, max: 12 });

    const request = new PaymentRequestBuilder()
      .setAmount(amount)
      .setDescription(description)
      .setMethod("credit_card")
      .setInstallments(installments)
      .setBuyerEmail(email)
      .build();

    expect(request.amount).toBe(amount);
    expect(request.description).toBe(description);
    expect(request.method).toBe("credit_card");
    expect(request.installments).toBe(installments);
    expect(request.buyerEmail).toBe(email);
  });

  it("deve lançar erro se amount ou method não forem definidos", () => {
    const builder = new PaymentRequestBuilder();
    expect(() => builder.build()).toThrow("Amount and payment method are required.");
  });

  it("deve construir um pagamento simples via pix", () => {
    const amount = faker.number.float();

    const request = new PaymentRequestBuilder().setAmount(amount).setMethod("pix").build();

    expect(request.amount).toBe(amount);
    expect(request.method).toBe("pix");
    expect(request.description).toBeUndefined();
    expect(request.installments).toBeUndefined();
    expect(request.buyerEmail).toBeUndefined();
  });
});
