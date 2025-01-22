// Converts the interface of a class into another interface that a client expects.

// Target Interface
interface Target {
  request(): string;
}

// Adaptee (Existing functionality that needs adaptation)
class Adaptee {
  specificRequest(): string {
    return "Adaptee: Specific request";
  }
}

// Adapter (Converts the Adaptee's interface to match the Target's)
class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  request(): string {
    return `Adapter: (TRANSLATED) ${this.adaptee.specificRequest()}`;
  }
}

// Usage
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
console.log(adapter.request());
// Output: Adapter: (TRANSLATED) Adaptee: Specific request
