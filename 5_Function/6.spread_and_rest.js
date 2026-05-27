let numArray = [10,100,1000,10000,100000];
console.log(...numArray);

function movies(...films) {
  console.log("You can watch:", ...films); 
}

movies(
  "Dhurandhar The Revenge",
  "Hit The Third Case",
  "Leo",
  "Jawan",
  "Uri The Surgical Strike",
  "Bhoot Bangla",
  "Marco"
);

function sports(...sport) {
    console.log("Many Sports Are Available:",...sport);
}

sports(
    "Cricket",
    "Football",
    "Kabbadi",
    "Hockey",

);

