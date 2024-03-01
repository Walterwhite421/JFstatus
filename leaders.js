function updatePlayerDetails() {
    // Make an AJAX request to fetch player details from the server
    fetch('192.168.1.15/palleaders')
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

            // Create a new div element to hold the HTML content
            let playerDetailsDiv = document.createElement('div');
            playerDetailsDiv.innerHTML = htmlContent;

            // Find the blankBox element
            let blankBox = document.querySelector('.blankBox');
            // Find the <h2>Player Details</h2> element
            let playerDetailsHeading = blankBox.querySelector('h2');

            // Insert the player details div after the <h2>Player Details</h2> element
            blankBox.insertBefore(playerDetailsDiv, playerDetailsHeading.nextElementSibling);
        })
        .catch(error => console.error('Error fetching player details:', error));
}

// Call the function initially to load player details
updatePlayerDetails();

// Call the function periodically to update player details
setInterval(updatePlayerDetails, 5000); // Example: Update every 5 seconds
