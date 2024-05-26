function Twitter() {
  let um = new Map(); // user map:  {userId: [tweetId, timestamp]}
  let fm = new Map();  // user/follower map: {followerId: Set {followeeId, .....} }
  let t = 0; // timestamp to maintain the most recent
  return {
      postTweet,
      getNewsFeed,
      follow,
      unfollow
  }

  function postTweet(userId, tweetId) {
      t++; // if post, record the timestamp move on
      if (!um.has(userId)) um.set(userId, []);
      um.get(userId).push([tweetId, t]);
  }

  function getNewsFeed(userId) { // || means set a default if not exists,
      let res = um.get(userId) || []; // collect this user personal tweets
      let fe = fm.get(userId) || new Set(); // this user's all followee
      for (const e of fe) { // collect this user's all followee's tweets
          res = res.concat(um.get(e) || []);
      }
      res.sort((x, y) => y[1] - x[1]); // sort based on timestamp in descending order, larger timestamp means most recent
      return res.slice(0, 10).map(x => x[0]);
  }

  function follow(followerId, followeeId) {
    // add followeeId to followerId's Set, use Set here is easy to remove compared to Array
      if (!fm.has(followerId)) fm.set(followerId, new Set());
      fm.get(followerId).add(followeeId);
  }

  function unfollow(followerId, followeeId) {
      if (fm.has(followerId)) fm.get(followerId).delete(followeeId); // remove followeeId in follower map
  }
};