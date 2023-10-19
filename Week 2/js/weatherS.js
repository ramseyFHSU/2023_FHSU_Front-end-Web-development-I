let choice = prompt("Select a weather type today");

switch (choice) {
  case "sunny":
    demo.innerHTML =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    break;
  case "rainy":
    demo.innerHTML =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
    break;
  case "snowing":
    demo.innerHTML =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
    break;
  case "overcast":
    demo.innerHTML =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
    break;
  default:
    demo.innerHTML = "Wrong weather type";
}
