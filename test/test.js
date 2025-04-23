// test.js
import clockUtils from '../src/Clock/time.js'

console.log("Current Time is:", clockUtils.getCurrentTime());
console.log("Time Difference between :", clockUtils.getTimeDifferenceBetween(2));



// Example 1: Using a date string
console.log(clockUtils.getTimeAgo("2025-04-23T10:00:00Z"));
// Output: "X hours ago" (depending on current time)

// // Example 2: Using a timestamp (milliseconds)
// const timestamp = Date.now() - 2 * 60 * 60 * 1000; // 2 hours ago
// console.log(clockUtils.getTimeAgo(timestamp));
// // Output: "2 hours ago"

// // Example 3: Using a Date object
// const pastDate = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000); // 3 days ago
// console.log(clockUtils.getTimeAgo(pastDate));
// Output: "3 days ago"
