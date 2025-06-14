import { faker } from "@faker-js/faker";
import { RealPaymentService } from "../../../../gof/structural/proxy-auth/services/RealPaymentService";
import { PaymentProxy } from "../../../../gof/structural/proxy-auth/services/PaymentProxy";

describe("Proxy Pattern - Payment", () => {
  let userTokens: Map<string, string>;
  let realService: RealPaymentService;

  const generateUsers = (count: number) => {
    const map = new Map<string, string>();
    for (let i = 0; i < count; i++) {
      const userId = faker.person.firstName();
      const token = faker.string.alphanumeric(12);
      map.set(userId, token);
    }
    return map;
  };

  beforeEach(() => {
    realService = new RealPaymentService();
    userTokens = generateUsers(20);
  });

  it("deve permitir que usuários válidos façam pagamento", () => {
    for (const [userId, token] of userTokens.entries()) {
      const proxy = new PaymentProxy(realService, token, userTokens);
      const amount = faker.number.int({ min: 100, max: 10000 });
      const result = proxy.pay(userId, amount);
      expect(result).toBe(`User ${userId} paid ${amount} successfully.`);
    }
  });

  it("deve negar pagamento com token inválido", () => {
    for (const [userId] of userTokens.entries()) {
      const invalidToken = faker.string.alphanumeric(12);
      const proxy = new PaymentProxy(realService, invalidToken, userTokens);
      const amount = faker.number.int({ min: 50, max: 500 });
      const result = proxy.pay(userId, amount);
      expect(result).toBe(`Access denied for user ${userId}: invalid token.`);
    }
  });

  it("deve negar pagamento para usuários desconhecidos", () => {
    const unknownUser = faker.person.firstName();
    const randomToken = faker.string.alphanumeric(12);
    const proxy = new PaymentProxy(realService, randomToken, userTokens);
    const amount = faker.number.int({ min: 1, max: 100 });
    const result = proxy.pay(unknownUser, amount);
    expect(result).toBe(`Access denied for user ${unknownUser}: invalid token.`);
  });

  it("deve registrar log em caso de sucesso", () => {
    const [userId, token] = [...userTokens.entries()][0];
    const proxy = new PaymentProxy(realService, token, userTokens);
    const amount = faker.number.int({ min: 300, max: 2000 });
    const log = jest.spyOn(console, "log").mockImplementation(() => {});
    proxy.pay(userId, amount);
    expect(log).toHaveBeenCalledWith(expect.stringContaining(`${userId} paid ${amount}`));
    log.mockRestore();
  });
});
