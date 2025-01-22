/*
  The CAP theorem, also known as Brewer's Theorem,
  is a fundamental principle in distributed system design.
  It states that it is impossible for a distributed data system
  to simultaneously guarantee all three properties.
*/

/*
  1. Consistency
  - Every read receives the most recent write or an error.
  - All nodes in the system see the same data at the same time.

  Example: In a banking system, if you transfer money from Account A to Account B,
  any user querying the system will see the updated balances immediately.
*/

/*
  2. Availability
  - Every request (read or write) receives a response, even if some nodes in the system are down.
  - The system remains operational and responsive at all times.

  Example: If a node goes offline in an e-commerce system,
  the rest of the system continues to process orders and provide responses to users.
*/

/*
  3. Partition Tolerance
  - The system continues to function despite network partitions (communication breakdowns between nodes).
  - A network partition is when some nodes in the system cannot communicate with others
  due to issues like network failures.

  Example: In a global social media platform, even if the network connection between regions is disrupted,
  the platform still operates within each region.
*/