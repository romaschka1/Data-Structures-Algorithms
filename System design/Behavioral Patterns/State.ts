// Allows an object to change its behavior when its internal state changes.

// State Interface
interface State {
  handle(): void;
}

// Context
class Context {
  private state: State;

  setState(state: State): void {
    this.state = state;
  }

  request(): void {
    this.state.handle();
  }
}

// Concrete States
class ConcreteStateA implements State {
  handle(): void {
    console.log("State A: Handling request.");
  }
}

class ConcreteStateB implements State {
  handle(): void {
    console.log("State B: Handling request.");
  }
}

// Usage
const context = new Context();

const stateA = new ConcreteStateA();
const stateB = new ConcreteStateB();

context.setState(stateA);
context.request(); // Output: State A: Handling request.

context.setState(stateB);
context.request(); // Output: State B: Handling request.
