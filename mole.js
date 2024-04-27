let curMoleTile;
let curPlantTile;
let score = 0;
let gameOver = false;

window.onload = function () {
    setGame();
}

function setGame() {
    //set up the grid for the game board in html
    for (let i = 0; i < 9; i++) { // i goes 0 to 8, stops at 9
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000); //2000 milliseconds = 1 seconds
    setInterval(setPlant, 2000); //3000 milliseconds = 3 seconds
}

function getRandomTile() {

    //Math.random --> (0-1) *9=(0-9) --> round down to (0-8) integer
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }

    if (curMoleTile) {
        curMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./mole.png";

    let num = getRandomTile();

    if (curPlantTile && curPlantTile.id == num) {
        return;
    }
    curMoleTile = document.getElementById(num);
    curMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }

    if (curPlantTile) {
        curPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();

    if (curMoleTile && curMoleTile.id == num) {
        return;
    }
    curPlantTile = document.getElementById(num);
    curPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return;
    }

    if (this == curMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score
    }
    else if (this == curPlantTile) {
        document.getElementById("score").innerText = "GAME OVER " + score.toString();
        gameOver = true;
    }
}