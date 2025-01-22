// Provides a simplified interface to a larger body of code, such as a complex subsystem.

// Complex Subsystem
class SubsystemA {
  operationA(): string {
    return "SubsystemA: Operation A";
  }
}

class SubsystemB {
  operationB(): string {
    return "SubsystemB: Operation B";
  }
}

// Facade
class Facade {
  private subsystemA: SubsystemA;
  private subsystemB: SubsystemB;

  constructor() {
    this.subsystemA = new SubsystemA();
    this.subsystemB = new SubsystemB();
  }

  simplifiedOperation(): string {
    return `${this.subsystemA.operationA()} + ${this.subsystemB.operationB()}`;
  }
}

// Usage
const facade = new Facade();
console.log(facade.simplifiedOperation());
// Output: SubsystemA: Operation A + SubsystemB: Operation B
