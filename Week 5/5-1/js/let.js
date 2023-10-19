let festivalName = "October Fest";

function buyTickets() {
  console.log(`Welcome to ${festivalName} ticket counter`);

  if (true) {
    let ticketPrice = 50;
    console.log(`Standard ticket price: $${ticketPrice}`);
  }
  festivalName = "Thanks Giving";
  //Block scoped
  //   console.log(ticketPrice);

  //   console.log(bandName);
  console.log(festivalName);
  let bandName = "The RockStars";
  console.log(`Band preformed is : ${bandName}`);
}

buyTickets();
