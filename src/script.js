let FLAGS = ["ctf{capture-the-flag}", "ctf{the-second-flag}", "ctf{augusta-ada-king}", "ctf{blink}", "ctf{binary}", "ctf{caesar}", "ctf{I-came-I saw-I-conquered}"];

let INSTRUCTIONS = [];/*
    "A Capture the Flag (CTF) is a competition where you solve a number of challenges to test yor cybsecurity skills by solving problems to recover flags. ALL flags in our CTF will look something like this: ctf{capture-the-flag}.  You can solve the first challenge right now by submitting this flag \n (Note: flags are NOT case-sensitive)",
    "Some challenges require you to download files in order to be able to solve them. Click on the ‘DOWNLOAD CHALLENGE’ button to download the challenge and submit the flag!",
    "Here's a free flag up for grabs. Who is referred to as the known as the 'World's First Programmer'? (Enter as ctf{firstname-middlename-surname})",
    "Some challenges will involve hardware. In thhis challenge, each team has been provided with their opponent's flag. You must communicate the first clue to the opposing team via morse code using a blinking LED.",
    "Sometimes you'll be asked to solve riddles. Solve this riddle to obtain the next flag: \n 'In ones and zeroes, I am found,\nA language without a sound.\nWith just two digits, I convey,\nAll about computing, every day.'",
    "Beneath the surface, the source resides. Hidden in code, secrets abide.",
    "LOokSlIKethefLaGGotlOstiNthistextJAM{P-jhtl-P-zhd-P-jvuxblylk}buTuNeedtoshiftiTtoenter...",
];
*/
let TITLES = [
    "1. Getting Started",
    "2. Downloadable Challenges",
    "3. Trivia Time",
    "4. A Cooperative Clue",
    "5. What Am I?",
    "6. Out of Sight",
    "7. Shifty Statements"
];

let HINTS = [
    "Copy and paste the highlighted flag.",
    "The flag is in the downloaded text file.",
    "She was Countess of Lovelace, but what is her real name?",
    "Keeping your opponent’s flag from them is not an option as it will be an instant fail.",
    "Please, you don't need a clue for this.",
    "Inspect the page source. The flag is hidden there.",
    "Caesar said:"
];

let AGENT = ["Hello, this is Agent Grey from the Cybersecurity Task Force. Congrats on solving the initial challenges. We need your help on a high-priority mission.",
            "We’ve identified a rogue website crucial to an underground network. Your task is to infiltrate it, bypass its security, and extract encrypted communication logs, user databases, and transaction records.",
            "The login system might be susceptible to SQL injection, and there’s an outdated encryption library. Expect firewalls, intrusion detection, and obfuscated code.",
            "Faliure is not an option and time is critical. Act swiftly to prevent further damage and gather intel to dismantle their network. Good luck!"
]

let PLAYER = ["Thank you. What’s the mission?",
              "Understood. What vulnerabilities do we know of so far?",
              "Got it. We'll do our best.",
              "Thank you. We won’t let you down!"
]

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
function highlightCTF(text) {
    return text.replace(/(ctf\{[^}]+\})/g, '<span class="flag">$1</span>');
}
let currentStep = 0;

function nextDialogue() {
    if (currentStep < AGENT.length) {
        document.getElementById("agent-dialogue").innerText = AGENT[currentStep];
        document.getElementById("player-dialogue").innerText = PLAYER[currentStep];
        currentStep++;
    } else {
        document.getElementById("agent-dialogue").innerText = "Mission briefing complete. Good luck!";
        document.getElementById("player-dialogue").disabled = true;
        document.getElementById("player-dialogue").innerText = "End of Call";
        closeDialog()
    }
}


function displayInstruction() {
    if (index < INSTRUCTIONS.length) {
        document.getElementById("instruction").innerHTML = highlightCTF(INSTRUCTIONS[index]);
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
    document.getElementById("phoneCall").style.display = "none";
    document.getElementById("dialogBox").style.display = "block";
    nextDialogue();
}

function closeDialog() {
    document.getElementById("dialogBox").style.display = "none";
}