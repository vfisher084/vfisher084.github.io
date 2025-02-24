const images = {
    "images/birthday.jpg": "Happy Birthday",
    "images/clown.jpg": "Crazy Clown",
    "images/rain.jpg": "It's Raining",
    "images/read.jpg": "Quiet Time",
    "images/shovel.jpg": "Working Hard",
    "images/work.jpg": "Work from Home"
}

const titlesSection = document.getElementById("titles-section");

//read about object.keys on w3schools.com
Object.keys(images).forEach((imgSrc) => {
    const title = images[imgSrc];
    const p = document.createElement("p");
    p.textContent = title;
    p.classList.add("title");
    titlesSection.append(p);

    p.onclick = () => showPopup(title, imgSrc);
})

const showPopup = (title, imageSrc) => {
    const popup = document.getElementById("popup");
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-img").src = imageSrc;
    popup.classList.remove("hidden");
}

document.getElementById("close").onclick = () => {
    document.getElementById("popup").classList.add("hidden");
}