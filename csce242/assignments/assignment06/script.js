//toggle nav
document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
    document.getElementById("toggle-nav").classList.toggle("open");
}

const showExercise = (exerciseToShow) => {
    document.getElementById("exercise1").classList.add("hide");
    document.getElementById("exercise2").classList.add("hide");
    document.getElementById(exerciseToShow).classList.remove("hide");
}

document.getElementById("exercise1-btn").onclick = () => showExercise("exercise1");
document.getElementById("exercise2-btn").onclick = () => showExercise("exercise2");

//Exercise 1
document.getElementById("transportation-input").onkeyup = (event) => {
    const input = event.currentTarget.value.toLowerCase().trim();
    const validTransport = ["bike", "scooter", "car", "skateboard"];
    const imgSection = document.getElementById("img");
    const imgElement = document.getElementById("transport-img");

    if(validTransport.includes(input)) {
        imgElement.src = `images/${input}.jpg`;
        imgElement.alt = input;
        imgElement.style.display = "block";
        imgSection.classList.remove("hide");
    }
    else {
        imgElement.src = "";
        imgElement.alt = "";
        imgElement.style.display = "none";
        imgSection.classList.add("hide");
    }
}

//Exercise 2
const changeHeartColor = (color) => {
    document.getElementById("heart").style.backgroundColor = color;
}

document.getElementById("btn-red").addEventListener("click", () => changeHeartColor("red"));
document.getElementById("btn-blue").addEventListener("click", () => changeHeartColor("blue"));
document.getElementById("btn-green").addEventListener("click", () => changeHeartColor("green"));