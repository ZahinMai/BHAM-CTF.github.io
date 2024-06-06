let FLAGS = ["ctf{capture-the-flag}", "ctf{the-second-flag}", "ctf{blink}", "ctf{binary}", "ctf{caesar}", "CTF{I-came-I saw-I-conquered}"];
let INSTRUCTIONS = [
    "A capture-the-flag (CTF) is a competition where you solve a number of challenges to test your cybersecurity skills by solving problems to recover flags. All flags in our CTF will look something like this: ctf{capture-the-flag}.  You can solve the first challenge right now by submitting this flag.",
    "Some challenges require you to download files in order to be able to solve them. Click on the ‘DOWNLOAD CHALLENGE’ button to download the challenge and find the flag to submit!",
    "Each team has been provided with their opponent's flag. You must communicate the first clue to the opposing team via morse code using a blinking LED.",
    "'In ones and zeroes, I am found,\nA language without a sound.\nWith just two digits, I convey,\nAll about computing, every day.'",
    "Beneath the surface, the source resides. Hidden in code, secrets abide.",
    "ab3fJAM{P-jhtl-P-zhd-P-jvuxblylk}7q2x"
];
let TITLES = [
    "1. Getting started",
    "2. Downloadable challenges",
    "3. A cooperative clue",
    "4. What am I?",
    "5. Out of sight",
    "6. Shifty statements"
];

let HINTS = [
    "No hint for this part :(",
    "No hint for this part :(",
    "Keeping your opponent’s flag from them is not an option as it will be an instant fail.",
    "Please, you don't need a clue for this...",
    "How do you inspect the page source?",
    "Caesar said:"
];


let index = 0; // Index to keep track of the current flag

function submitFlag() {
    const flagInput = document.getElementById("flagInput").value.toLowerCase();
    const expectedFlag = FLAGS[index].toLowerCase();
    if (flagInput === expectedFlag) {
        document.getElementById("alert").innerText = "";
        index++;
        document.getElementById("hint").style.display = "none";
        displayInstruction();
    } else {
        document.getElementById("alert").innerText = "Incorrect flag! Try again.";
    }
    document.getElementById("flagInput").value = "";
}

function displayInstruction() {
    if (index < INSTRUCTIONS.length) {
        document.getElementById("instruction").innerText = INSTRUCTIONS[index];
        document.getElementById("stage-title").innerText = TITLES[index];
        if (index === 1) { // Show download link only for instruction 2 (index 1)
            document.getElementById("downloadLink").style.display = "block";
        } else {
            document.getElementById("downloadLink").style.display = "none";
        }
    } else {
        document.getElementById("contentContainer").style.display = "none";
        document.getElementById("phoneCall").style.display = "block";
    }
}

function showHint() {
    document.getElementById("hint").innerText = HINTS[index];
    document.getElementById("hint").style.display = "block";
}

window.onload = function() {
    const submitBtn = document.getElementById("submitBtn");
    const flagInput = document.getElementById("flagInput");
    const alertDiv = document.getElementById("alert");
    const instructionDiv = document.getElementById("instruction");
    const stageTitleDiv = document.getElementById("stage-title");
    const flagForm = document.getElementById("flagForm");
    const phoneCall = document.getElementById("phoneCall");

    if (submitBtn && flagInput && alertDiv && instructionDiv && stageTitleDiv && flagForm && phoneCall) {
        displayInstruction();
        submitBtn.onclick = submitFlag;
        phoneCall.onclick = showDialog;
    } else {
        console.error('One or more required DOM elements are missing.');
    }
};

function showDialog() {
    document.getElementById("dialogBox").style.display = "block";
}

function closeDialog() {
    document.getElementById("dialogBox").style.display = "none";
}
