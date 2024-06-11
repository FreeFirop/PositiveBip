document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Predefined email and password
    const correctEmail = 'user@example.com';
    const correctPassword = 'password123';
    
    // Get user input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Error message element
    const errorMessage = document.getElementById('errorMessage');
    
    // Validate email and password
    if (email === correctEmail && password === correctPassword) {
        alert('Login successful!');
        // You can redirect to another page or perform other actions here
    } else {
        errorMessage.textContent = 'Invalid email or password';
    }
});
