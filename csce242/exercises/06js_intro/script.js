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

//show color message
document.getElementById("btn-choose-color").onclick = () => {
    const color = document.getElementById("txt-color").value.toLowerCase().trim();
    let mood = " ";

    if(color == "blue")
    {
        mood = "sad";
    }
    else if(color == "yellow")
    {
        mood = "mellow";
    }
    else
    {
        mood = "undefined";
    }
    
    document.getElementById("color-message").innerHTML =
    `You chose ${color}. You are feeling ${mood}.`;
}


//toggling the nav
document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
}

//circle movement

let pos = 0;
const changeCirclePos = (increment) => {
    pos += increment;
    document.getElementById("circle").style.setProperty("top", pos + "px");
}
//down
document.getElementById("btn-down").onclick = () => {
    changeCirclePos(10);
}

//up
document.getElementById("btn-up").onclick = () => {
    changeCirclePos(-10);
}

document.getElementById("btn-pick-color").onchange = (event) => {
    const color = event.currentTarget.value;
   // document.getElementById("circle").style.setProperty("background", color);
   document.getElementById("circle").style.setProperty("--circle-color", color);
}

//Donations thermometer

const GOAL = 1000;
let donations = 0;

document.getElementById("goal-display").innerHTML = `Goal $${GOAL}`;

//when add clicked if donation is negative display the error
document.getElementById("btn-add-donation").onclick = () => {
    //validate donation amount
    const donation = document.getElementById("txt-donation").value;
    document.getElementById("donation-error").classList.add("hidden");

    if(isNaN(donation) || donation <= 0){
        document.getElementById("donation-error").classList.remove("hidden");
        return;
    }

    //otherwise update the donations and display in console
    donations += donation;
    donationPercent = donations / GOAL * 100;

    //show donation message
    document.getElementById("donation-message").innerHTML = `$${GOAL - donations} to go!`;

    //update thermometer
    document.getElementById("thermometer").style.setProperty("--donation-percent", donationPercent + "%");
}

