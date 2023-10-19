function spaceTravel(planet, spaceship) {
  let travelTime; // in days

  switch (planet) {
    case "Mars":
      travelTime = 210;
      break;
    case "Venus":
      travelTime = 130;
      break;
    case "Jupiter":
      travelTime = 640;
      break;
    default:
      return "Sorry, we don't offer trips to that planet yet.";
  }

  if (spaceship === "Speedster") {
    travelTime /= 2; // Speedster is twice as fast
  } else if (spaceship === "Economy") {
    travelTime *= 1.5; // Economy is slower but cheaper
  }

  return `Your trip to ${planet} on the ${spaceship} spaceship will take approximately ${travelTime} days. Prepare for an adventure!`;
}

// Using the function
para.innerHTML = spaceTravel("Mars", "Speedster"); // Outputs: Your trip to Mars on the Speedster spaceship will take approximately 105 days. Prepare for an adventure!
para.innerHTML = spaceTravel("Venus", "Economy"); // Outputs: Your trip to Mars on the Speedster spaceship will take approximately 105 days. Prepare for an adventure!
