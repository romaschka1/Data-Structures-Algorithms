// Provides a placeholder or surrogate to control access to an object.

// Subject Interface
interface Subject {
  request(): void;
}

// Real Subject
class RealSubject implements Subject {
  request(): void {
    console.log("RealSubject: Handling request.");
  }
}

// Proxy
class ProxySubject implements Subject {
  private realSubject: RealSubject;

  constructor() {
    this.realSubject = new RealSubject();
  }

  request(): void {
    console.log("Proxy: Checking access before forwarding request.");
    this.realSubject.request();
  }
}

// Usage
const proxy = new ProxySubject();
proxy.request();
// Output:
// Proxy: Checking access before forwarding request.
// RealSubject: Handling request.
