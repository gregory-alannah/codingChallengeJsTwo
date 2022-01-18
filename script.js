// VERY EASY: Write a function named min that takes two arguments and returns their minimum.

function min (x, y) {
    var minimum = Math.min(x, y);
    return minimum;
}
console.log(min(5, 10)); 

// EASY: Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."

var students = ["John", "Miller", 20, "Eric", "Benson", 19, "Allison", "Pace", 22]

console.log("Hello my name is " + students[3] + " " + students[4] + " and I am " + students[5] + " years old. " );

// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

var number = parseInt(prompt("Please enter a number"))

if (number === 1) {
    console.log("The user entered " + number + ": January");
}

else if (number === 2) {
    console.log("The user entered " + number + ": February");
}

else if (number === 3) {
    console.log("The user entered " + number + ": March");
}
else if (number === 4) {
    console.log("The user entered " + number + ": April");
}
else if (number === 5) {
    console.log("The user entered " + number + ": May");
}
else if (number === 6) {
    console.log("The user entered " + number + ": June");
}
else if (number === 7) {
    console.log("The user entered " + number + ": July");
}
else if (number === 8) {
    console.log("The user entered " + number + ": August");
}
else if (number === 9) {
    console.log("The user entered " + number + ": September");
}
else if (number === 10) {
    console.log("The user entered " + number + ": October");
}
else if (number === 11) {
    console.log("The user entered " + number + ": November");
}
else if (number === 12) {
    console.log("The user entered " + number + ": December");
}

else {
    if (number >= 1 <= 12 ) {
        alert("Please enter numbers 1-12");

    }
}


// HARD: Given the information below for Tom and Jerry. 

//Tom - height:  9in   mass: 8 g
//Jerry - height: 10in mass: 45 g
//Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:

    //BMI = mass / height ^2 = mass / (height * height)

//Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

var tomsHeight = 9; 
var tomsMass = 8; 
var jerrysHeight = 10; 
var jerrysMass = 45; 

let tomsBMI = tomsMass / (tomsHeight * tomsHeight); 
let jerrysBMI = jerrysMass / (jerrysHeight * jerrysHeight); 

console.log(`Tom's BMI is ${tomsBMI} and Jerry's is ${jerrysBMI}`);

if (tomsBMI > jerrysBMI) {
    console.log("Tom's BMI is higher than Jerry's");
}
else {
    console.log("Jerry's BMI is higher than Tom's");
}
