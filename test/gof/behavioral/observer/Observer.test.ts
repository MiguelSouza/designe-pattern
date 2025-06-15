import { Subject } from "../../../../gof/behavioral/observer/core/Subject";
import { EmailService } from "../../../../gof/behavioral/observer/services/EmailService";
import { InventoryService } from "../../../../gof/behavioral/observer/services/InventoryService";
import { LogService } from "../../../../gof/behavioral/observer/services/LogService";
import { OrderService } from "../../../../gof/behavioral/observer/services/OrderService";

describe("Observer Pattern - Order System", () => {
  let subject: Subject;
  let orderService: OrderService;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    subject = new Subject();
    orderService = new OrderService(subject);
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    subject.attach(new EmailService());
    subject.attach(new LogService());
    subject.attach(new InventoryService());
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("deve notificar todos os observers ao criar um pedido", () => {
    orderService.createOrder("ORD001", "Miguel", ["Livro", "Caneta"]);

    expect(consoleSpy).toHaveBeenCalledWith("Pedido ORD001 criado para Miguel.");
    expect(consoleSpy).toHaveBeenCalledWith(
      "[Email] Confirmação enviada para Miguel sobre o pedido ORD001.",
    );
    expect(consoleSpy).toHaveBeenCalledWith("[Log] Pedido ORD001 registrado no sistema.");
    expect(consoleSpy).toHaveBeenCalledWith(
      "[Estoque] Atualizando estoque para os itens: Livro, Caneta",
    );
  });
});
