document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = this.username.value;
    const password = this.password.value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'admin' && password === 'admin') {
        alert('Bienvenido, admin!');
        window.location.href = 'index.html';
    } else if (username === 'user' && password === 'user') {
        alert('Bienvenido, user!');
        window.location.href = 'index.html';
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos.';
    }
});
