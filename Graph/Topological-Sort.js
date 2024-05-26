var canFinish = function(prerequisites) {
  let coursesMap = {};
  let visited = {};

  // Generate adjacency list
  for (const course of prerequisites) {
    if (!coursesMap[course[0]]) {
      coursesMap[course[0]] = [];
    }
    coursesMap[course[0]].push(course[1]);
  }

  let dfs = (current) => {
    if (visited[current]) {
      return false;
    }
    if (!coursesMap[current]) {
      return true;
    }

    visited[current] = 1;

    for (const node of coursesMap[current]) {
      if (!dfs(node)) {
        return false;
      }
    }

    delete visited[current];
    coursesMap[current] = [];

    return true;
  }

  if (!prerequisites.length) {
    return true;
  }
 
  for (const node of Object.keys(coursesMap)) {
    if (!dfs(node)) {
      return false;
    }
  }

  return true;
};