// script.js
function checkServer() {
    // Check system status
    var systemUrl = "/"; // Replace this with the actual IP address of your Windows 11 server
    var systemStatusElement = document.getElementById("system-status");

    fetch(systemUrl)
    .then(response => {
        if (response.ok) {
            systemStatusElement.textContent = "Up";
            systemStatusElement.className = "status up";
        } else {
            systemStatusElement.textContent = "Down";
            systemStatusElement.className = "status down";
        }
    })
    .catch(error => {
        systemStatusElement.textContent = "Down";
        systemStatusElement.className = "status down";
    });

    // Check Jellyfin status
    var jellyfinUrl = "http://billybeane.duckdns.org:8096/System/Ping"; // Assuming this is the URL for Jellyfin status
    var jellyfinStatusElement = document.getElementById("jellyfin-status");

    fetch(jellyfinUrl)
    .then(response => {
        if (response.ok) {
            jellyfinStatusElement.textContent = "Up";
            jellyfinStatusElement.className = "status up";
        } else {
            jellyfinStatusElement.textContent = "Down";
            jellyfinStatusElement.className = "status down";
        }
    })
    .catch(error => {
        jellyfinStatusElement.textContent = "Down";
        jellyfinStatusElement.className = "status down";
    });

    // Check PalWorld status
    var palworldUrl = "http://methpals.duckdns.org:8211"; // Assuming this is the URL for PalWorld status
    var PalworldStatusElement = document.getElementById("palworld-status");

    fetch(palworldUrl)
    .then(response => {
        if (response.ok) {
            palworldStatusElement.textContent = "Up";
            palworldStatusElement.className = "status up";
        } else {
            palworldStatusElement.textContent = "Down";
            palworldStatusElement.className = "status down";
        }
    })
    .catch(error => {
        palworldStatusElement.textContent = "Down";
        palworldStatusElement.className = "status down";
    });

    // Set a timeout to handle cases where the server doesn't respond
    setTimeout(() => {
        if (systemStatusElement.textContent === "Checking...") {
            systemStatusElement.textContent = "Down";
            systemStatusElement.className = "status down";
        }
        if (jellyfinStatusElement.textContent === "Checking...") {
            jellyfinStatusElement.textContent = "Down";
            jellyfinStatusElement.className = "status down";
        }
    }, 1000); // Adjust this timeout value as needed
}


// Check server status on page load
checkServer();

// Check server status every second
setInterval(checkServer, 1000);

