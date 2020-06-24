
export function getClientById(userId) {
    return fetch('/trainer/api/get-client-by-id/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({clientId: userId})
    }).then(response => response.json())
        .then(data => data)
        .catch(error => error);
}
