// Generics (Generics provide a way to create reusable, type-safe code.) --------------------------
function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(10)); // Output: 10
console.log(identity<string>("Hello")); // Output: Hello

// Union Type (variable can have multiple types) --------------------------------------------------
let value: number | string;
value = 10; // Valid
value = "Hello"; // Valid

// Intersection Type (Combines multiple types into one) -------------------------------------------
interface A {
  a: string;
}
interface B {
  b: number;
}

type AB = A & B;
const obj: AB = { a: "Hello", b: 42 };

// Types (Same as interface, but can't be re-opened to add new properties) ------------------------
type Cat = {
  breed: string;
};

const cat: Cat = { breed: "Siamese" };

// Decorators (Ddd metadata or behavior to classes and methods) -----------------------------------
function Log(target: any, key: string) {
  console.log(`${key} was accessed.`);
}

class Example {
  //@ts-ignore 
  @Log
  hello() {
    console.log("Hello, world!");
  }
}

const e = new Example();
e.hello();
// Output:
// hello was accessed.
// Hello, world!


// Utility types

// Partial (Makes all properties optional) --------------------------------------------------------
interface User2 {
  id: number;
  name: string;
  email?: string;
}
const updateUser: Partial<User2> = { name: "Updated Name" };

// Required (Makes all properties required) -------------------------------------------------------
const fullUser: Required<User2> = {
  id: 1,
  name: "John",
  email: "john@example.com", // Now required
};

// Pick (Creates a new type by picking a subset of properties from another type) ------------------
type UserName = Pick<User2, "name">;

const userName: UserName = {
  name: "Alice",
};

// Omit (Creates a new type by omitting specific properties from another type) --------------------
type UserWithoutEmail = Omit<User2, "email">;

const user: UserWithoutEmail = {
  id: 1,
  name: "Alice",
  // email is omitted
};

// Readonly (Prevents modification) ---------------------------------------------------------------
const readonlyUser: Readonly<User2> = {
  id: 1,
  name: "John",
  email: "john@example.com",
};
// readonlyUser.name = "New Name"; // Error

// Record (Creates a type that maps keys K to values of type T) -----------------------------------
type Roles = "admin" | "user" | "guest";

const userRoles: Record<Roles, boolean> = {
  admin: true,
  user: false,
  guest: false,
};