/*
Grade Distribution Analyzer Script
This script reads multiple grades entered by the user
(separated by spaces) and analyzes them.
Functions include:
• Total number of grades
• Average grade
• Highest grade
• Lowest grade
• Grade distribution (A–F)
*/
function analyzeGrades(){
let input = document.getElementById("gradesInput").value.trim();
if(input === ""){
alert("Please enter grades.");
return;
}
/* Convert input into numbers */
let grades = input.split(/\s+/).map(Number);
/* Remove invalid values */
grades = grades.filter(g => !isNaN(g));
if(grades.length === 0){
alert("Please enter valid numbers.");
return;
}
/* Basic calculations */
let total = grades.length;
let sum = grades.reduce((a,b)=>a+b,0);
let average = (sum/total).toFixed(2);
let highest = Math.max(...grades);
let lowest = Math.min(...grades);
/* Grade distribution */
let A=0,B=0,C=0,D=0,F=0;
grades.forEach(g=>{
if(g>=90) A++;
else if(g>=80) B++;
else if(g>=70) C++;
else if(g>=60) D++;
else F++;
});
/* Display results */
document.getElementById("total").textContent = total;
document.getElementById("average").textContent = average;
document.getElementById("highest").textContent = highest;
document.getElementById("lowest").textContent = lowest;
document.getElementById("A").textContent = A;
document.getElementById("B").textContent = B;
document.getElementById("C").textContent = C;
document.getElementById("D").textContent = D;
document.getElementById("F").textContent = F;
}
