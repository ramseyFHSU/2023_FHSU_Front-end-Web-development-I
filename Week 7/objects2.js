const professor = {
  name: "Sam",
  email: "sam@gmail.com",
  location: "Hammond Hall",
};

//To access keys
let keys = Object.keys(professor);
console.log(keys);
//To access Values
let values = Object.values(professor);
console.log(values);
//To access entries
let entries = Object.entries(professor);
console.log(entries);

// Loop trough the keys
keys.forEach((key) => {
  console.log(key);
});
// Loop trough the values
values.forEach((value) => {
  console.log(value);
});
// Loop trough the entries
entries.forEach((entry) => {
  console.log(entry);
});

// for in loop for looping trough objects, you can only use square bracket notation to print out the values
for (let key in professor) {
  console.log(
    `the key is ${key.toUpperCase()} and the value is ${professor[key]}`
  );
}

for (x in professor) {
  console.log(`the key is  ${x}  and the value is ${professor[x]}`);
}

let myArray = ["x", "y", "z"];
console.log(myArray[0]);

const professor2 = {
  name: "John",
  email: "john@gmail.com",
  location: "FHSU",
  courses: [
    { title: "front-end 1", students: 30 },
    { title: "front-end 2", students: 20 },
  ],
  courseList() {
    console.log(`Courses taught by professor ${this.name}`);
    this.courses.forEach((course) => {
      console.log(
        `Courses name is ${course.title.toUpperCase()} and the number of students is : ${
          course.students
        }`
      );
    });
  },
};
professor2.courseList();

const vehicle1 = new Object();

vehicle1.wheels = 4;
vehicle1.doors = 4;
vehicle1.color = "red";

const vehicle = {
  wheels: 4,
  color: "red",
  engine: () => {
    return "Vroom";
  },
};

const car = Object.create(vehicle);

car.color = "Blue";
car.doors = 2;
car.wheels = 3;
car.engine = () => {
  return "Silent";
};

for (keys in car) {
  console.log(`${keys} ${car[keys]}`);
}

console.log(car.color);
console.log(car.doors);
console.log(car.engine());
console.log(vehicle.engine());

//Delete properties in an Object
delete car.wheels;
console.log(car.wheels);
console.log(vehicle.wheels);

// De-Structuring
const person = {
  myName: "Luke",
  id: 1233,
};

let { myName: otherName, id: otherId } = person;
console.log(otherName + otherId);

let { myName, id } = person;
console.log(myName + id);
