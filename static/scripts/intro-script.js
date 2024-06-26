/*
let INSTRUCTIONS = [];
let TITLES  = [];
let FLAGS = [];
let HINTS = [];
*/

let TITLES = [
    "1. Getting started",
    "2. Downloadable challenges",
    "3. Trivia time",
    "4. A cooperative clue",
    "5. What am I?",
    "6. Out of sight",
    "7. Shifty statements"
];
let INSTRUCTIONS = [
    "A capture-the-flag (CTF) is a competition where you solve a number of challenges to test your cybersecurity skills by solving problems to find flags. All flags in our CTF will be in the following format: ctf{capture-the-flag}.<br><br>You can solve the first challenge by submitting the above flag <br><br><small>(Note that flags are NOT case-sensitive!)</small>",
    "Some challenges require you to download files in order to be able to solve them. Click on the ‘DOWNLOAD CHALLENGE’ button to download the challenge and find the flag!",
    "Here's another flag up for grabs. Who is referred to as the known as the 'World's First Programmer'? Enter in the format ctf{firstname-surname}!",
    "Some challenges will involve hardware. In this challenge, each team has been provided with their opponent's flag. You must communicate the first clue to the opposing team via morse code using a blinking LED.",
    "Sometimes you'll be asked to solve riddles. Solve this riddle to obtain the next flag: \n 'In ones and zeroes, I am found,\nA language without a sound.\nWith just two digits, I convey,\nAll about computing, every day.'",
    "Beneath the surface, the source resides. Hidden in code, secrets abide.",
    "LOokSlIKethefLaGGotlOstiNthistextjam{P-jhtl-P-zhd-P-jvuxblylk}buTuNeedtoshiftiTtoenter...",
];
let FLAGS = ["ctf{capture-the-flag}", "ctf{the-second-flag}", "ctf{augusta-ada-king}", "ctf{blink}", "ctf{binary}", "ctf{caesar}", "ctf{I-came-I-saw-I-conquered}"];


let HINTS = [
    "Copy and paste the highlighted flag.",
    "The flag is in the downloaded text file.",
    "She was Countess of Lovelace, but what was her real full name?",
    "Keeping your opponent’s flag from them is not an option as it will be an instant fail.",
    "Please, you don't need a clue for this.",
    "Inspect the page source. The flag is hidden there.",
    "Caesar said:"
];

let AGENT = ["Hello, this is Agent Grey from the Cybersecurity Task Force. Well done on solving the initial challenges. We need your help on a high-priority mission.",
            "We’d like you to look into a website called 'The Cauldron'. It appears to be an online store selling rare magical items like potions and relics, but authorities suspect the site launders money and scams users. We'd like you to investigate this site, gather evidence, and expose its illegal activities.",
            "We know that the login system might be susceptible to SQL injection, and there’s an outdated encryption library. Expect firewalls, intrusion detection, and obfuscated code.",
            "Failure is not an option and time is critical. Act swiftly to prevent further damage and gather intel to dismantle their network. Good luck!"
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
        document.getElementById("dialogBox").style.display = "none";
        document.getElementById("redirect").style.display = "block";
    }
}


function displayInstruction() {
    if (index < INSTRUCTIONS.length) {
        document.getElementById("instruction").innerHTML = highlightCTF(INSTRUCTIONS[index]);
        document.getElementById("stage-title").innerHTML = TITLES[index];
        document.getElementById("hint").innerHTML = HINTS[index];
        if (TITLES[index] === "2. Downloadable challenges") { // Show download link
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

function openWebsite(){
    document.getElementById("redirect").style.display = "none";
    document.getElementById("phoneCall").style.display = "none"
    window.open("login.html", '_blank');
    document.getElementById("contentContainer").style.display = "block";
    INSTRUCTIONS.push(
        "It seems that we cannot view any of the website's content without authentication. However, we know that there is an SQL injection vulnerability that will enable us to bypass authentication?",
        "You've bypassed login. Now, gain admin access by stealing the admin's session cookie using <a href='https://portswigger.net/web-security/cross-site-scripting/exploiting/lab-stealing-cookies' target='_blank'>Cross-Site Scripting (XSS)</a>."
    );
    TITLES.push("8. Bypassing Authentication","9. Steal the Admin Cookie");
    HINTS = ["The statement used for authenication is &quotSELECT * from users where user='username' AND password = 'password'&quot",
        "Post your cookie stealing script as a product review. When you view the page, the browser will execute your comment as a script"
    ];
    FLAGS.push("ctf{}","ctf{}");
    displayInstruction();
    submitBtn.onclick = submitFlag;
    phoneCall.onclick = showDialog;
}

function attemptLogin() {
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var normalisedPassword = password.replace(/\s+/g, '');

    // Simulate SQL injection check ignoring spaces
    if (normalisedPassword === "'OR1=1--") {
        // Authentication successful
        document.getElementById("loginMessage").innerHTML = "Login successful. Redirecting...";
        setTimeout(function() {
            window.location.href = "home.html"; // Redirect to dashboard page
        }, 500); // 0.5 second delay for demonstration purposes
    } else {
        // Authentication failed
        document.getElementById("loginMessage").innerHTML = "Invalid credentials. Please try again.";
    }
}
