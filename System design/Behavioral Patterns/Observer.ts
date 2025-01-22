// Defines a one-to-many dependency so that when one object changes state, all dependents are notified.

namespace observer {
  // Observer Interface
  interface Observer {
    update(state: string): void;
  }

  // Subject
  class Subject {
    private observers: Observer[] = [];
    private state: string;

    attach(observer: Observer): void {
      this.observers.push(observer);
    }

    detach(observer: Observer): void {
      this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(): void {
      this.observers.forEach(observer => observer.update(this.state));
    }

    setState(state: string): void {
      this.state = state;
      this.notify();
    }
  }

  // Concrete Observers
  class ConcreteObserverA implements Observer {
    update(state: string): void {
      console.log(`Observer A: Reacted to state change: ${state}`);
    }
  }

  class ConcreteObserverB implements Observer {
    update(state: string): void {
      console.log(`Observer B: Reacted to state change: ${state}`);
    }
  }

  // Usage
  const subject = new Subject();

  const observerA = new ConcreteObserverA();
  const observerB = new ConcreteObserverB();

  subject.attach(observerA);
  subject.attach(observerB);

  subject.setState("State 1");
  // Output:
  // Observer A: Reacted to state change: State 1
  // Observer B: Reacted to state change: State 1

  subject.detach(observerA);
  subject.setState("State 2");
  // Output:
  // Observer B: Reacted to state change: State 2

}