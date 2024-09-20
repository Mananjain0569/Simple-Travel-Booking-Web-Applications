document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const popup = document.getElementById("popup");
    const closeButton = popup.querySelector(".close");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Show the popup
        popup.style.display = "block";

        // Optionally, you can redirect the user to a thank you page
        // or display a success message.
        // For example:
        // window.location.href = "thankyou.html";
    });

    closeButton.addEventListener("click", function() {
        // Close the popup when the close button is clicked
        popup.style.display = "none";
    });
});