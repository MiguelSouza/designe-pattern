import { CEO } from "../../../../gof/behavioral/chain_of_responsibility/handlers/CEO";
import { Director } from "../../../../gof/behavioral/chain_of_responsibility/handlers/Director";
import { Manager } from "../../../../gof/behavioral/chain_of_responsibility/handlers/Manager";

describe("Chain of Responsibility - Aprovação de Valores", () => {
  let manager: Manager;
  let director: Director;
  let ceo: CEO;

  beforeEach(() => {
    manager = new Manager();
    director = new Director();
    ceo = new CEO();
    manager.setNext(director).setNext(ceo);
  });

  it("Manager aprova pedidos até 1000", () => {
    expect(manager.handle(1000)).toBe("Manager approved $1000");
    expect(manager.handle(500)).toBe("Manager approved $500");
  });

  it("Director aprova pedidos entre 1001 e 5000", () => {
    expect(manager.handle(1500)).toBe("Director approved $1500");
    expect(manager.handle(5000)).toBe("Director approved $5000");
  });

  it("CEO aprova pedidos entre 5001 e 20000", () => {
    expect(manager.handle(6000)).toBe("CEO approved $6000");
    expect(manager.handle(20000)).toBe("CEO approved $20000");
  });

  it("Pedidos acima de 20000 precisam de reunião executiva", () => {
    expect(manager.handle(25000)).toBeNull();
  });

  it("Cadeia repassa corretamente para próximo handler", () => {
    const spyDirector = jest.spyOn(director, "handle");
    manager.handle(1500);
    expect(spyDirector).toHaveBeenCalledWith(1500);
    spyDirector.mockRestore();

    const spyCEO = jest.spyOn(ceo, "handle");
    manager.handle(6000);
    expect(spyCEO).toHaveBeenCalledWith(6000);
    spyCEO.mockRestore();
  });
});
