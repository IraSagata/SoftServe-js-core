//"use strict";
//task-1
console.log("task-1");
let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development"
};
function propsCount(currentObject) {
  let conter = 0;
  for (const key in currentObject) {
    conter++;
  }
  console.log(conter);
}
propsCount(mentor);

//task-2
console.log("task-2");
const student = {
  name: "Ivan",
  age: 20,
  course: "JS fundamental",
  duration: 3,
  direction: "web-development"
};
function showProps(obj) {
  const arr = [];
  const entries = Object.entries(student);
  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    arr.push(`${key}: ${value}`);
    // arr.push(entry[0], entry[1]);
  }
  console.log(arr);
}
showProps(student);

//task-3
console.log("task-3");
class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this.experience = 1.2;
  }
  showSalary() {
    console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}`);
  }
  showSalaryWithExperience() {
    console.log(
      `${this.fullName} salary: ${this.dayRate *
        this.workingDays *
        this.experience}`
    );
  }
  get showExp() {
    return this.experience;
  }
  set setExp(value) {
    this.experience = value;
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
let worker2 = new Worker("Ben Tomas", 25, 30);
let worker3 = new Worker("Mike Sanders", 15, 20);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

//worker2
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.6;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

const array = [];
array.push(worker1, worker2, worker3);
array.sort(function(a, b) {
  return a.experience - b.experience;
});
for (let i = 0; i < array.length; i++) {
  console.log(
    `${array[i].fullName}salary: ${array[i].dayRate *
      array[i].workingDays *
      array[i].experience}`
  );
}

//task-4
console.log("task-4");
class Person {
  constructor(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;
  }
  showFullName() {
    return this.name + " " + this.surname;
  }
}
class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname, year);
  }
  showFullName(midleName) {
    return super.showFullName() + " " + midleName;
  }
  showCourse() {
    let currentTime = new Date();
    let currentYear = currentTime.getFullYear();
    //console.log(currentYear);
    return `${currentYear - this.year}`;
  }
}
const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4

//task-5
console.log("task-5");
class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}
class Square extends GeometricFigure {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }

  getArea() {
    return this.a * this.b;
  }
}
class Circle extends GeometricFigure {
  constructor(r) {
    super();
    this.r = r;
  }
  getArea() {
    return Math.PI * this.r ** 2;
  }
}
class Triangle extends GeometricFigure {
  constructor(a, h) {
    super();
    this.a = a;
    this.h = h;
  }
  getArea() {
    return 0.5 * this.a * this.h;
  }
}

function handleFigures(figures) {
  let info = ""; //чому коли я просто обявляю let info; появляється underfind&&&
  let sum = 0;

  for (let i = 0; i < figures.length; i++) {
    if (figures[i] instanceof GeometricFigure) {
      info +=
        "Geometric figure: " +
        figures[i].toString() +
        " - area : " +
        figures[i].getArea() +
        "\n";
      sum += figures[i].getArea();
    }
  }

  info += sum;

  return info;
}

const figures = [new Triangle(4, 5), new Square(7, 5), new Circle(5)];
console.log(handleFigures(figures));
