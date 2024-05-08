function sendFormData(formData) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:1234/api/save', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById('response').innerHTML = `<p class="text-green-600">Thanks For Contacting Us 💖</p>`;
            } else {
                document.getElementById('response').innerHTML = `<p class="text-red-600">Error sending message</p>`;
            }
        }
    };
    xhr.send(JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', function () {
    var sendMessageBtn = document.getElementById('sendMessageBtn');
    sendMessageBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default form submission

        var formData = {
            first_name: document.querySelector('input[name="first_name"]').value,
            last_name: document.querySelector('input[name="last_name"]').value,
            email: document.querySelector('input[name="email"]').value,
            phone: document.querySelector('input[name="phone"]').value,
            message: document.querySelector('textarea[name="message"]').value
        };
        console.log(formData);

        sendFormData(formData);
    });
});
