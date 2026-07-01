/*  ---------------------------
💎 Leap Year Challenge
------------------------------
Make an app that determines if a given year is a leap year! 

Read the instructions in the README.md file in this folder.
------------------------------ */
// Import the moment library so we can use its date tools
const moment = require("moment");

// Get the year the user typed in the terminal
// process.argv[0] is Node
// process.argv[1] is the file name
// process.argv[2] is the first real user input
const year = process.argv[2];

// Use moment to check if the year is a leap year
const isLeapYear = moment([year]).isLeapYear();

// If the year is a leap year print a friendly message
if (isLeapYear) {
  console.log(`${year} is a leap year!`);
} else {
  console.log(`${year} is not a leap year!`);
}
