

export function updatePassword(password) {
    return fetch('/accounts/api-first-login-update-password/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);
}
