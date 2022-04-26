//With the apply() method, you can write a method that can be used on different objects.
const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"Uchiha",
    lastName: "Madara"
  }
  const person2 = {
    firstName:"Hashirama",
    lastName: "Senju"
  }
  
  console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));
