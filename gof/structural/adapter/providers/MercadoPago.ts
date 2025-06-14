export class MercadoPago {
  payWithAmount(value: number, currency: string): void {
    console.log(`[MercadoPago] Payment of ${currency} ${value} processed successfully.`);
  }
}
