/*
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("item1").addEventListener("click", function() {
        alert("Not this item");
    });
    
    document.getElementById("item2").addEventListener("click", function() {
        alert("Not this item");
    });

    document.getElementById("item3").addEventListener("click", function() {
        window.location.href = "product-detail.html";
    });
});
*/

// Step 1: Define a placeholder for the payload
let userPayload = '';

// Step 2: Handle review submission
document.getElementById("reviewForm").onsubmit = function (e) {
    e.preventDefault();
    let review = document.getElementById("reviewInput").value;
    let reviewsDiv = document.getElementById("reviews");

    // Sanitize and inject the review into the reviews section
    let reviewDiv = document.createElement("div");
    reviewDiv.className = "review";
    reviewDiv.innerText = review; // Using innerText to prevent actual script execution
    reviewsDiv.appendChild(reviewDiv);

    // Check if review contains the placeholder for the payload
    if (review.includes('<script>')) {
        userPayload = review.match(/<script>(.*?)<\/script>/)[1]; // Extract user script
    }

    // Reset the review form
    document.getElementById("reviewInput").value = '';
};

// Step 3: Simulate admin viewing the review and the cookie being stolen
function simulateAdminView() {
    let reviewsDiv = document.getElementById("reviews");
    let simulatedReview = `<script>${userPayload}</script>`;
    reviewsDiv.innerHTML += simulatedReview;

    // Simulate cookie being sent to attacker's server
    setTimeout(() => {
        if (userPayload.includes('document.cookie')) {
            let stolenCookie = document.cookie;
            console.log("Stolen Cookie:", stolenCookie);
            document.getElementById("console").innerText = "Stolen Cookie: " + stolenCookie;
        }
    }, 2000); // Simulate delay for admin to view the review
}

// Simulate admin viewing the page after a delay
setTimeout(simulateAdminView, 5000); // Admin views the page after 5 seconds