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
    const text = excerpt.text.includes('\n') ? excerpt.text.replace(/\n/g, '<br>') : excerpt.text;
    document.getElementById('quote-text').innerHTML = excerpt.text;
    // Create book title with Amazon link
    const bookTitle = `~ ${excerpt.metadata.title}`;
    document.getElementById('book-title').innerHTML = bookTitle;

    // Show Amazon button only if link exists
    const amazonButton = document.getElementById('book-link');
    if (excerpt.metadata.amazonLink && excerpt.metadata.amazonLink.trim() !== '') {
        amazonButton.style.display = 'inline-block';
        amazonButton.href = excerpt.metadata.amazonLink;
    } else {
        amazonButton.style.display = 'none';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const newQuoteButton = document.getElementById('new-quote');
    newQuoteButton.addEventListener('click', getRandomExcerpt);
    
    // Display first random excerpt on page load
    getRandomExcerpt();
});
