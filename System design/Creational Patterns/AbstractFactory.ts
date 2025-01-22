// Provides an interface for creating families of related or dependent objects
// without specifying their concrete classes.

// Abstract Products
interface Chair {
  hasLegs(): boolean;
  sitOn(): void;
}

interface Sofa {
  layOn(): void;
}

// Concrete Products
class ModernChair implements Chair {
  hasLegs(): boolean {
    return true;
  }
  sitOn(): void {
    console.log("Sitting on a modern chair.");
  }
}

class ModernSofa implements Sofa {
  layOn(): void {
    console.log("Lying on a modern sofa.");
  }
}

class VictorianChair implements Chair {
  hasLegs(): boolean {
    return false;
  }
  sitOn(): void {
    console.log("Sitting on a Victorian chair.");
  }
}

class VictorianSofa implements Sofa {
  layOn(): void {
    console.log("Lying on a Victorian sofa.");
  }
}

// Abstract Factory
interface FurnitureFactory {
  createChair(): Chair;
  createSofa(): Sofa;
}

// Concrete Factories
class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }
  createSofa(): Sofa {
    return new ModernSofa();
  }
}

class VictorianFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }
  createSofa(): Sofa {
    return new VictorianSofa();
  }
}

// Usage
function clientCode(factory: FurnitureFactory): void {
  const chair = factory.createChair();
  const sofa = factory.createSofa();

  chair.sitOn();
  sofa.layOn();
}

clientCode(new ModernFurnitureFactory());
// Output:
// Sitting on a modern chair.
// Lying on a modern sofa.

clientCode(new VictorianFurnitureFactory());
// Output:
// Sitting on a Victorian chair.
// Lying on a Victorian sofa.