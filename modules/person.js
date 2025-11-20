export class person {
  settings = {
    firstName: "default",
    lastName: "Person",
    age: 0,
    isActive: true,
    hobbies: [],
    meta: {
      role: "null",
      country: "default",
    },
  };

  constructor(data) {
    if (data) {
      if (data.constructor === String) {
        this.settings.firstName = data;
      } else if (data.constructor === Object) {
        this.settings.firstName = data.firstName;
        this.settings.lastName = data.lastName;
        this.settings.age = data.age;
        this.settings.isActive = data.isActive;
        this.settings.hobbies = data.hobbies;
        this.settings.meta = data.meta;
      }
    }
    console.log("New person added: " + this.getFullName());
  }

  getFullName() {
    return this.settings.firstName + " " + this.settings.lastName;
  }

  getInfo() {
    let text = "Name: " + this.getFullName();
    text += "Age: " + this.settings.age;
    text += "Country: " + this.settings.meta.country;
    text += "Role: " + this.settings.meta.role;
    text += "Active: " + (this.settings.isActive ? "Yes" : "No");
    text += "Hobbies: " + this.settings.hobbies.join(", ");
    return text;
  }
}
