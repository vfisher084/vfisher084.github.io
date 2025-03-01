//draw Stairs
document.getElementById("draw-stairs-btn").onclick = () => {
    const stairs = document.getElementById("stairs");
    const climbBtn = document.getElementById("climb-stairs-btn");
    
    
    stairs.innerHTML = ""; //clear previous stairs
    climbBtn.style.display = "none"; //hide climb button initially

    const leftRail = document.createElement("div");
    const rightRail = document.createElement("div");
    leftRail.classList.add("rail");
    rightRail.classList.add("rail");
    leftRail.style.left = "0px";
    rightRail.style.right = "0px";

    stairs.append(leftRail, rightRail);

    for(let i= 0; i <10; i++) {
        const stair = document.createElement("div");
        stair.classList.add("stair");
        stair.style.bottom = `${i * 60}px`;
        stairs.append(stair);
    }

    //stick figure
    const stickFigure = document.createElement("img");
    stickFigure.src = "images/left.png";
    stickFigure.id = "stick-figure";
    stickFigure.style.position = "absolute";
    stickFigure.style.bottom = "0px";
    stickFigure.style.left = "35px";
    stickFigure.style.width = "50px";

    stairs.append(stickFigure);
    climbBtn.style.display = "block";
}

//climbing stairs
document.getElementById("climb-stairs-btn").onclick = () => {
    const stickFigure = document.getElementById("stick-figure");
    let step = 0;
    let useLeftImage = true;
    let climbing = setInterval(() => {
        if(step >=10) {
            clearInterval(climbing);
            return;
        }

        if(useLeftImage)
        {
            stickFigure.src = "images/left.png";
        }
        else
        {
            stickFigure.src = "images/right.png";
        }

        useLeftImage = !useLeftImage;
        stickFigure.style.bottom = `${step * 60}px`;
        step++;
    }, 600);
}