

export function getAllPrograms() {
    return fetch('/trainer/api/get-programs/', {
        method: 'GET'
    }).then(response => response.json())
    .then(data => data)
    .catch(error => error);
}


export function addNewProgram(programDetails) {
    return fetch('/trainer/api/add-program/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(programDetails)
    }).then(response => response.json())
    .then(data => data)
    .catch(error => error);
}
