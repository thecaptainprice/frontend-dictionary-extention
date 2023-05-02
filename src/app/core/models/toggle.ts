export class Toggle<T = boolean> {
  private offValue: T;
  private onValue: T;
  state: boolean;

  constructor(offValue: T, onValue: T, state: boolean = false) {
    this.offValue = offValue;
    this.onValue = onValue;
    this.state = state;
  }

  get value() {
    return this.state ? this.onValue : this.offValue;
  }

  toggle() {
    this.state = !this.state;
  }

  turnOn() {
    this.state = true;
  }

  turnOff() {
    this.state = false;
  }
}
