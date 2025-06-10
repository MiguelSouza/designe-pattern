import { MercadoPagoFactory } from "../../../../gof/creational/abstract-factory/factories/MercadoPagoFactory";
import { PagSeguroFactory } from "../../../../gof/creational/abstract-factory/factories/PagSeguroFactory";
import { MercadoPagoProcessor } from "../../../../gof/creational/abstract-factory/gateways/MercadoPagoProcessor";
import { PagSeguroProcessor } from "../../../../gof/creational/abstract-factory/gateways/PagSeguroProcessor";

describe("Factories", () => {
  it("PagSeguroFactory deve retornar um PagSeguroProcessor", () => {
    const factory = new PagSeguroFactory();
    const processor = factory.createProcessor();

    expect(processor).toBeInstanceOf(PagSeguroProcessor);
  });

  it("MercadoPagoFactory deve retornar um MercadoPagoProcessor", () => {
    const factory = new MercadoPagoFactory();
    const processor = factory.createProcessor();

    expect(processor).toBeInstanceOf(MercadoPagoProcessor);
  });
});
