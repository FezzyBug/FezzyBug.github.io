function setup() {
    createCanvas(1200, 400);
    background(200);
}

function draw(name) {
    if (mouseIsPressed) {
        userName = document.getElementById("nameInput").value;
        fill(0);
        textSize(32);
        text(userName, mouseX, mouseY); // Change "Your Name" to your actual name
    }
}
