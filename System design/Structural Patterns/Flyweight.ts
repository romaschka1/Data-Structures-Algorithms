// Minimizes memory usage by sharing common data between objects.

namespace flyweight {
  // Flyweight
  class Flyweight {
    constructor(private sharedState: string) {}

    operation(uniqueState: string): void {
      console.log(`Flyweight: Shared (${this.sharedState}) - Unique (${uniqueState})`);
    }
  }

  // Flyweight Factory
  class FlyweightFactory {
    private flyweights: { [key: string]: Flyweight } = {};

    getFlyweight(sharedState: string): Flyweight {
      if (!this.flyweights[sharedState]) {
        this.flyweights[sharedState] = new Flyweight(sharedState);
        console.log(`Creating flyweight for: ${sharedState}`);
      }
      return this.flyweights[sharedState];
    }
  }

  // Usage
  const factory = new FlyweightFactory();
  const flyweight1 = factory.getFlyweight("State1");
  const flyweight2 = factory.getFlyweight("State1");
  const flyweight3 = factory.getFlyweight("State2");

  flyweight1.operation("Unique1");
  flyweight3.operation("Unique2");
  // Output:
  // Creating flyweight for: State1
  // Creating flyweight for: State2
  // Flyweight: Shared (State1) - Unique (Unique1)
  // Flyweight: Shared (State2) - Unique (Unique2)
}