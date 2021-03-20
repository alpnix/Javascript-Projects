// selecting the grid and the boxes inside
const grid = document.querySelector(".grid");
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const boxNumber = 130;

// creating boxes and adding evenst
for (let i=0;i<boxNumber;i++){
    let box = document.createElement("div");
    box.classList.add("box");

    box.addEventListener("mouseover", () => setColor(box));

    box.addEventListener("mouseleave",() => removeColor(box));

    grid.appendChild(box);
}

// writing the functions for corresponding events
function setColor(e){
    const color = getRandomColor();
    e.style.background = color;
    e.style.boxShadow = `0 0 15px ${color}, 0 0 15px ${color}, 0 0 15px ${color}`
}

function removeColor(e){
    e.style.background = "#1f1f1f";
    e.style.boxShadow = "0 0 4px #2f2f2f"
}

// writing the random color function 
function getRandomColor(){
    const index = Math.floor(Math.random()*colors.length);
    return colors[index];
}
