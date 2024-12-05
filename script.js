document.getElementById('welcomeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh
    const name = document.getElementById('nameInput').value;
    const message = `Welcome, ${name}!`;
    document.getElementById('welcomeMessage').textContent = message;
});
