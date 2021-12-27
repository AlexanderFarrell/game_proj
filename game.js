let canvas = document.getElementById("game");
let context = canvas.getContext("2d");
let color = {r: 0, g: 0, b: 0}
let things = [];
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

document.body.addEventListener("resize", () => {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
})

document.body.addEventListener("keypress", (event) => {
    KeyboardInput(event.key);
})

class Thing {
    constructor(x, y, width, height, style) {
        this.X = x;
        this.Y = y;
        this.Width = width;
        this.Height = height;
        this.Style = style;
        things.push(this);
    }
}

function GameLoop() {
    Update();
    Draw();
    requestAnimationFrame(GameLoop);
}

function Update() {

}

function Draw() {
    context.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b}`;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    things.forEach(thing => {
        context.fillStyle = thing.Style;
        context.fillRect(thing.X, thing.Y, thing.Width, thing.Height);
    })
}

requestAnimationFrame(GameLoop);

let alex = new Thing(0, 0, 50, 30, "red");
let grass = new Thing(80, 40, 50, 40, "purple");

function KeyboardInput(key) {
    if (key === 'w') {
        alex.Y -= 1;
    }
    if (key === 'a') {
        alex.X -= 1;
    }
    if (key === 's') {
        alex.Y += 1;
    }
    if (key === 'd') {
        alex.X += 1;
    }
}

// let img = document.createElement("img");
// img.setAttribute("src", "https://github.com/AlexanderFarrell/game_proj/blob/master/Tree.png?raw=true");
//
// let treeImage = context.createPattern(img, "repeat");

//let tree = new Thing(100, 0, 70, 20, treeImage);