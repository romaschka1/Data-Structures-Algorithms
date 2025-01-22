// 1. Class and Objects ---------------------------------------------------------------------------
class Shape {
  metadata: string;

  constructor(metadata: string) {
    this.metadata = metadata;
  }
  getArea(): number {
    console.log(`Shape is not specified and don't have an area`);
    return 0;
  }
}

// 2. Encapsulation (Restricts direct access, expose only necessary information) ------------------
class Shape2 {
  // Field `metadata` is reachable inside `Shape2` or it's children's
  private metadata: string;
}

// 3. Inheritance (inherit properties and methods from parent class) ------------------------------
class Circle extends Shape {
  radius: number

  constructor(metadata: string, radius: number) {
    // The super call must supply all parameters for base class, the constructor is not inherited
    super(metadata);
    this.radius = radius;
  }
}

// 4. Polymorphism (same method can have different implementations based on the context) ----------
class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(metadata: string, width: number, height: number) {
    super(metadata);
    this.width = width;
    this.height = height;
  }
  // Overriding parent's `getArea` function with new implementation
  getArea(): number {
    return this.width + this.height;
  }
}

// 5. Abstraction (hides the implementation details and only shows the essential features) --------
abstract class Shape3 {
  abstract getArea(): number;
  // Difference with interface, Abstract class can also contain implementation of methods
  getMetadata(): string {
    return 'Shape3 metadata';
  }
}
// Triangle needs to provide an implementation for `getArea` method
class Triangle extends Shape3 {
  getArea(): number {
    return 0;
  }
}

// 6. Association (relationship where two classes can interact but do not depend on each other) ---
// Two classes interact with each other, but neither owns the other.
class Driver {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Car {
  driveBy(driver: Driver): void {
    console.log(`${driver.name} is driving the car.`);
  }
}

const driver = new Driver("John");
const car = new Car();
car.driveBy(driver); // Output: John is driving the car.

// 7. Aggregation (weak association, where the lifecycle of the objects is independent) -----------
// One class contains another, but the contained object can exist independently.
class Engine {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
}
class Car2 {
  engine: Engine;
  constructor(engine: Engine) {
    this.engine = engine;
  }
}

const engine = new Engine("V8");
const car2 = new Car2(engine);
console.log(`Car has an engine: ${car2.engine.type}`); // Output: Car has an engine: V8

// 8. Composition (strong association where the child object’s lifecycle depends on the parent object)
class CPU {
  constructor(public cores: number) {}
}
class Computer {
  private cpu: CPU;

  constructor(cores: number) {
    this.cpu = new CPU(cores);
  }
  getCpuCores(): number {
    return this.cpu.cores;
  }
}

const computer = new Computer(4);
console.log(computer.getCpuCores()); // Output: 4
