// Riddle database

let riddles=[

{
question:"I start programs in C language",
answer:"#include",
codePart:"#include<stdio.h>"
},

{
question:"Function where execution starts",
answer:"main",
codePart:"int main(){"
},

{
question:"Used to print output",
answer:"printf",
codePart:'printf("Hello World");'
},

{
question:"Used to end function result",
answer:"return",
codePart:"return 0;"
},

{
question:"Closes the program block",
answer:"brace",
codePart:"}"
}

]

let index=0
let collected=[]
let startTime

function startGame(){

let name=document.getElementById("playerName").value

if(name==""){
alert("Enter name")
return
}

localStorage.setItem("player",name)

document.getElementById("loginPage").classList.add("hidden")
document.getElementById("quizPage").classList.remove("hidden")

startTime=new Date()

showRiddle()

}

function showRiddle(){

document.getElementById("riddleQuestion").innerText=riddles[index].question

}

function submitAnswer(){

let ans=document.getElementById("answer").value.toLowerCase()

if(ans==riddles[index].answer.toLowerCase()){

collected.push(riddles[index].codePart)

document.getElementById("message").innerText="Correct!"

document.getElementById("codeParts").innerHTML+=riddles[index].codePart+"<br>"

index++

if(index==riddles.length){

document.getElementById("quizPage").classList.add("hidden")

document.getElementById("arrangePage").classList.remove("hidden")

return

}

showRiddle()

}else{

alert("Wrong answer! Restarting from question 1")

index=0
collected=[]

document.getElementById("codeParts").innerHTML=""

showRiddle()

}

}

function checkFinalCode(){

let order=document.getElementById("orderInput").value.split(" ")

let correct=true

for(let i=0;i<order.length;i++){

if(parseInt(order[i])!==i+1){
correct=false
}

}

let endTime=new Date()

let timeTaken=(endTime-startTime)/1000

if(correct){

document.getElementById("finalResult").innerText=
"Correct Code! Time: "+timeTaken+" seconds"

}else{

document.getElementById("finalResult").innerText="Wrong Order"

}

}

// Admin login

function adminLogin(){

let pass=document.getElementById("adminPass").value

if(pass=="admin123"){

document.getElementById("adminPanel").classList.remove("hidden")

}else{

alert("Wrong password")

}

}

function addRiddle(){

let q=document.getElementById("newQuestion").value
let a=document.getElementById("newAnswer").value
let c=document.getElementById("newCodePart").value

riddles.push({
question:q,
answer:a,
codePart:c
})

alert("Riddle Added")

}