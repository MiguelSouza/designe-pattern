export class PagSeguro {
  makePayment(value: number): void {
    console.log(`[PagSeguro] Payment of $${value} completed successfully.`);
  }
}
