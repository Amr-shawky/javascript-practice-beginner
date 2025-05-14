// 1- Write a program that allow to user enter number then printit
// Example
// Input: 5
// Output: 5
let number = prompt("Enter a number;");
console.log(number);
window.alert(number);


/*
2- Write a program that take number from user then print yes if that number can divide by 3
and 4 otherwise print no
Example1
Input: 12 Output Yes
Example 2
Input: 9 Output No

3- Write a program that allows the user to insert 2 integers then print the max
Example1
Input: 3 5
Output: 5
Example 2
Input: 10 7
Output: 10

4- Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive.
Example 1
Input: -5
Output negative
Example2
Input: 10
Output positive

5- Write a program that take 3 integers from user then print the max element
and the min element.
Example 1
Input:7,8,5
Output:
max element = 8
min element = 5
Example2
Input: 3 6 9
Outputs:
Max element = 9
Min element = 3

6- Write a program that allows the user to insert integer number then
check If a number is oven or odd
7- Example 1
Input: 8
Output: even
Example 2
Input: 7
Output: odd

8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
then print vowel otherwise print consonant
Example1
Input: O
Output: vowel
Example 2
Input: b
Output:
Consonant

9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to
that’s number
Example Input 5
Output 1, 2, 3, 4, 5

10- Write a program that allows userto insert integerthen print a multiplication table up to 12.
Example
Input: 5
Outputs:
5 10 15 20 25 30 35 40 45 50 55 60

11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers
between 1 to this number
Example:
Input: 15
Output: 2 4 6 8 10 12 14

12- Writeaprogramthattaketwointegersthenprintthepower
Example:
Input: 4 3
Output: 64
Hint how to calculate 4^3 = 4 * 4 * 4 =64

12- Write a program to enter marks of five subjects and calculate total, average and
percentage.
Example
Input: - Enter Marks of five subjects:
95
76
58
90
89
Output:-.Total marks = 435
Average Marks =87
Percentage =87

13-Write a program to input month number and print number of days in that
month.
Example:
Input: - Month Number: 1
Output:-. Days in Month: 31

14- Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade
Percentage >= 90%: Grad A
Percentage >= 80%: Grad B
Percentage >= 70%: Grad C
Percentage >= 60%: Grad D
Percentage >= 40%: Grad E
Percentage < 40%: Grad F

******************************** Using switch case*******************************
15- Write a program to print total number of days in month
16- Write a program to check whether an alphabet is vowel or consonant
17- Write a program to find maximum between two numbers
18- Write a program to check whether a number is even or odd
19- Write a program to check whether a number is positive or negative or zero
20- Write a program to create Simple Calculator
*/



















function showOutput(id, content) {
    const output = document.getElementById(id);
    output.innerHTML = content;
    output.classList.add('show');
}

function runQuestion1() {
    let number = prompt("Enter a number:");
    showOutput("output1", number);
}

function runQuestion2() {
    let number = parseInt(prompt("Enter a number:"));
    if (number % 3 === 0 && number % 4 === 0) {
        showOutput("output2", "Yes");
    } else {
        showOutput("output2", "No");
    }
}

function runQuestion3() {
    let num1 = parseInt(prompt("Enter first number:"));
    let num2 = parseInt(prompt("Enter second number:"));
    let max = Math.max(num1, num2);
    showOutput("output3", max);
}

function runQuestion4() {
    let number = parseInt(prompt("Enter a number:"));
    if (number < 0) {
        showOutput("output4", "negative");
    } else {
        showOutput("output4", "positive");
    }
}

function runQuestion5() {
    let num1 = parseInt(prompt("Enter first number:"));
    let num2 = parseInt(prompt("Enter second number:"));
    let num3 = parseInt(prompt("Enter third number:"));
    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);
    showOutput("output5", `Max element = ${max}<br>Min element = ${min}`);
}