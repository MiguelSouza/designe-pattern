import { MercadoPagoAdapter } from "../../../../gof/structural/adapter/adapters/MercadoPagoAdapter";

describe("MercadoPagoAdapter", () => {
  it("deve chamar payWithAmount com o valor e a moeda corretos", () => {
    const adapter = new MercadoPagoAdapter();
    const spy = jest
      .spyOn<any, any>(adapter["mercadoPago"], "payWithAmount")
      .mockImplementation(() => {});

    adapter.processPayment(150);

    expect(spy).toHaveBeenCalledWith(150, "BRL");

    spy.mockRestore();
  });
});
