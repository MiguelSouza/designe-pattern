import { PagSeguroProcessor } from "../../../../gof/creational/singleton/services/PagSeguroProcessor";

describe("PagSeguroProcessor Singleton", () => {
  it("deve retornar a mesma instancia", () => {
    const instance1 = PagSeguroProcessor.getInstance();
    const instance2 = PagSeguroProcessor.getInstance();
    expect(instance1).toBe(instance2);
  });

  it("deve chamar o process payment com o valor correto", async () => {
    const processor = PagSeguroProcessor.getInstance();
    const spy = jest.spyOn(processor, "processPayment").mockImplementation(async () => {});

    await processor.processPayment({ amount: 100 });

    expect(spy).toHaveBeenCalledWith({ amount: 100 });

    spy.mockRestore();
  });

  it("deve processar o pagamento e exibir mensagem no console", async () => {
    const processor = PagSeguroProcessor.getInstance();

    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    await processor.processPayment({ amount: 100 });

    expect(consoleSpy).toHaveBeenCalledWith("[PagSeguro Singleton] Processando R$100");

    consoleSpy.mockRestore();
  });
});
