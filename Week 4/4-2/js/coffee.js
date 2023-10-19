function makeCoffee(type) {
  if (type === "espresso") {
    return "Here's your espresso!";
  } else if (type === "latte") {
    return "Here's your latte!";
  } else {
    return "Sorry, I don't know that coffee type.";
  }
}

// Using the function
console.log(makeCoffee("espresso")); // Outputs: Here's your espresso!
console.log(makeCoffee("latte")); // Outputs: Here's your latte!
console.log(makeCoffee("tea")); // Outputs: Sorry, I don
