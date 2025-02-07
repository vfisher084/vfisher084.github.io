//do stuff when button clicked
document.getElementById("btn-click-me").onclick = () =>{
    console.log("WOW!");
    document.getElementById("result").innerHTML="Hi Ronni";
}

//change color
document.getElementById("btn-color").onclick = () => {
   const messageP = document.getElementById("message");
   messageP.innerHTML = "Goodbye";
   messageP.classList.toggle("sad");
}

//happy script
document.getElementById("btn-happy").onclick = () => {
    const displayP = document.getElementById("display")
    displayP.classList.remove("hidden");
    displayP.classList.add("happy");
    displayP.innerHTML = "Good times";
}

//sad script
document.getElementById("btn-sad").onclick = () => {
    const displayP = document.getElementById("display")
    displayP.classList.remove("hidden");
    displayP.classList.remove("happy");
    displayP.classList.add("sad");
    displayP.innerHTML = "Bad times";
}

//clear
document.getElementById("btn-clear").onclick = () => {
    document.getElementById("display").classList.add("hidden");
}

//key down
document.getElementById("txt-emotion").onkeyup = (event) => {
    //const emotion = document.getElementById("txt-emotion").value;
   // const emotion = event.currentTarget.value;
    //console.log(emotion);
    document.getElementById("emotional-message").innerHTML = 
    "You are feeling " + event.currentTarget.value;
    
}