//KODECAMP JAVASCRIPT TASK

// Solution to Question 1

document.querySelector(".team-title").style.color = "#f3b72a";
// document.querySelector(".member-title").style.color = "#f3b72a";
document.querySelector(".background-header").style.background = "#f8f1e1";
document.querySelector(".background-body").style.background = "#fcfcfc";

// Solution to Question 2

const teamMembers = ["Simple_Soul", "TJ", "OreSause", "Luchii",, "Khalid", "Tolu", "Etinosa", "MavDavis", "HayJ"];
for (const myName of teamMembers) {
    if (myName === "Tolu") {
        console.log(myName);   
    }
}

// Solution to Question 3 

const Person = {
    firstName: "Tolu",
    lastName: "Dada",
    bestMovie: "Attack On Titans",
    bestFood: "Jollof Rice and Chicken",
    complexion: "Fair",
    birthMonth: "April",
    state: "Lagos",
    groupName: "Zeus"
}
    console.log(`My best movies is ${Person["bestMovie"]}`);

// Solution to Question 4 

const firstName = "Tolu";
const hobby = "swim";
const speed = "fast";

console.log("Can " + firstName + " " + hobby + " " + speed + "?");
console.log("Yes, he can " + hobby + " " + speed);
console.log(firstName + " can also " + hobby + " in deep waters");
console.log("How " + speed + " can you " + hobby + "?");
console.log("I can " + hobby + " moderately " + speed);

// Solution to Question 5

function remainder(num1, num2) {
    let remain = num1 % num2;
    return (num1 % num2 !== 0) ? remain : 0;
}

console.log("The remainder is", remainder(9, 5));

// Solution to Question 6

function quadraticSolution(a, b, c) {
    const Discriminant = ((b ** 2) - (4 * a * c));
    const squareRootDiscriminant = Math.sqrt(Discriminant);
    const firstValue = (-b + squareRootDiscriminant) / 2;
    const secondValue = (-b - squareRootDiscriminant) / 2;
    return (firstValue === secondValue) ? firstValue + " twice" : [firstValue, secondValue];
}

console.log("The solution of the quadratic equation is", quadraticSolution(1, 5, 6));

// Solution to Question 7 

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "My " + myNoun + " " + myAdverb + " " + myVerb + " after the " + myAdjective + " ball";

console.log(wordBlanks);

// Solution to Question 8

function areaOfCircle(radius) {
    const PI = 3.142;
    const area = PI * (radius ** 2);
    return area;
}

console.log("The area of the circle of radius 9 is", (areaOfCircle(9)).toFixed(2));

// Solution to Question 9

const principal = 8200;
const rate = 0.175;
const time = 30;

const simpleInterest = Math.floor((principal * rate * time) / 100);
const remaining = (principal * rate * time) % 100;
console.log(`The Simple Interest obtained is #${simpleInterest}.${remaining}K`);

// Solution to Question 10

const result = 10 % 4;
console.log("The remainder of the division of 10 & 4 is", result);

// Solution to Question 11

const meritMass = 85;
const meritHeight = 1.76;

const nutJobMass = 95;
const nutJobHeight = 1.88;

const meritHigherBmi= "Merit has a higher BMI";

const meritBmi = meritMass / (meritHeight ** 2);
const nutJobBmi = nutJobMass / (nutJobHeight ** 2);

console.log((meritBmi > nutJobBmi) ? meritHigherBmi : "NutJob has a higher BMI");
