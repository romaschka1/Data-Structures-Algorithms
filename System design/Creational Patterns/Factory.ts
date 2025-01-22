namespace factory {
  // Defines a method for creating objects, but lets subclasses decide which class to instantiate.

  interface Product {
    operation(): string;
  }
  
  class ConcreteProductA implements Product {
    operation(): string {
      return "Product A created";
    }
  }
  
  class ConcreteProductB implements Product {
    operation(): string {
      return "Product B created";
    }
  }
  
  abstract class Creator {
    abstract createProduct(): Product;
  
    someOperation(): string {
      const product = this.createProduct();
      return `Creator: ${product.operation()}`;
    }
  }
  
  class ConcreteCreatorA extends Creator {
    createProduct(): Product {
      return new ConcreteProductA();
    }
  }
  
  class ConcreteCreatorB extends Creator {
    createProduct(): Product {
      return new ConcreteProductB();
    }
  }
  
  // Usage
  const creatorA = new ConcreteCreatorA();
  console.log(creatorA.someOperation()); // Output: Creator: Product A created
  
  const creatorB = new ConcreteCreatorB();
  console.log(creatorB.someOperation()); // Output: Creator: Product B created
}