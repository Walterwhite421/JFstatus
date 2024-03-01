function updatePlayerDetails() {
    // Make an AJAX request to fetch player details from the server
    fetch('http://remote-machine-ip:3000/player-details')
        .then(response => response.json())
        .then(data => {
            // Generate HTML content for player details
            let htmlContent = `
                <p>Player Level: ${data.playerLevel}</p>
                <p>Kills: ${data.kills}</p>
                <p>Pals Caught: ${data.palsCaught}</p>
                <p>Deaths: ${data.deaths}</p>
                <p>Money Earned: ${data.moneyEarned}</p>
                <p>Most Pals Caught: ${data.mostPalsCaught}</p>
            `;

            // Append the HTML content to the .blankBox container
            document.querySelector('.blankBox').innerHTML = htmlContent;
        })
        .catch(error => console.error('Error fetching player details:', error));
}

// Call the function initially to load player details
updatePlayerDetails();

// Call the function periodically to update player details
setInterval(updatePlayerDetails, 5000); // Example: Update every 5 seconds
