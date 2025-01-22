// Creates new objects by copying an existing object (a prototype).

interface Prototype {
  clone(): this;
}

class ConcretePrototype implements Prototype {
  constructor(public name: string, public age: number) {}

  clone(): this {
    return Object.assign(Object.create(this), this);
  }
}

// Usage
const original = new ConcretePrototype("John", 30);
const copy = original.clone();

console.log(original); // Output: ConcretePrototype { name: 'John', age: 30 }
console.log(copy);     // Output: ConcretePrototype { name: 'John', age: 30 }
console.log(original === copy); // Output: false