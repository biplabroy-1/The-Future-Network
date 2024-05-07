

function submitForm() {
    var formData = {
        name: document.getElementById('name').value,
        message: document.getElementById('message').value
    };

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:1234/api/save', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('response').innerHTML = 'Message sent successfully';
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            document.getElementById('response').innerHTML = 'Error sending message';
        }
    };
    xhr.send(JSON.stringify(formData));
}