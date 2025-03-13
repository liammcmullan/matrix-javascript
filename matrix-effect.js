// Matrix effect settings
const settings = {
  fontSize: 16,
  columns: 0,
  rows: 0,
  characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+",
  speed: 50,
  fadeSpeed: 0.05
};

// Initialize matrix effect
function initMatrix() {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  // Set canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Calculate columns and rows
  settings.columns = Math.floor(canvas.width / settings.fontSize);
  settings.rows = Math.floor(canvas.height / settings.fontSize);

  // Create drops array
  const drops = new Array(settings.columns).fill(0);

  // Draw function
  function draw() {
    // Set background with slight transparency
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Set text style
    ctx.fillStyle = '#0F0';
    ctx.font = `${settings.fontSize}px monospace`;

    // Draw characters
    for (let i = 0; i < drops.length; i++) {
      const text = settings.characters.charAt(
        Math.floor(Math.random() * settings.characters.length)
      );
      
      // Draw character
      ctx.fillText(text, i * settings.fontSize, drops[i] * settings.fontSize);
      
      // Reset drop if it reaches bottom
      if (drops[i] * settings.fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      
      // Move drop down
      drops[i]++;
    }
  }

  // Start animation loop
  setInterval(draw, settings.speed);
}

// Start effect when DOM is ready
document.addEventListener('DOMContentLoaded', initMatrix);

// Handle window resize
window.addEventListener('resize', () => {
  const canvas = document.querySelector('canvas');
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});
