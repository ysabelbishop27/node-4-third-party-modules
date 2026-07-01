/* ---------------------------
💎 Sign Finder Challenge
------------------------------
Create a Node.js app that determines the astrological and zodiac signs for the user based on their birthday.

Read the instructions in the README.md file in this folder.
---------------------------- */
// Import the getSign and getZodiac functions from the horoscope package
const { getSign, getZodiac } = require("horoscope");

// Get the month ,day and year from the terminal
// process.argv[0] is Node
// process.argv[1] is the file name
// process.argv[2] is the month
// process.argv[3] is the day
// process.argv[4] is the year
const month = Number(process.argv[2]);
const day = Number(process.argv[3]);
const year = Number(process.argv[4]);

// Use getSign to find the astrological sign from the month and day
const astrologicalSign = getSign({ month: month, day: day });

// Use getZodiac to find the zodiac sign from the year
const zodiacSign = getZodiac(year);

// Prints the final message to the console
console.log(
  `Your astrological sign is ${astrologicalSign} and your zodiac sign is ${zodiacSign}`
);
