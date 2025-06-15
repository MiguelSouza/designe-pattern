import { AuthMediator } from "../../../../gof/behavioral/mediator/core/AuthMediator";
import { AuthService } from "../../../../gof/behavioral/mediator/services/AuthService";
import { LoggerService } from "../../../../gof/behavioral/mediator/services/LoggerService";

describe("Mediator Pattern - Auth System", () => {
  let logger: LoggerService;
  let authService: AuthService;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    logger = new LoggerService();
    const mediator = new AuthMediator(authService, logger);
    authService = new AuthService(mediator);
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("deve notificar login", () => {
    authService.login("miguel");
    expect(consoleSpy).toHaveBeenCalledWith("miguel fez login.");
    expect(consoleSpy).toHaveBeenCalledWith("[LOG] Usuário logado: miguel");
  });

  it("deve notificar logout", () => {
    authService.logout("miguel");
    expect(consoleSpy).toHaveBeenCalledWith("miguel fez logout.");
    expect(consoleSpy).toHaveBeenCalledWith("[LOG] Usuário deslogado: miguel");
  });
});
