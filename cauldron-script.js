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
