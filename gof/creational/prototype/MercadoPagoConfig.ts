import { PaymentConfigPrototype } from "./PaymentConfigPrototype";

export class MercadoPagoConfig implements PaymentConfigPrototype {
  constructor(
    public publicKey: string,
    public accessToken: string,
  ) {}

  clone(): PaymentConfigPrototype {
    return new MercadoPagoConfig(this.publicKey, this.accessToken);
  }

  getInfo(): string {
    return `[MercadoPago] PublicKey: ${this.publicKey}, AccessToken: ${this.accessToken}`;
  }
}
