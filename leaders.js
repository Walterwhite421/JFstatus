// JavaScript code for updating player details
document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch player details from the server and update the blank box
    function updatePlayerDetails() {
        // Make an AJAX request to fetch player details from your server
        fetch('http://remote-machine-ip:3000/player-details') // Replace 'http://remote-machine-ip:3000/player-details' with the actual URL of your server endpoint
            .then(response => response.json())
            .then(data => {
                // Update player details in the HTML
                document.getElementById('playerDetails').innerHTML = `
                    <p>Player Level: ${data.playerLevel}</p>
                    <p>Kills: ${data.kills}</p>
                    <p>Pals Caught: ${data.palsCaught}</p>
                    <p>Deaths: ${data.deaths}</p>
                    <p>Money Earned: ${data.moneyEarned}</p>
                    <p>Most Pals Caught: ${data.mostPalsCaught}</p>
                `;
            })
            .catch(error => console.error('Error fetching player details:', error));
    }

    // Call the function initially to load player details
    updatePlayerDetails();

    // You can call this function periodically to update player details
    setInterval(updatePlayerDetails, 5000); // Example: Update every 5 seconds
});

