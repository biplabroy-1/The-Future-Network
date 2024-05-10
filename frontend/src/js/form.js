document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    var formData = new FormData(this); // Create a FormData object from the form

    // Send the form data using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.action);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function () {
        // Handle the response from the server
        console.log(xhr.responseText);
    };
    xhr.send(new URLSearchParams(formData));
    console.log("hello"); // Send the form data as URL-encoded string
});