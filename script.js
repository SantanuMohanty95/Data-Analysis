const data = [
  { firstName: "Tirth", lastName: "shah", age: 23 },
  { firstName: "Abhishek", lastName: "pathak", age: 25 },
  { firstName: "Riya", lastName: "patel", age: 24 },
  { firstName: "Bhala", lastName: "batuk", age: 18 },
  { firstName: "Khalnayak", lastName: "Kalia", age: 24 },
];

let ul = document.createElement("ul");
document.getElementById("name").appendChild(ul);
data.map((each) => {
  if (each.age >= 24) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = `${each.firstName} ${each.lastName}`;

    console.log(`${each.firstName} ${each.lastName}`);
  }
});
