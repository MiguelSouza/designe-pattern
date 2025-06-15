import { State } from "./State";

export class Order {
  private state: State;

  constructor(initialState: State) {
    this.setState(initialState);
  }

  setState(state: State) {
    this.state = state;
    this.state.setContext(this);
  }

  getState() {
    return this.state;
  }

  pay() {
    this.state.pay();
  }

  ship() {
    this.state.ship();
  }

  deliver() {
    this.state.deliver();
  }

  cancel() {
    this.state.cancel();
  }
}
