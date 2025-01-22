// Separates the construction of a complex object from its representation
// so the same construction process can create different representations.

class Product {
  parts: string[] = [];

  addPart(part: string): void {
    this.parts.push(part);
  }

  listParts(): void {
    console.log(`Product parts: ${this.parts.join(", ")}`);
  }
}

interface Builder {
  reset(): void;
  buildPartA(): void;
  buildPartB(): void;
  buildPartC(): void;
  getResult(): Product;
}

class ConcreteBuilder implements Builder {
  private product: Product;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.product = new Product();
  }

  buildPartA(): void {
    this.product.addPart("Part A");
  }

  buildPartB(): void {
    this.product.addPart("Part B");
  }

  buildPartC(): void {
    this.product.addPart("Part C");
  }

  getResult(): Product {
    const result = this.product;
    this.reset(); // Reset builder for next use
    return result;
  }
}

// Director
class Director {
  private builder: Builder;

  setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  constructMinimalProduct(): void {
    this.builder.buildPartA();
  }

  constructFullProduct(): void {
    this.builder.buildPartA();
    this.builder.buildPartB();
    this.builder.buildPartC();
  }
}

// Usage
const builder = new ConcreteBuilder();
const director = new Director();

director.setBuilder(builder);

console.log("Building minimal product:");
director.constructMinimalProduct();
builder.getResult().listParts();
// Output: Product parts: Part A

console.log("\nBuilding full product:");
director.constructFullProduct();
builder.getResult().listParts();
// Output: Product parts: Part A, Part B, Part C
