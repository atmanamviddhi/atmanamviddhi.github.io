async function loadComponents() {
  // Load single-instance components
  const singleComponents = [
    { url: '../assets/support.html', id: 'support-container' },
    { url: '../assets/footer.html', id: 'footer-container' }
  ];

  for (const component of singleComponents) {
    const response = await fetch(component.url);
    const html = await response.text();
    const element = document.getElementById(component.id);
    if (element) element.innerHTML = html;
  }
  
  // Handle the ads containers with class selector
  try {
    const adResponse = await fetch('../assets/ads-card.html');
    const adHtml = await adResponse.text();
    
    const adContainers = document.querySelectorAll('.ads-container');
    adContainers.forEach(container => {
      container.innerHTML = adHtml;
    });
  } catch (error) {
    console.error('Failed to load ads:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadComponents);
