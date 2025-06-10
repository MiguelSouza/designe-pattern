import { faker } from "@faker-js/faker";
import { PagSeguroConfig } from "../../../../gof/creational/prototype/PagSeguroConfig";

describe("Prototype Pattern", () => {
  it("deve clonar corretamente a configuração PagSeguro", () => {
    const original = new PagSeguroConfig(
      faker.string.alphanumeric(32),
      faker.helpers.arrayElement(["sandbox", "production"]),
    );
    const clone = original.clone();

    expect(clone).not.toBe(original);
    expect(clone).toEqual(original);

    expect(clone.getInfo()).toContain("[PagSeguro]");
  });
});
