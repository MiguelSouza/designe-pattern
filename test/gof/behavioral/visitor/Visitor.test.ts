import { ErrorEvent } from "../../../../gof/behavioral/visitor/events/ErrorEvent";
import { LoginEvent } from "../../../../gof/behavioral/visitor/events/LoginEvent";
import { LogoutEvent } from "../../../../gof/behavioral/visitor/events/LogoutEvent";
import { DatadogVisitor } from "../../../../gof/behavioral/visitor/visitors/DatadogVisitor";
import { ReportVisitor } from "../../../../gof/behavioral/visitor/visitors/ReportVisitor";

describe("Visitor Pattern - Auth Events", () => {
  const now = new Date("2025-06-14T12:00:00Z");

  it("deve gerar relatório dos eventos", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const events = [
      new LoginEvent("miguel", now),
      new LogoutEvent("miguel", now),
      new ErrorEvent("miguel", now, "Senha inválida"),
    ];

    const reporter = new ReportVisitor();
    events.forEach((event) => event.accept(reporter));

    expect(consoleSpy).toHaveBeenCalledTimes(3);
    consoleSpy.mockRestore();
  });

  it("deve enviar eventos para o Datadog", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const events = [
      new LoginEvent("ana", now),
      new LogoutEvent("ana", now),
      new ErrorEvent("ana", now, "Token expirado"),
    ];

    const datadog = new DatadogVisitor();
    events.forEach((event) => event.accept(datadog));

    expect(consoleSpy).toHaveBeenCalledTimes(3);
    consoleSpy.mockRestore();
  });
});
