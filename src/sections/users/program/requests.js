

export function getUserAssignment() {
    return fetch('/user/get-user-assignment/', { method: 'GET' })
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);
}

export function saveUserAssignment(assignment) {
    return fetch('/user/update-user-assignment/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ assignment })
    }).then(response => response.json())
        .then(data => data)
        .catch(error => error);
}

