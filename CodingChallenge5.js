class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    // Write code here!
    let age = this.age;

    if (age > other.age) {
      return other.name + " is younger than me.";
    } else if (age < other.age) {
      return other.name + " is older than me.";
    } else {
      return other.name + " is the same age as me.";
    }
  }
}

p1 = new Person("Samuel", 24);
p2 = new Person("Joel", 36);
p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p3));
console.log(p3.compareAge(p1));
