document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // You can replace these hardcoded values with actual login validation logic
    const hardcodedEmail = 'test@example.com';
    const hardcodedPassword = 'testpassword';

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email === hardcodedEmail && password === hardcodedPassword) {
        // Redirect to the home page upon successful login
        window.location.href = '../../../index.html';
    } else {
        alert('Invalid email or password.');
    }
});
