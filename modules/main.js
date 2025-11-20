import { person } from "./person.js";

function initiate() {
  let Emelie = new person({
    firstName: "Emelie",
    lastName: "Bjorkman",
    age: 32,
    isActive: true,
    hobbies: ["football", "programming"],
    meta: {
      role: "student",
      country: "Sweden",
    },
  });

  let Marina = new person({
    firstName: "Marina",
    lastName: "Rosenstrom",
    age: 33,
    isActive: false,
    hobbies: ["it-service"],
    meta: {
      role: "it tech",
      country: "Sweden",
    },
  });

  let allPersons = [Emelie, Marina];

  console.log("All persons");
  allPersons.forEach((person) => {
    console.log(person.getInfo());
  });

  const container = document.getElementById("output");

  allPersons.forEach((p) => {
    const personDiv = document.createElement("div");
    personDiv.className = "person";

    const name = document.createElement("h2");
    name.textContent = p.getFullName();
    personDiv.appendChild(name);

    const info = document.createElement("p");
    info.textContent = p.getInfo();
    personDiv.appendChild(info);

    container.appendChild(personDiv);
  });
}

window.addEventListener("load", initiate);
