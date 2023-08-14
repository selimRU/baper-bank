document.getElementById('btn-sub').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passField = document.getElementById('user-pass');
    const password = passField.value;
    if (email === 'saihan@gmail.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        return alert('go to hell');
    }
})
