// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

const counter = (start, end) => {
  if (start > end) return;
  console.log(start);
  setTimeout(() => counter(start + 1, end), 1000);
};

counter(0, 10);