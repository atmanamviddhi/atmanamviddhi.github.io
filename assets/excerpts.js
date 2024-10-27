// Function to fetch and parse a random excerpt file
async function getRandomExcerpt() {
    try {
        const response = await fetch('/excerpts/files.json');
        const files = await response.json();
        const randomFile = files[Math.floor(Math.random() * files.length)];
        const excerptResponse = await fetch(`/excerpts/${randomFile}`);
        const excerptData = await excerptResponse.json();
        
        // Get random excerpt and include file metadata
        const randomExcerpt = excerptData.excerpts[Math.floor(Math.random() * excerptData.excerpts.length)];
        randomExcerpt.metadata = excerptData.metadata;
        
        displayExcerpt(randomExcerpt);
    } catch (error) {
        console.log('Error loading excerpt:', error);
    }
}

function displayExcerpt(excerpt) {
    document.getElementById('quote-text').innerHTML = excerpt.text;
    // Create book title with Amazon link
    const bookTitle = `~ ${excerpt.metadata.title} <span style="font-size: 1.2rem;"><a href="${excerpt.metadata.amazonLink}" target="_blank">Buy on Amazon</a></span>`;
    document.getElementById('book-title').innerHTML = bookTitle;
    
    // Hide the separate Amazon button since it's now inline
    document.getElementById('book-link').style.display = 'none';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const newQuoteButton = document.getElementById('new-quote');
    newQuoteButton.addEventListener('click', getRandomExcerpt);
    
    // Display first random excerpt on page load
    getRandomExcerpt();
});
