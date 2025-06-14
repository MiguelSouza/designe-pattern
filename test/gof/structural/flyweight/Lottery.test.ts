import { describe, it, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { LotteryService } from "../../../../gof/structural/flyweight/services/LotteryService";

describe("Flyweight Pattern - Lottery Numbers with Faker", () => {
  it("deve compartilhar instâncias numéricas com muitos bilhetes e números aleatórios", () => {
    const service = new LotteryService();

    const billetsCount = 100;
    const numbersPerBillet = 15;
    const maxNumber = 60;

    for (let i = 0; i < billetsCount; i++) {
      const billetId = faker.string.alphanumeric(5).toUpperCase();

      const numbers = new Set<number>();
      while (numbers.size < numbersPerBillet) {
        numbers.add(faker.number.int({ min: 1, max: maxNumber }));
      }

      service.createBillet(billetId, Array.from(numbers));
    }

    const totalObjects = service.getFactory().getTotalObjectsCreated();

    expect(totalObjects).toBeLessThanOrEqual(maxNumber);
    expect(totalObjects).toBeGreaterThan(0);

    const billet = service.createBillet("TEST1", [1, 2, 3]);
    const display = billet.showNumbers();
    expect(display).toEqual([
      "Number 1 in billet TEST1",
      "Number 2 in billet TEST1",
      "Number 3 in billet TEST1",
    ]);
  });

  it("não deve criar instâncias duplicadas para os mesmos números em todos os boletos", () => {
    const service = new LotteryService();

    const billets = [
      { id: "AAA", numbers: [10, 20, 30, 40, 50] },
      { id: "BBB", numbers: [20, 30, 40, 60, 70] },
      { id: "CCC", numbers: [10, 30, 50, 70, 80] },
    ];

    billets.forEach(({ id, numbers }) => service.createBillet(id, numbers));

    expect(service.getFactory().getTotalObjectsCreated()).toBe(8);
  });

  it("deve lidar com grande número de tarugos de forma eficiente", () => {
    const service = new LotteryService();

    const billetsCount = 1000;
    const numbersPerBillet = 10;
    const maxNumber = 100;

    for (let i = 0; i < billetsCount; i++) {
      const billetId = faker.string.alphanumeric(6).toUpperCase();

      const numbers = new Set<number>();
      while (numbers.size < numbersPerBillet) {
        numbers.add(faker.number.int({ min: 1, max: maxNumber }));
      }

      service.createBillet(billetId, Array.from(numbers));
    }

    const totalObjects = service.getFactory().getTotalObjectsCreated();

    expect(totalObjects).toBeLessThanOrEqual(maxNumber);
    expect(totalObjects).toBeGreaterThan(0);
  });
});
