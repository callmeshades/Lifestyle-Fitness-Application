
export function postLoginData(username, password, token) {
    return fetch('/accounts/api-login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-CSRFToken': token },
        body: JSON.stringify({username: username, password: password})
    }).then(response => response.json())
    .then(data => data)
    .catch(error => error);
}

export function fetchLoginToken() {
    return fetch('/accounts/api-fetch-session-details/', {
        method: 'GET'
    }).then(response => response.json())
    .then(data => data)
    .catch(error => error);
}
