// Passes requests along a chain of handlers.
// Each handler decides to process the request or pass it to the next.

namespace responsibilityChain {
  // Handler Interface
  interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string | null;
  }

  // Abstract Handler
  abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
      this.nextHandler = handler;
      return handler;
    }

    handle(request: string): string | null {
      if (this.nextHandler) {
        return this.nextHandler.handle(request);
      }
      return null;
    }
  }

  // Concrete Handlers
  class MonkeyHandler extends AbstractHandler {
    handle(request: string): string | null {
      if (request === "Banana") {
        return `Monkey: I'll eat the ${request}.`;
      }
      return super.handle(request);
    }
  }

  class DogHandler extends AbstractHandler {
    handle(request: string): string | null {
      if (request === "Bone") {
        return `Dog: I'll chew the ${request}.`;
      }
      return super.handle(request);
    }
  }

  class CatHandler extends AbstractHandler {
    handle(request: string): string | null {
      if (request === "Fish") {
        return `Cat: I'll eat the ${request}.`;
      }
      return super.handle(request);
    }
  }

  // Usage
  const monkey = new MonkeyHandler();
  const dog = new DogHandler();
  const cat = new CatHandler();

  monkey.setNext(dog).setNext(cat);

  const requests = ["Banana", "Bone", "Fish", "Apple"];

  requests.forEach(request => {
    const result = monkey.handle(request);
    if (result) {
      console.log(result);
    } else {
      console.log(`${request} was left untouched.`);
    }
  });
  // Output:
  // Monkey: I'll eat the Banana.
  // Dog: I'll chew the Bone.
  // Cat: I'll eat the Fish.
  // Apple was left untouched.
}