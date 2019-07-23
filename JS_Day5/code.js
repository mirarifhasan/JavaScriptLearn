let h1id = document.querySelector("#title")
console.log(h1id);

let h1class = document.querySelector(".title")
console.log(h1class);

let h1text = h1id.innerText;
console.log(h1text);

h1id.innerText = "My modified text";

let list = document.querySelector("#content");
list.insertAdjacentHTML("beforeend", "<li>Hello BD</li>");
list.insertAdjacentHTML("beforeend", "<li>Hello Dhaka</li>");

let tasks = [
    "Task1", "Task2", "Task3"
];

let list2 = document.querySelector("#content");

tasks.forEach(function(task) {
    list2.insertAdjacentHTML("beforeend", `<li>${task}</li>`);
})

let btn = document.querySelector("#button");

btn.addEventListener("click", function() {
    let item = prompt("Enter new task");
    list.insertAdjacentHTML("afterend", `<li>${item}</li>`);
})