import { Order } from "./Order";

export interface State {
  setContext(order: Order): void;

  pay(): void;
  ship(): void;
  deliver(): void;
  cancel(): void;
}
