
const blank_program = {
    name: '',
    description: '',
    requiresGym: false,
    requiresEquipment: false,
    modules: [],
    notes: []
}

export function getAllPrograms() {
    return fetch('/trainer/api/get-programs/', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);
}


export function createBlankProgram() {
    return fetch('/trainer/api/add-program/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blank_program)
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);
}

export function getProgramDetails(programID) {
    return fetch('/trainer/api/get-program-by-id/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({programID: programID})
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);
}

export function updateProgram(programID, programDetails) {
    return fetch('/trainer/api/update-program/', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({programID: programID, programDetails: programDetails})
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);
}

export function deleteProgram(programID) {
    return fetch('/trainer/api/delete-program/', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ program_id: programID })
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);
}
