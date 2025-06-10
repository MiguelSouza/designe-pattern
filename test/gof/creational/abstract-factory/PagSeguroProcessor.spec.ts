import { PagSeguroProcessor } from "../../../../gof/creational/abstract-factory/gateways/PagSeguroProcessor";
import { PaymentRequest } from "../../../../gof/creational/abstract-factory/dto/PaymentRequest";
import { faker } from "@faker-js/faker";

describe("PagSeguroProcessor", () => {
  it("deve processar o pagamento com sucesso", async () => {
    const processor = new PagSeguroProcessor();
    const mockRequest: PaymentRequest = {
      amount: faker.number.float(),
      currency: "BRL",
      customerId: faker.string.uuid(),
      method: faker.helpers.arrayElement(["boleto", "pix", "credit_card"]),
    };

    const consoleSpy = jest.spyOn(console, "log");

    await processor.processPayment(mockRequest);

    expect(consoleSpy).toHaveBeenCalledWith(
      "PagSeguro: pagamento processado com sucesso:",
      mockRequest,
    );

    consoleSpy.mockRestore();
  });
});
