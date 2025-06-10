import { PaymentConfigPrototype } from "./PaymentConfigPrototype";

export class PagSeguroConfig implements PaymentConfigPrototype {
  constructor(
    public token: string,
    public environment: "sandbox" | "production",
  ) {}

  clone(): PaymentConfigPrototype {
    return new PagSeguroConfig(this.token, this.environment);
  }

  getInfo(): string {
    return `[PagSeguro] Token: ${this.token}, Env: ${this.environment}`;
  }
}
