// Fetch data from the Chicago Art Institute API


async function artWorkDisplay(){
    url='https://api.artic.edu/api/v1/artworks'

    try{
        const response=await fetch(url)

        const data=await response.json()

        // Process the API response data and display it on the website
        const gallery = document.getElementById('gallery');
        data.data.forEach(artwork => {
            console.log(artwork)
            // Create HTML elements to display artwork information
            const artworkElement = document.createElement('div');
            artworkElement.classList.add('artwork');
            artworkElement.innerHTML = `
                <img src="https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg" alt="${artwork.title}">
                <h2>${artwork.title}</h2>
                <p>Artist: ${artwork.artist_display}</p>
                <p>Description: ${artwork.description}</p>
                <p> Date of this work: ${artwork.date_display} </p>
                <p> Place of origin: ${artwork.place_of_origin}</p>
            `;
            // Add click event listener to display more details about the artwork
            artworkElement.addEventListener('click', () => {
                // Implement your code to display more details about the artwork
                alert(`More details about ${artwork.title}`);
            });
            // Append the artwork element to the gallery
            gallery.appendChild(artworkElement);
        });
    }
    

    catch(error){
        console.error('Error fetching data', error);
    };
    }

artWorkDisplay()