// Breaking out of loop

// Imagine a pirate is digging holes on a beach looking for treasure.
// He's decided he'll dig up to 10 holes.
// But if he finds the treasure before that, he'll stop digging.

let holesDug = 0;
let treasureFound = false;

for (let i = 1; i <= 10; i++) {
  holesDug++;
  console.log(`Dug hole number ${holesDug}.`);

  // Let's say he finds the treasure after digging 4 holes
  if (holesDug === 4) {
    console.log("Yarr! Found the treasure! 🏴‍☠️💰");
    treasureFound = true;
    break; // This will break out of the loop
  }
}

if (!treasureFound) {
  console.log("Couldn't find the treasure today. Maybe tomorrow!");
}
