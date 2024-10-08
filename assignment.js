let number1=document.getElementById("num1")

let number2=document.getElementById("num2")

let button=document.getElementById("btn")


let num1=Math.floor(Math.random()*6)+1;
let num2=Math.floor(Math.random()*6)+1;

// number1.innerHTML=num1
// number2.innerHTML=num2

setInterval(()=>{
    console.log(num1)
    console.log(num2)
})



if(num1==1){
    number1.setAttribute("class","number1")
}
else if(num1==2){
    number1.setAttribute("class","number2")
}
else if(num1==3){
    number1.setAttribute("class","number3")
}
else if(num1==4){
    number1.setAttribute("class","number4")
}
else if(num1==5){
    number1.setAttribute("class","number5")
}
else{
    number1.setAttribute("class","number6")
}


if(num2==1){
    number2.setAttribute("class","number1")
}
else if(num2==2){
    number2.setAttribute("class","number2")
}
else if(num2==3){
    number2.setAttribute("class","number3")
}
else if(num2==4){
    number2.setAttribute("class","number4")
}
else if(num2==5){
    number2.setAttribute("class","number5")
}
else{
    number2.setAttribute("class","number6")
}



if(num1>num2){
    let Result=document.getElementById("result")
Result.innerHTML="player-1"
}
else if(num1==num2){
    let Result=document.getElementById("result")
    Result.innerHTML="draw"
}
else{
    let Result=document.getElementById("result")
    Result.innerHTML="player-2"
}  






