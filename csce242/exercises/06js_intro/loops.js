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