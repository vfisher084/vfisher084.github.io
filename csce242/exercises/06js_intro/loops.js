document.getElementById("btn-display").onclick = () => {
    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);
    const errorDisplay = document.getElementById("error-num-order");
    const displayArea = document.getElementById("start-end-display");
    const favMessageP = document.getElementById("fav-message");

    displayArea.innerHTML = "";
    errorDisplay.innerHTML = ""; //clear out previous errors
    favMessageP.innerHTML = "";

    if(endNum < startNum) {
        errorDisplay.innerHTML = `${endNum} is less than ${startNum}`;
        return;
    }

    for(let i = startNum;i <= endNum; i++) {
        const li = document.createElement("li");
        li.innerHTML = i;
        displayArea.append(li);
        //attach event to onclick li
        li.onclick = () => {
            //console.log(i);
            favMessageP.innerHTML = `You clicked ${i}`
        }
    }
}

//Counting section
let count = 0;
let updateCount;

document.querySelector("#btn-count").onclick = (event) => {
    //start the counter
    if(event.currentTarget.innerHTML.toLowerCase() == "start") {
        event.currentTarget.innerHTML = "Stop";

        updateCount = setInterval(()=>{
            count++;
            document.querySelector("#count-display").innerHTML = count;
        },700);
    }
    //stop the counter
    else {
        event.currentTarget.innerHTML = "Start";
        clearInterval(updateCount);
    }
}

document.querySelector("#btn-reset").onclick = () => {
    count = 0;
    clearInterval(updateCount);
    document.querySelector("#btn-count").innerHTML = "Start";
    document.querySelector("#count-display").innerHTML = "";
}

//Toys Section
document.querySelector("#show-toys-btn").onclick = (event) => {
    event.currentTarget.disabled = true; //can only click button once
    const toys = ["Barbie", "car", "Mr Potato Head", "Elmo"];

    event.currentTarget.disabled = true;

    const ul = document.createElement("ul");
    document.getElementById("toys-display").append(ul);

    toys.forEach((toy, i)=>{
        const li = document.createElement("li");
        ul.append(li);
        li.innerHTML = `${i+1}. ${toy}`; 
    })
    
}

//loop thru associative array
document.getElementById("toys-desc-btn").onclick = () => {
    const toys = [];
    toys["Barbie"] = "Your favorite doll";
    toys["car"] = "VROOM";
    toys["Mr Potato Head"] = "Tripped over this when I was little";
    toys["Elmo"] = "Red dude";

    const section = document.getElementById("display-toy-descs");

    for(let toy in toys) {
        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = (`${toy}: ${toys[toy]}`);
        p.onclick = () => {
            document.getElementById("toy-message").innerHTML = `Best ${toy} ever! ${toys[toy]}`;
        }
    }
}
