// Function to fetch and parse a random excerpt file
let currentFile = null;
let currentIndex = null;

async function getRandomExcerpt() {
    try {
        const response = await fetch('/excerpts/files.json');
        const files = await response.json();
        const randomFile = files[Math.floor(Math.random() * files.length)];
        const excerptResponse = await fetch(`/excerpts/${randomFile}`);
        const excerptData = await excerptResponse.json();
        
        // Get random excerpt and include file metadata
        const randomIndex = Math.floor(Math.random() * excerptData.excerpts.length);
        const randomExcerpt = excerptData.excerpts[randomIndex];
        randomExcerpt.metadata = excerptData.metadata;
        
        // Store current file and index without showing in URL
        currentFile = randomFile;
        currentIndex = randomIndex;
        
        displayExcerpt(randomExcerpt);
        // Remove parameters from URL when showing random quote
        window.history.pushState({}, '', window.location.pathname);
    } catch (error) {
        console.log('Error loading excerpt:', error);
    }
}

function displayExcerpt(excerpt) {
    const text = excerpt.text.includes('\n') ? excerpt.text.replace(/\n/g, '<br>') : excerpt.text;
    document.getElementById('quote-text').style.fontStyle = 'normal';
    document.getElementById('quote-text').innerHTML = excerpt.text;
    
    // Create book title
    const bookTitle = `<i>~ ${excerpt.metadata.title}</i>`;
    document.getElementById('book-title').innerHTML = bookTitle;

    // Show Amazon button only if link exists
    const amazonButton = document.getElementById('book-link');
    if (excerpt.metadata.amazonLink && excerpt.metadata.amazonLink.trim() !== '') {
        amazonButton.style.display = 'inline-block';
        amazonButton.href = excerpt.metadata.amazonLink;
    } else {
        amazonButton.style.display = 'none';
    }

    // Generate quote image URL
    const imageUrl = `/api/generate-quote-image?text=${encodeURIComponent(excerpt.text)}&title=${encodeURIComponent(excerpt.metadata.title)}`;

    // Update OG tags
    document.getElementById('og-description').content = excerpt.text;
    document.getElementById('og-url').content = window.location.href;
    document.getElementById('og-image').content = imageUrl;
}
function getExcerptFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        file: urlParams.get('file'),
        index: urlParams.get('index')
    };
}

function getShareableUrl() {
    const url = new URL(window.location);
    url.searchParams.set('file', currentFile);
    url.searchParams.set('index', currentIndex);
    return url.toString();
}

async function loadSpecificExcerpt(filename, index) {
    try {
        const excerptResponse = await fetch(`/excerpts/${filename}`);
        const excerptData = await excerptResponse.json();
        const excerpt = excerptData.excerpts[index];
        excerpt.metadata = excerptData.metadata;
        
        displayExcerpt(excerpt);
    } catch (error) {
        console.log('Error loading specific excerpt:', error);
        getRandomExcerpt(); // Fallback to random if specific excerpt not found
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', async () => {
    const newQuoteButton = document.getElementById('new-quote');
    const shareButton = document.getElementById('share-quote');
    
    newQuoteButton.addEventListener('click', getRandomExcerpt);
    shareButton.addEventListener('click', () => {
        navigator.clipboard.writeText(getShareableUrl());
        showToast('Link copied to clipboard!');
    });

function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #333;
        color: white;
        padding: 12px 24px;
        border-radius: 4px;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    `;
    document.body.appendChild(toast);
    
    // Fade in
    setTimeout(() => toast.style.opacity = '1', 10);
    
    // Remove after 2 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 2000);
}    
    // Check URL parameters and load appropriate excerpt
    const {file, index} = getExcerptFromUrl();
    if (file && index !== null) {
        await loadSpecificExcerpt(file, parseInt(index));
    } else {
        await getRandomExcerpt();
    }
});
