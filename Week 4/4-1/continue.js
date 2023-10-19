// Imagine there's a dance party where songs are played one after the other.
// The DJ has a list of 10 songs to play.
// However, if a certain song (let's say song number 5) is known
// to be disliked by the audience, the DJ will skip it and move to the next song.

for (let songNumber = 1; songNumber <= 10; songNumber++) {
  // Let's say song number 5 is the one that's not popular
  if (songNumber === 5) {
    console.log(`Skipping song number ${songNumber}.`);
    continue; // This will skip the rest of the current iteration and move to the next song
  }

  console.log(`Playing song number ${songNumber} 🎶`);
}

console.log("Party's over!");
