document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mobile = document.getElementById('mobile').value;

    const userInfo = {
        email,
        mobile
    };

    // For demonstration purposes, using localStorage to simulate authentication.
    // In a real application, you would verify the credentials on the server-side.
    if (email === 'user@example.com' && password === 'password' && mobile === '1234567890') {
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        window.location.href = 'account.html';
    } else {
        alert('Invalid credentials');
    }
});
