// Composes objects into tree structures to represent part-whole hierarchies.
// Clients can treat individual objects and composites uniformly.

// Component Interface
interface Component {
  render(): void;
}

// Leaf (Individual Object)
class Leaf implements Component {
  constructor(private name: string) {}

  render(): void {
    console.log(`Rendering leaf: ${this.name}`);
  }
}

// Composite (Container for Components)
class Composite implements Component {
  private children: Component[] = [];

  add(component: Component): void {
    this.children.push(component);
  }

  remove(component: Component): void {
    this.children = this.children.filter(child => child !== component);
  }

  render(): void {
    console.log("Rendering composite...");
    this.children.forEach(child => child.render());
  }
}

// Usage
const leaf1 = new Leaf("Leaf 1");
const leaf2 = new Leaf("Leaf 2");
const composite = new Composite();

composite.add(leaf1);
composite.add(leaf2);

composite.render();
// Output:
// Rendering composite...
// Rendering leaf: Leaf 1
// Rendering leaf: Leaf 2
