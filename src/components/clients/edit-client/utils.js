
export function getClientById(userId) {
    return fetch('/trainer/api/get-client-by-id/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({clientId: userId})
    }).then(response => response.json())
        .then(data => data)
        .catch(error => error);
}


export function getAllPrograms() {
    return fetch('/trainer/api/get-programs/', {
        method: 'GET'
    }).then(response => response.json())
        .then(data => data)
        .catch(error => error);
}


export function assignNewProgram(userId, programId, duration) {
    return fetch('/trainer/api/assign-program/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, programId, duration })
    }).then(response => response.json())
        .then(data => data)
        .catch(error => error);
}
