import { faker } from "@faker-js/faker";
import { PaymentRequest } from "../../../../gof/creational/abstract-factory/dto/PaymentRequest";
import { MercadoPagoProcessor } from "../../../../gof/creational/abstract-factory/gateways/MercadoPagoProcessor";

describe("MercadoPagoProcessor", () => {
  it("deve processar o pagamento com sucesso", async () => {
    const processor = new MercadoPagoProcessor();
    const mockRequest: PaymentRequest = {
      amount: faker.number.float(),
      currency: "BRL",
      customerId: faker.string.uuid(),
      method: faker.helpers.arrayElement(["boleto", "pix", "credit_card"]),
    };

    const consoleSpy = jest.spyOn(console, "log");

    await processor.processPayment(mockRequest);

    expect(consoleSpy).toHaveBeenCalledWith(
      "Mercado Pago: pagamento enviado para processamento:",
      mockRequest,
    );

    consoleSpy.mockRestore();
  });
});
