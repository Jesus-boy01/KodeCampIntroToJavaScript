//KODECAMP JAVASCRIPT TASK

// Solution to Question 1

document.querySelector("#team-info-section").style.background = "#f8f1e1";
document.querySelector("#team-info-section").style.borderRadius = "20px";
document.querySelector(".team").style.display = "flex";
document.querySelector(".team").style.justifyContent = "center";
document.querySelector("#content-head").style.textAlign = "center";
document.getElementById("team-head").style.color = "#f3b72a";
document.getElementById("title").style.textAlign = "center";
document.getElementById("title").style.fontSize = "19px";
document.getElementById("title").style.color = "#f3b72a";
document.querySelector(".team-members").style.display = "flex";

console.log("Question 2");
// Solution to Question 2

const teamMembers = ["Simple_Soul", "TJ", "OreSause", "Luchii", "Khalid", "Tolu", "Etinosa", "MavDavis", "HayJ"];
console.log(teamMembers[5]);

console.log("Question 3");
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

console.log(`My best movie is ${Person["bestMovie"]}`);

console.log("Question 4");
// Solution to Question 4 

const firstName = "Tolu";
const hobby = "swim";
const speed = "fast";

console.log("Can " + firstName + " " + hobby + " " + speed + "?");
console.log("Yes, he can " + hobby + " " + speed);
console.log(firstName + " can also " + hobby + " in deep waters");
console.log("How " + speed + " can you " + hobby + "?");
console.log("I can " + hobby + " moderately " + speed);

console.log("Question 5");
// Solution to Question 5

function remainder(num1, num2) {
    return ((num1 % num2));
}

console.log("The remainder of the division of 100 and 27 is", remainder(100, 27));

console.log("Question 6");
// Solution to Question 6

function quadraticSolution(a, b, c) {
    const Discriminant = ((b ** 2) - (4 * a * c));
    const squareRootDiscriminant = Math.sqrt(Discriminant);
    const firstValue = (-b + squareRootDiscriminant) / 2;
    const secondValue = (-b - squareRootDiscriminant) / 2;
    return (firstValue === secondValue) ? firstValue + " twice" : [firstValue, secondValue];
}

console.log("The solution of the quadratic equation is", quadraticSolution(1, -6, 8));

console.log("Question 7");
// Solution to Question 7 

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "My " + myNoun + " " + myAdverb + " " + myVerb + " after the " + myAdjective + " ball";

console.log(wordBlanks);

console.log("Question 8");
// Solution to Question 8

function areaOfCircle(radius) {
    const PI = 3.142;
    const circleArea = PI * (radius ** 2);
    return circleArea;
}

console.log("The area of the circle of radius 9 is", (areaOfCircle(9)).toFixed(2));

console.log("Question 9");
// Solution to Question 9

const principal = 8200;
const rate = 0.175;
const time = 30;

const simpleInterest = Math.floor((principal * rate * time) / 100);
const remaining = (principal * rate * time) % 100;
console.log(`The Simple Interest obtained is #${simpleInterest}.${remaining}K`);

console.log("Question 10");
// Solution to Question 10

const result = 10 % 4;
console.log("The remainder of the division of 10 & 4 is", result);

console.log("Question 11a");
// Solution to Question 11 (first version)

const meritMass = 78;
const meritHeight = 1.69;

const nutJobMass = 92;
const nutJobHeight = 1.95;

const meritHigherBmi= "Merit has a higher BMI";

const meritBmi = (meritMass / (meritHeight ** 2)).toFixed(3);
const nutJobBmi = (nutJobMass / (nutJobHeight ** 2)).toFixed(3);

console.log((meritBmi > nutJobBmi) ? meritHigherBmi +
 ` which is ${meritBmi}` : `NutJob has a higher BMI which is ${nutJobBmi}`);

 console.log("Question 11b");
// Solution to Question 11 (second version)

function calculateBMI(mass, height) {
    const BMI = mass / (height ** 2);
    return BMI;
}

const meritBMI = (calculateBMI(95, 1.88)).toFixed(3);
const nutJobBMI = (calculateBMI(85, 1.76)).toFixed(3);

console.log((meritBMI > nutJobBMI) ? meritHigherBmi +
 ` which is ${meritBMI}` : `NutJob has a higher BMI which is ${nutJobBMI}`);