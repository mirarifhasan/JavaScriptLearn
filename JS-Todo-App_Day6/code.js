let tasks = [{
        id: 1,
        title: "Task One",
        date: "30 August 2019",
        completed: true
    },
    {
        id: 2,
        title: "Task Two",
        date: "05 September 2019",
        completed: false
    },

    {
        id: 3,
        title: "Task Three",
        date: "24 September 2019",
        completed: false
    }
]


function Render() {
    let dom = document.querySelector(".list");
    dom.innerHTML = "";

    tasks.forEach(function(task) {
        dom.insertAdjacentHTML("beforeend", `<li>${task.title} ( ${task.date} )</li>`)
    })
}

Render();

let form = document.querySelector(".inputForm");
let ititle = document.querySelector("#inputTitle");
let ideadline = document.querySelector("#inputDeadline");

form.addEventListener('submit', function(event) {

    event.preventDefault();

    tasks.push({
        id: 1,
        title: ititle.value,
        date: ideadline.value,
        completed: false
    })

    Render();
})



function ToggleCheck() {

}

function Add() {

}

function Delete() {

}





let obj = {
    name: "Arif",
    age: 22
}

console.log(typeof obj);
console.log(obj);

let objstring = JSON.stringify(obj);

console.log(typeof objstring);
console.log(objstring);

let covertedobj = JSON.parse(objstring);

console.log(typeof covertedobj);
console.log(covertedobj);

localStorage.setItem("my-first-storage", objstring);
let read = localStorage.getItem("my-first-storage");
console.log(read);