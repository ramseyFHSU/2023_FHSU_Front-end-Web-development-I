console.dir(document);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);

document.title = "Task Manager";
console.log(document.all);
document.all[5].textContent = "Task Manager 2";

console.log(document.links);
console.log(document.images);

// Get Element by ID
console.log(document.getElementById("header-title"));
// manipulate elements
let headerTitle = document.getElementById("header-title");
headerTitle.innerText = "Hello"; //Add's Css
headerTitle.textContent = "Word!"; //just changes the text
headerTitle.innerHTML = "<h3>Hello Class</h3>";

// manipulate styles
headerTitle.style.borderBottom = "solid 3px #000";

// Get Element By class
let items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[2]);
items[2].textContent = "Task Complete";
items[2].style.fontWeight = "bold";
items[2].style.backgroundColor = "deep yellow";
// to apply for all items
for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "deep yellow";
}
// Get Element By TagName
let items2 = document.getElementsByTagName("li");
console.log(items2);
for (let i = 0; i < items2.length; i++) {
  items2[i].style.backgroundColor = "deep yellow";
}

// Query Selector
let header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4px #ccc";

let input = document.querySelector("input");
input.value = "Enter the Task";

let submit = document.querySelector('input[type="submit"]');
submit.value = "send";

let header2 = document.querySelector(".list-group-item");
header2.style.borderBottom = "red";

let header3 = document.querySelector(".list-group-item:last-child");
header3.style.color = "red";
console.log(header3);

let header4 = document.querySelector(".list-group-item:nth-child(2)");
header4.style.color = "green";

// Query Selector All
let titles = document.querySelectorAll(".title");
console.log(titles);

titles[0].textContent = "Tasks";

// Traversing Dom
let itemList = document.querySelector("#items");
console.log(itemList.parentNode.parentNode);

itemList.parentNode.style.backgroundColor = "#f4f4f4";

let itemList2 = document.querySelector("#items");
console.log(itemList2.parentElement.parentElement);
itemList.parentElement.style.backgroundColor = "blue";

console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "task Completed";
console.log(itemList.lastElementChild);
itemList.firstElementChild.textContent = "task Completed";
console.log(itemList.lastChild);
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);
console.log(itemList.previousSibling);

let newDiv = document.createElement("div");
newDiv.className = "Test";

console.log(newDiv);
newDiv.id = "test";
newDiv.setAttribute("title", "test div");

let newDivText = document.createTextNode("this is a test");
newDiv.appendChild(newDivText);
console.log(newDiv);

let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");

container.insertBefore(newDiv, h1);
