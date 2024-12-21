document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Website Loaded");
});
fetch('https://your-backend-service.onrender.com/submit-query', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
});
