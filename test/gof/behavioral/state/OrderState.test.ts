import { Order } from "../../../../gof/behavioral/state/core/Order";
import { NewOrder } from "../../../../gof/behavioral/state/states/NewOrder";

describe("State Pattern - Order", () => {
  let order: Order;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    order = new Order(new NewOrder());
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("deve pagar um pedido novo", () => {
    order.pay();
    expect(consoleSpy).toHaveBeenCalledWith("Pedido pago.");
  });

  it("não deve enviar pedido antes de pagar", () => {
    order.ship();
    expect(consoleSpy).toHaveBeenCalledWith("Não é possível enviar um pedido não pago.");
  });

  it("deve cancelar pedido novo", () => {
    order.cancel();
    expect(consoleSpy).toHaveBeenCalledWith("Pedido cancelado.");
  });

  it("deve enviar pedido após pagamento", () => {
    order.pay();
    order.ship();
    expect(consoleSpy).toHaveBeenCalledWith("Pedido enviado.");
  });

  it("deve rejeitar cancelamento após pagamento", () => {
    order.pay();
    order.cancel();
    expect(consoleSpy).toHaveBeenCalledWith("Pedido já foi pago e não pode ser cancelado.");
  });

  it("deve entregar um pedido enviado", () => {
    order.pay();
    order.ship();
    order.deliver();
    expect(consoleSpy).toHaveBeenCalledWith("Pedido entregue.");
  });

  it("não deve cancelar um pedido enviado", () => {
    order.pay();
    order.ship();
    order.cancel();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Não é possível cancelar um pedido que já foi enviado.",
    );
  });

  it("não deve entregar um pedido cancelado", () => {
    order.cancel();
    order.deliver();
    expect(consoleSpy).toHaveBeenCalledWith("Pedido foi cancelado. Não pode ser entregue.");
  });
});
