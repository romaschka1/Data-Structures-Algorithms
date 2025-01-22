// Defines a family of algorithms, encapsulates them, and makes them interchangeable.

// Strategy Interface
interface Strategy {
  execute(a: number, b: number): number;
}

// Concrete Strategies
class AddStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

class SubtractStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

class MultiplyStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}

// Context
class Calculator {
  private strategy: Strategy;

  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  calculate(a: number, b: number): number {
    return this.strategy.execute(a, b);
  }
}

// Usage
const calculator = new Calculator();

calculator.setStrategy(new AddStrategy());
console.log(calculator.calculate(5, 3)); // Output: 8

calculator.setStrategy(new SubtractStrategy());
console.log(calculator.calculate(5, 3)); // Output: 2

calculator.setStrategy(new MultiplyStrategy());
console.log(calculator.calculate(5, 3)); // Output: 15
