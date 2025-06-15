import { LevelExpression } from "../../../../gof/behavioral/interpreter/expressions/LevelExpression";
import { MessageContainsExpression } from "../../../../gof/behavioral/interpreter/expressions/MessageContainsExpression";
import { ServiceExpression } from "../../../../gof/behavioral/interpreter/expressions/ServiceExpression";
import { AndExpression } from "../../../../gof/behavioral/interpreter/operators/AndExpression";
import { OrExpression } from "../../../../gof/behavioral/interpreter/operators/OrExpression";

describe("Interpreter Pattern - Log Filter", () => {
  const log = { level: "error", service: "auth", message: "token expired" };

  it("deve interpretar level corretamente", () => {
    const expr = new LevelExpression("error");
    expect(expr.interpret(log)).toBe(true);
  });

  it("deve interpretar message com contains", () => {
    const expr = new MessageContainsExpression("token");
    expect(expr.interpret(log)).toBe(true);
  });

  it("deve compor AND e OR corretamente", () => {
    const expr = new OrExpression(
      new AndExpression(new LevelExpression("error"), new ServiceExpression("auth")),
      new MessageContainsExpression("token"),
    );

    expect(expr.interpret(log)).toBe(true);
  });
});
