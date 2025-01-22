// S: Single Responsibility (class should have one, and only one, reason to change) ---------------
// Don't
class User {
  // Two methods are responsible for two different things
  getUserData(): any { return null; }
  authorizeUser(): any { return null; }
}
// Do
class UserData {
  getUserData(): any { return null; }
}
class UserAuthorization {
  authorizeUser(): any { return null; }
}

// O: Open/Closed Principle (entry should be open for extension, but closed for modification) -----
// Don't
class Shape4 {
  type: string;

  constructor (type) {
    this.type = type;
  }

  calculateArea(): number {
    // To add new shape, we need to change this method every time
    if (this.type === 'rectangle') {
      return 2 * 5;
    } else if (this.type === 'circle') {
      return Math.PI * 3 * 3;
    }
    return 0;
  }
}
// Do
abstract class Shape5 {
  abstract getArea(): number;
}

class Rectangle2 extends Shape5 {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

// L: Liskov Substitution Principle (objects of superclass should be replaceable with it's own subclasses)
// Don't
class Vehicle {
  startEngine(): void {}
}
class Car3 extends Vehicle {
  startEngine(): void {
    console.log('Starting Car3 engine');
  }
}
class Bicycle extends Vehicle {
  // Don't make any sense to have an engine inside bicycle
  startEngine(): void {
    console.log('Starting Bicycle engine?');
  }
}
// Do
class Vehicle2 {
  start(): void {}
}
class Car4 extends Vehicle2 {
  start(): void {
    console.log('Starting car');
  }
}
class Bicycle2 extends Vehicle2 {
  start(): void {
    console.log('Start riding the bicycle');
  }
}

// I: Interface Segregation Principle (we should not define interface fields that we don't use) ---
// Don't
interface DoEverythingInOneInterface {
  bookName: string;
  readBook(): void;
  // If we want just to drive a can, we also need to define book logic
  carName: string;
  driveCar(): void;
}
// Do
interface BookInterface {
  bookName: string;
  readBook(): void;
}
interface CarInterface {
  carName: string;
  driveCar(): void;
}

// D: Dependency Inversion Principle (high and low-level modules should depend on abstraction) ----
// Don't
class GmailClient {
  sendMessage(message: string): string {
    return 'Message was send using Gmail. Message: ' + message;
  }
}
class EmailService {
  gmailClient: GmailClient;

  constructor(gmailClient) {
    this.gmailClient = gmailClient;
  }
  sendMessage(message: string): string {
    // High level class depends on low-level
    return this.gmailClient.sendMessage(message);
  }
}
// Do
interface EmailClient {
  sendMessage(message: string): string;
}
class GmailService implements EmailClient {
  sendMessage(message: string): string {
    return 'Message was send using Gmail. Message: ' + message;
  }
}
class OutlookService implements EmailClient {
  sendMessage(message: string): string {
    return 'Message was send using Outlook. Message: ' + message;
  }
}