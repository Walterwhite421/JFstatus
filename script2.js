// script.js
function checkServer() {
    var url = "http://192.168.1.15:8096";
    var statusElement = document.getElementById("status");

    fetch(url, { 
        redirect: 'follow',
        mode: 'no-cors' // Set request mode to 'no-cors'
    }) 
    .then(response => {
        if (response.ok || response.type === 'opaqueredirect') { 
            statusElement.textContent = "Up";
            statusElement.className = "status up";
        } else {
            statusElement.textContent = "Down";
            statusElement.className = "status down";
        }
    })
    .catch(error => {
        statusElement.textContent = "Down";
        statusElement.className = "status down";
    });
}

// Check server status on page load
checkServer();

// Check server status every 10 seconds
setInterval(checkServer, 10000);

