/*
  1. Atomicity

  A transaction is an indivisible unit of work.
  It ensures that all operations within a transaction are either completely performed or not performed at all.
  If any part of the transaction fails, the entire transaction is rolled back to its previous state.

  BEGIN TRANSACTION;
  UPDATE AccountA SET Balance = Balance - 100;
  UPDATE AccountB SET Balance = Balance + 100;
  COMMIT TRANSACTION;
  // If any step fails, ROLLBACK TRANSACTION;
*/

/*
  2. Consistency

  Ensures that a database remains in a valid state before and after a transaction.
  A transaction must move the database from one valid state to another,
  adhering to all defined rules, constraints, and relationships.
*/

/*
  3. Isolation

  Transactions occurring concurrently do not interfere with each other.
  Each transaction is executed in isolation from others, as if it were the only transaction happening.
*/

/*
  4. Durability

  Once a transaction is committed, its changes are permanent, even in the event of a system failure.
  The database ensures that the committed transaction's data is safely stored and will survive crashes or power loss.
*/