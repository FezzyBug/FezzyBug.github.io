// Display current date and time
function displayDateTime() {
    const dateTimeElement = document.getElementById("dateTimeDisplay");
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    dateTimeElement.textContent = `Today is ${now.toLocaleTimeString('en-US', options)}`;
}

// Call the function to set date on load
displayDateTime();

// Display greeting based on user input
function displayGreeting() {
    const name = document.getElementById("name").value;
    const mood = document.getElementById("mood").value;
    const greetingMessage = `The Dungeon Gremlins welcome you, ${name}! We're glad you're feeling ${mood}!`;
    document.getElementById("greetingMessage").textContent = greetingMessage;
}

// Display polygon name based on favorite number
function displayPolygon() {
    let favoriteNumber = Math.round(Math.abs(parseFloat(document.getElementById("favoriteNumber").value)));
    const polygons = ["Monogon", "Digon", "Trigon", "Tetragon", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Enneagon", "Decagon"];
    const polygonName = polygons[favoriteNumber] || "Unknown shape";
    alert(`A polygon with ${favoriteNumber} sides is called a ${polygonName}`);
}

// Brand-themed functions
function randomGremlinMessage() {
    const messages = ["Keep modding!", "Make it your own!", "Welcome to the dungeon!", "Unleash the sound!"];
    alert(messages[Math.floor(Math.random() * messages.length)]);
}

function boostAudio() {
    alert("Boosting audio... Now at 110%!");
}

function findLostParts() {
    alert("Scanning... Found 3 screws and 2 audio caps under the couch!");
}

function generateSqueak() {
    alert("Dungeon Gremlin: *squeak squeak*");
}
