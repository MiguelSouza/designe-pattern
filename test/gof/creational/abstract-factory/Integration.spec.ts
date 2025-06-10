import { PaymentRequest } from "../../../../gof/creational/abstract-factory/dto/PaymentRequest";
import { MercadoPagoFactory } from "../../../../gof/creational/abstract-factory/factories/MercadoPagoFactory";
import { PagSeguroFactory } from "../../../../gof/creational/abstract-factory/factories/PagSeguroFactory";
import { PaymentGatewayFactory } from "../../../../gof/creational/abstract-factory/factories/PaymentGatewayFactory";
import { faker } from "@faker-js/faker";

describe("Integração de pagamento usando Abstract Factory", () => {
  const request: PaymentRequest = {
    amount: faker.number.float(),
    currency: "BRL",
    customerId: faker.string.uuid(),
    method: faker.helpers.arrayElement(["boleto", "pix", "credit_card"]),
  };

  it("deve processar com PagSeguro", async () => {
    const factory: PaymentGatewayFactory = new PagSeguroFactory();
    const processor = factory.createProcessor();

    const logSpy = jest.spyOn(console, "log");

    await processor.processPayment(request);

    expect(logSpy).toHaveBeenCalledWith("PagSeguro: pagamento processado com sucesso:", request);

    logSpy.mockRestore();
  });

  it("deve processar com Mercado Pago", async () => {
    const factory: PaymentGatewayFactory = new MercadoPagoFactory();
    const processor = factory.createProcessor();

    const logSpy = jest.spyOn(console, "log");

    await processor.processPayment(request);

    expect(logSpy).toHaveBeenCalledWith(
      "Mercado Pago: pagamento enviado para processamento:",
      request,
    );

    logSpy.mockRestore();
  });
});
