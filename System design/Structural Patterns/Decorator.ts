// Adds behavior or responsibilities to objects dynamically without modifying their structure.

namespace decorator {
  // Component Interface
  interface Component {
    operation(): string;
  }

  // Concrete Component
  class ConcreteComponent implements Component {
    operation(): string {
      return "ConcreteComponent";
    }
  }

  // Base Decorator
  class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
      this.component = component;
    }

    operation(): string {
      return this.component.operation();
    }
  }

  // Concrete Decorators
  class ConcreteDecoratorA extends Decorator {
    operation(): string {
      return `ConcreteDecoratorA(${super.operation()})`;
    }
  }

  class ConcreteDecoratorB extends Decorator {
    operation(): string {
      return `ConcreteDecoratorB(${super.operation()})`;
    }
  }

  // Usage
  const component = new ConcreteComponent();
  const decoratorA = new ConcreteDecoratorA(component);
  const decoratorB = new ConcreteDecoratorB(decoratorA);

  console.log(decoratorB.operation());
  // Output: ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent))
}