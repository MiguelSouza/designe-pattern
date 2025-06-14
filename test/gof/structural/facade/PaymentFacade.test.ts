import { describe, it, expect } from "@jest/globals";
import { PaymentFacade } from "../../../../gof/structural/facade/PaymentFacade";

describe("PaymentFacade with interface", () => {
  const facade = new PaymentFacade();

  it("deve fazer o pagamento no PagSeguro", () => {
    const result = facade.payWithPagSeguro(150);
    expect(result).toEqual(["PagSeguro authenticated", "PagSeguro processed payment of 150"]);
  });

  it("deve fazer o reembolso no MercadoPago", () => {
    const result = facade.refundWithMercadoPago("TX789");
    expect(result).toEqual(["MercadoPago logged in", "MercadoPago refunded transaction TX789"]);
  });
});
