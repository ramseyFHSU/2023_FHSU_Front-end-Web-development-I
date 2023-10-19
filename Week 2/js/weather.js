// let choice = prompt("Select a weather type today");

let temp = 86;

if (choice === "sunny") {
  let temp = prompt("Enter the temp today");
  if (temp < 86) {
    demo.innerHTML =
      "its " +
      temp +
      " Degrees outside - nice and sunny today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (temp >= 86) {
    demo.innerHTML = "its really hot outside";
  }
} else if (choice === "rainy") {
  demo.innerHTML =
    "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
} else if (choice === "snowing") {
  demo.innerHTML =
    "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
} else if (choice === "overcast") {
  demo.innerHTML =
    "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
} else {
  demo.innerHTML = "Unknown weather type, try again";
}
