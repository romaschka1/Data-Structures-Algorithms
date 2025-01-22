// Encapsulates a request as an object, allowing you to parameterize objects with different requests.

// Command Interface
interface Command {
  execute(): void;
}

// Receiver
class Receiver {
  performActionA(): void {
    console.log("Receiver: Performing action A.");
  }

  performActionB(): void {
    console.log("Receiver: Performing action B.");
  }
}

// Concrete Commands
class CommandA implements Command {
  private receiver: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  execute(): void {
    this.receiver.performActionA();
  }
}

class CommandB implements Command {
  private receiver: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  execute(): void {
    this.receiver.performActionB();
  }
}

// Invoker
class Invoker {
  private commands: Command[] = [];

  addCommand(command: Command): void {
    this.commands.push(command);
  }

  executeCommands(): void {
    this.commands.forEach(command => command.execute());
  }
}

// Usage
const receiver = new Receiver();
const commandA = new CommandA(receiver);
const commandB = new CommandB(receiver);

const invoker = new Invoker();
invoker.addCommand(commandA);
invoker.addCommand(commandB);

invoker.executeCommands();
// Output:
// Receiver: Performing action A.
// Receiver: Performing action B.
