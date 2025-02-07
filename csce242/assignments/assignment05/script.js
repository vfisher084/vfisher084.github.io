/**pieced together code from researching on the internet to figure out how
 * to get Pick a Color and Change Image Color to work
 */

//Say Hello
document.querySelector("#say-hello h3").onclick = () =>{
    const output = document.getElementById("hello-output");
    output.innerHTML += "Hello<br>";
}     

//Pick a Color (star)
document.getElementById("color-picker").oninput = () => {
    const star = document.querySelector(".star");
    const colorPicker = document.getElementById("color-picker").value;
    star.style.background = colorPicker;
}

//Change Image Color
document.getElementById("diff-img").onclick = () => {
    const img = document.getElementById("diff-img");
    img.src = img.src.includes("images/200x200(1).png") ? "images/200x200(2).png" : "images/200x200(1).png";
}