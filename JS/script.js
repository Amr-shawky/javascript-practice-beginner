
function showOutput(id, content) {
    const output = document.getElementById(id);
    output.innerHTML = content;
    output.classList.add('show');
}

// 1- Write a program that allow to user enter number then printit
// Example
// Input: 5
// Output: 5
function runQuestion1() {
    let input = prompt("Enter a number:");
    if (input === null || input.trim() === "") {
        showOutput("output1", "You cancelled the prompt");
        alert("Please enter a number");
    }
    else {
        let number = +input;
        if (!isNaN(number)) {
            showOutput("output1", number);
        }
        else {
            alert("Please enter a valid number");
            showOutput("output1", "Please enter a valid number");
        }
    }
}
// 2- Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no
// Example1
// Input: 12 Output Yes
// Example 2
// Input: 9 Output No

function runQuestion2() {
    let input = prompt("Enter a number:");
    if (input === null || input.trim() === "") {
        showOutput("output2", "You cancelled the prompt");
        alert("Please enter a number");
    }
    else {
        let number = +input;
        if (!isNaN(number)) {
            if (number % 3 === 0 && number % 4 === 0) {
                showOutput("output2", "Yes");
            } else {
                showOutput("output2", "No");
            }
        }
        else {
            alert("Please enter a valid number");
            showOutput("output2", "Please enter a valid number");
        }
    }
}

// 3- Write a program that allows the user to insert 2 integers then print the max
// Example1
// Input: 3 5
// Output: 5
// Example 2
// Input: 10 7
// Output: 10

function runQuestion3() {
    let num1 = prompt("Enter first number:");
    let num2 = prompt("Enter second number:");
    if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {
        alert("Please enter valid numbers");
        showOutput("output3", "Please enter valid numbers");
        return;
    }
    else {
        num1 = +num1;
        num2 = +num2;
        if (num1 > num2) {
            showOutput("output3", num1);
        }
        else if (num1 < num2) {
            showOutput("output3", num2);
        }
        else {
            showOutput("output3", "Both numbers are equal");
        }
    }
}


// 4- Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.
// Example 1
// Input: -5
// Output negative
// Example2
// Input: 10
// Output positive


function runQuestion4() {
    let num1 = prompt("Enter a number:");
    if (isNaN(num1) || num1 === "") {
        alert("Please enter valid numbers");
        showOutput("output4", "Please enter valid numbers");
        return;
    }
    else {
        num1 = +num1;
        if (num1 >= 0) {
            showOutput("output4", "Positive");
        }
        else {
            showOutput("output4", "Negative");
        }
    }
}

// 5- Write a program that take 3 integers from user then print the max element
// and the min element.
// Example 1
// Input:7,8,5
// Output:
// max element = 8
// min element = 5
// Example2
// Input: 3 6 9
// Outputs:
// Max element = 9
// Min element = 3


function runQuestion5() {
    let num1 = prompt("Enter first number:");
    let num2 = prompt("Enter second number:");
    let num3 = prompt("Enter third number:");
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 === "" || num2 === "" || num3 === "") {
        alert("Please enter valid numbers");
        showOutput("output5", "Please enter valid numbers");
        return;
    }
    else {
        num1 = +num1;
        num2 = +num2;
        num3 = +num3;
        let max = 0;
        let min = 0;
        if (num1 > num2 && num1 > num3) {
            max = num1;
        }
        else if (num2 > num1 && num2 > num3) {
            max = num2;
        }
        else {
            max = num3;
        }
        if (num1 < num2 && num1 < num3) {
            min = num1;
        }
        else if (num2 < num1 && num2 < num3) {
            min = num2;
        }
        else {
            min = num3;
        }
        showOutput("output5", "Max element = " + max + "<br>" + "Min element = " + min);
    }
}

// 6- Write a program that allows the user to insert integer number then
// check If a number is oven or odd
// 7- Example 1
// Input: 8
// Output: even
// Example 2
// Input: 7
// Output: odd
function runQuestion6() {
    let num1 = prompt("Enter a number:");
    if (isNaN(num1) || num1 === "") {
        alert("Please enter valid numbers");
        showOutput("output6", "Please enter valid numbers");
        return;
    }
    else {
        num1 = +num1;
        if (num1 % 2 === 0) {
            showOutput("output6", "Even");
        }
        else {
            showOutput("output6", "Odd");
        }
    }
}

// Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
// Example1
// Input: O
// Output: vowel
// Example 2
// Input: b
// Output:
// Consonant
function runQuestion7() {
    let char = prompt("Enter a character:");
    if (char === null || char.trim() === ""||!isNaN(char)) {
        showOutput("output7", "You cancelled the prompt");
        alert("Please enter a character");
    }
    else {
        char = char.toLowerCase();
        if (char.length === 1) {
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                showOutput("output7", "Vowel");
            }
            else {
                showOutput("output7", "Consonant");
            }
        }
        else {
            alert("Please enter a valid character");
            showOutput("output7", "Please enter a valid character");
        }
    }
}

// Write a program that allows user to insert integer then print all numbers between 1 to that’s number
// Example Input 5
// Output 1, 2, 3, 4, 5
function runQuestion8(){
    let num1 = prompt("Enter a number:");
    if (isNaN(num1) || num1 === "") {
        alert("Please enter valid numbers");
        showOutput("output8", "Please enter valid numbers");
        return;
    }
    else {
        num1 = +num1;
        let result = "";
        for (let i = 1; i <= num1; i++) {
            result += i + " ";
        }
        showOutput("output8", result);
    }
}

// Write a program that allows userto insert integerthen print a multiplication table up to 12.
// Example
// Input: 5
// Outputs:
// 5 10 15 20 25 30 35 40 45 50 55 60
function runQuestion9() {
    let num1 = prompt("Enter a number:");
    if (isNaN(num1) || num1 === "") {
        alert("Please enter valid numbers");
        showOutput("output9", "Please enter valid numbers");
        return;
    }
    else {
        num1 = +num1;
        let result = "";
        for (let i = 1; i <= 12; i++) {
            result += num1 * i + " ";
        }
        showOutput("output9", result);
    }
}

// 11- Write a program that allows to user to insert number then print all even numbers between 1 to this number
// Example:
// Input: 15
// Output: 2 4 6 8 10 12 14
function runQuestion10() {
    let num1 = prompt("Enter a number:");
    if (isNaN(num1) || num1 === "") {
        alert("Please enter valid numbers");
        showOutput("output10", "Please enter valid numbers");
        return;
    }
    else {
        num1 = +num1;
        let result = "";
        for (let i = 2; i <= num1; i += 2) {
            result += i + " ";
        }
        showOutput("output10", result);
    }
}


// Write a program that take two integers then print the power
// Example:
// Input: 4 3
// Output: 64
// Hint how to calculate 4^3 = 4 * 4 * 4 =64

function runQuestion11() {
    let num1 = prompt("Enter first number:");
    let num2 = prompt("Enter second number:");
    if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {
        alert("Please enter valid numbers");
        showOutput("output11", "Please enter valid numbers");
        return;
    }
    else {
        num1 = +num1;
        num2 = +num2;
        let result = 1;
        for (let i = 0; i < num2; i++) {
            result *= num1;
        }
        showOutput("output11", result);
    }
}


// 12- Write a program to enter marks of five subjects and calculate total, average and percentage.
// Example
// Input: - Enter Marks of five subjects:
// 95
// 76
// 58
// 90
// 89
// Output:-.Total marks = 435
// Average Marks =87
// Percentage =87
function getsum(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum;
}
function runQuestion12() {
    let marks = [];
    for (let i = 1; i <= 5; i++) {
        let mark = prompt("Enter marks of subject " + i + ":");
        if (isNaN(mark) || mark === "") {
            alert("Please enter valid numbers");
            showOutput("output12", "Please enter valid numbers");
            return;
        }
        else {
            marks.push(+mark);
        }
    }
    let total = getsum(marks);
    let average = total / marks.length;
    let percentage = (total / (marks.length * 100)) * 100;
    showOutput("output12", "Total Marks: " + total + "<br>" +
        "Average Marks: " + average + "<br>" +
        "Percentage: " + percentage);

}

// 13-Write a program to input month number and print number of days in that month.
// Example:
// Input: - Month Number: 1
// Output:-. Days in Month: 31

function runQuestion13() {
    let month = prompt("Enter month number (1-12):");
    if (isNaN(month) || month === "" || month < 1 || month > 12) {
        alert("Please enter valid month number");
        showOutput("output13", "Please enter valid month number");
        return;
    }
    else {
        month = +month;
        let days;
        if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            days = 31;
        }
        else if(month === 4 || month === 6 || month === 9 || month === 11) {
            days = 30;
        }
        else if(month === 2) {
            days = 28; 
        }
        else {
            days = "Invalid month";
        }
        showOutput("output13", "Days in Month: " + days);
    }
}

// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade
// Percentage >= 90%: Grad A
// Percentage >= 80%: Grad B
// Percentage >= 70%: Grad C
// Percentage >= 60%: Grad D
// Percentage >= 40%: Grad E
// Percentage < 40%: Grad F

function runQuestion14() {
    let marks = [];
    for (let i = 1; i <= 5; i++) {
        let mark = prompt("Enter marks of subject " + i + ":");
        if (isNaN(mark) || mark === "") {
            alert("Please enter valid numbers");
            showOutput("output14", "Please enter valid numbers");
            return;
        }
        else {
            marks.push(+mark);
        }
    }
    let total = getsum(marks);
    let percentage = (total / (marks.length * 100)) * 100;
    let grade;
    if (percentage >= 90) {
        grade = "A";
    } else if (percentage >= 80) {
        grade = "B";
    } else if (percentage >= 70) {
        grade = "C";
    } else if (percentage >= 60) {
        grade = "D";
    } else if (percentage >= 40) {
        grade = "E";
    } else {
        grade = "F";
    }
    showOutput("output14", "Percentage: " + percentage + "%<br>" +
        "Grade: " + grade);
}

// ******************************** Using switch case*******************************
// 15- Write a program to print total number of days in month
function runQuestion15() {
    let month = prompt("Enter month number (1-12):");
    if (isNaN(month) || month === "" || month < 1 || month > 12) {
        alert("Please enter valid month number");
        showOutput("output15", "Please enter valid month number");
        return;
    }
    else {
        month = +month;
        let days;
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                days = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                days = 30;
                break;
            case 2:
                days = 28; // Assuming non-leap year
                break;
            default:
                days = "Invalid month";
        }
        showOutput("output15", "Days in Month: " + days);
    }
}

// 16- Write a program to check whether an alphabet is vowel or consonant
function runQuestion16() {
    let char = prompt("Enter a character:");
    if (char === null || char.trim() === ""||!isNaN(char)) {
        showOutput("output16", "You cancelled the prompt");
        alert("Please enter a character");
    }
    else {
        char = char.toLowerCase();
        if (char.length === 1) {
            switch (char) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    showOutput("output16", "Vowel");
                    break;
                default:
                    showOutput("output16", "Consonant");
            }
        }
        else {
            alert("Please enter a valid character");
            showOutput("output16", "Please enter a valid character");
        }
    }
}

// 17- Write a program to find maximum between two numbers using switch case

function runQuestion17() {
    let num1 = prompt("Enter first number:");
    let num2 = prompt("Enter second number:");
    if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {
        alert("Please enter valid numbers");
        showOutput("output17", "Please enter valid numbers");
        return;
    }
    else {
        num1 = +num1;
        num2 = +num2;
        let max;
        switch (true) {
            case (num1 > num2):
                max = num1;
                break;
            case (num2 > num1):
                max = num2;
                break;
            default:
                max = "Both numbers are equal";
        }
        showOutput("output17", "Max element: " + max);
    }
}
// 18- Write a program to check whether a number is even or odd
function runQuestion18() {
    let num1 = prompt("Enter a number:");
    if (isNaN(num1) || num1 === "") {
        alert("Please enter valid numbers");
        showOutput("output18", "Please enter valid numbers");
        return;
    }
    else {
        num1 = +num1;
        let result;
        switch (num1 % 2) {
            case 0:
                result = "Even";
                break;
            case 1:
                result = "Odd";
                break;
            default:
                result = "Invalid number";
        }
        showOutput("output18", result);
    }
}

// 19- Write a program to check whether a number is positive or negative or zero
function runQuestion19() {
    let num1 = prompt("Enter a number:");
    if (isNaN(num1) || num1 === "") {
        alert("Please enter valid numbers");
        showOutput("output19", "Please enter valid numbers");
        return;
    }
    else {
        num1 = +num1;
        let result;
        switch (true) {
            case (num1 > 0):
                result = "Positive";
                break;
            case (num1 < 0):
                result = "Negative";
                break;
            case (num1 === 0):
                result = "Zero";
                break;
            default:
                result = "Invalid number";
        }
        showOutput("output19", result);
    }
}

// 20- Write a program to create Simple Calculator
function runQuestion20() {
    let num1 = prompt("Enter first number:");
    let num2 = prompt("Enter second number:");
    let operator = prompt("Enter operator (+, -, *, /):");
    if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "" || operator === "") {
        alert("Please enter valid numbers and operator");
        showOutput("output20", "Please enter valid numbers and operator");
        return;
    }
    else {
        num1 = +num1;
        num2 = +num2;
        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "Cannot divide by zero";
                }
                break;
            default:
                result = "Invalid operator";
        }
        showOutput("output20", "Result: " + result);
    }
}

function toggleCode(questionNum) {
    var codeDiv = document.getElementById('code' + questionNum);
    var preCode = document.getElementById('preCode' + questionNum);
    var btn = document.getElementById('btnCode' + questionNum);

    if (codeDiv.style.display === 'none') {
        var funcName = 'runQuestion' + questionNum;
        var funcCode = window[funcName].toString();
        preCode.innerText = funcCode;
        codeDiv.style.display = 'block';
        btn.textContent = 'Hide Code';
    } else {
        codeDiv.style.display = 'none';
        btn.textContent = 'Show My Code';
    }
}





