

export function getAllClients() {
    return fetch('/trainer/api/get-all-clients/', {
        method: 'GET'
    }).then(response => response.json())
        .then(data => data)
        .catch(error => error);
}
