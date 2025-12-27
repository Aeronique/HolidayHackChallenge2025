document.addEventListener('DOMContentLoaded', function() {
  // Only run snowflakes on the welcome/index page
  const isIndexPage = window.location.pathname === '/' || 
                      window.location.pathname.endsWith('/index.html') ||
                      window.location.pathname.endsWith('/');
  
  if (!isIndexPage) {
    return; // Exit if not on index page
  }
  
  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    
    // Random horizontal position (full width)
    const startX = Math.random() * window.innerWidth;
    snowflake.style.left = startX + 'px';
    
    // Start above the viewport
    snowflake.style.top = '-20px';
    
    // Random size
    const size = Math.random() * 1.5 + 0.5;
    snowflake.style.fontSize = size + 'em';
    
    // Random opacity
    snowflake.style.opacity = Math.random() * 0.5 + 0.5;
    
    // Winter colors
    const colors = ['#fff', '#e8f4f8', '#00d4ff'];
    snowflake.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.appendChild(snowflake);
    
    // Animate falling
    const duration = Math.random() * 10000 + 8000; // 8-18 seconds
    const startTime = Date.now();
    
    function fall() {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / duration;
      
      if (progress < 1) {
        const currentY = progress * (window.innerHeight + 100);
        snowflake.style.top = currentY + 'px';
        
        // Add slight horizontal drift
        const drift = Math.sin(progress * Math.PI * 2) * 50;
        snowflake.style.left = (startX + drift) + 'px';
        
        requestAnimationFrame(fall);
      } else {
        snowflake.remove();
      }
    }
    
    requestAnimationFrame(fall);
  }
  
  // Create initial snowflakes
  for (let i = 0; i < 30; i++) {
    setTimeout(() => createSnowflake(), Math.random() * 5000);
  }
  
  // Continuously add new snowflakes
  setInterval(createSnowflake, 500);
});
