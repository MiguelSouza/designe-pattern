import { PaymentRequest, PaymentMethod } from "./PaymentRequest";

export class PaymentRequestBuilder {
  private request: PaymentRequest = new PaymentRequest();

  setAmount(amount: number): this {
    this.request.amount = amount;
    return this;
  }

  setDescription(description: string): this {
    this.request.description = description;
    return this;
  }

  setMethod(method: PaymentMethod): this {
    this.request.method = method;
    return this;
  }

  setInstallments(installments: number): this {
    this.request.installments = installments;
    return this;
  }

  setBuyerEmail(email: string): this {
    this.request.buyerEmail = email;
    return this;
  }

  build(): PaymentRequest {
    if (!this.request.amount || !this.request.method) {
      throw new Error("Amount and payment method are required.");
    }

    return this.request;
  }
}
