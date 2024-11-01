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

function updateMetaTags(description, url) {
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Update Open Graph description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
    }
    ogDescription.content = description;

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = url;

    // Update Open Graph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrl);
    }
    ogUrl.content = url;

    // Optionally update Twitter description if needed
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
        twitterDescription = document.createElement('meta');
        twitterDescription.name = 'twitter:description';
        document.head.appendChild(twitterDescription);
    }
    twitterDescription.content = description;

    // Update Open Graph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
    }
    ogTitle.content = "Wisdom Whisperer";

    // Update Twitter title
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
        twitterTitle = document.createElement('meta');
        twitterTitle.name = 'twitter:title';
        document.head.appendChild(twitterTitle);
    }
    twitterTitle.content = "Wisdom Whisperer";
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

    // Update meta description and canonical URL
    updateMetaTags(text, getShareableUrl());
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
    const subscribeButton = document.getElementById('subscribeButton');

    newQuoteButton.addEventListener('click', getRandomExcerpt);
    shareButton.addEventListener('click', () => {
        navigator.clipboard.writeText(getShareableUrl());
        showToast('Link copied to clipboard!');
    });

    // Check if user is subscribed and update button state
    if (localStorage.getItem('isSubscribed')) {
        updateButtonState(true);
        scheduleDailyNotification();
    } else {
        updateButtonState(false);
    }

    // Subscribe button click event
    subscribeButton.addEventListener('click', async () => {
        if (!localStorage.getItem('isSubscribed')) {
            const subscribed = await requestNotificationPermission();
            if (subscribed) {
                localStorage.setItem('isSubscribed', 'true');
                updateButtonState(true);
                scheduleDailyNotification();
            }
        }
    });

    // Load appropriate excerpt on page load
    const { file, index } = getExcerptFromUrl();
    if (file && index !== null) {
        await loadSpecificExcerpt(file, parseInt(index));
    } else {
        await getRandomExcerpt();
    }
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

    setTimeout(() => toast.style.opacity = '1', 10);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 2000);
}

function updateButtonState(isSubscribed) {
    const subscribeButton = document.getElementById('subscribeButton');
    const icon = subscribeButton.querySelector('.icon');
    
    if (isSubscribed) {
        subscribeButton.textContent = "Daily Wisdom @ 9AM";
        subscribeButton.prepend(icon);
        subscribeButton.classList.add('inactive');
        subscribeButton.disabled = true;
    } else {
        subscribeButton.textContent = "Wisdom Notifications";
        subscribeButton.prepend(icon);
        subscribeButton.classList.remove('inactive');
        subscribeButton.disabled = false;
    }
}


async function requestNotificationPermission() {
    try {
        const permission = await Notification.requestPermission();
        return permission === 'granted';
    } catch (error) {
        console.error("Notification permission error:", error);
        return false;
    }
}

function scheduleDailyNotification() {
    const now = new Date();
    let next3PM = new Date();
    next3PM.setHours(15, 0, 0, 0);  // Set to 3:00:00 PM

    // If 3 PM has already passed today, schedule for the next day
    if (now > next3PM) {
        next3PM.setDate(next3PM.getDate() + 1);
    }

    const timeUntilNext3PM = next3PM - now;

    // Set a timeout to send the first notification at the next 3 PM
    setTimeout(() => {
        sendDailyNotification();
        // Set an interval to repeat every 24 hours
        setInterval(sendDailyNotification, 24 * 60 * 60 * 1000);
    }, timeUntilNext3PM);
}

function sendDailyNotification() {
    if (Notification.permission === 'granted') {
        const notification = new Notification("Today's Wisdom Awaits", {
            // You can add an icon if you have one
            // icon: '/path-to-icon.png',
            data: {
                url: window.location.href  // Set the URL to your website
            }
        });

        // Add click event to the notification
        notification.onclick = function(event) {
            event.preventDefault(); // Prevent the default behavior
            window.open(notification.data.url, '_blank'); // Open the website in a new tab
        };
    } else {
        console.warn("Notifications are not enabled or permission was denied.");
    }
}

