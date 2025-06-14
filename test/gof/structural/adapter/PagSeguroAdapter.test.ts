import { PagSeguroAdapter } from "../../../../gof/structural/adapter/adapters/PagSeguroAdapter";

describe("PagSeguroAdapter", () => {
  it("deve chamar makePayment com o valor correto", () => {
    const adapter = new PagSeguroAdapter();
    const spy = jest
      .spyOn<any, any>(adapter["pagSeguro"], "makePayment")
      .mockImplementation(() => {});

    adapter.processPayment(200);

    expect(spy).toHaveBeenCalledWith(200);

    spy.mockRestore();
  });
});
