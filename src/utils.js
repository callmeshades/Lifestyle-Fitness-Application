

export function checkUserSession() {
    return fetch('/accounts/api-check-user-session/', {
        method: 'GET'
    }).then(response => response.json())
    .then(data => data)
    .catch(error => error);
}

export function checkUserGroup() {
    return fetch('/accounts/user-group-check/', { method: 'GET' })
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);
}

export function checkTrainerGroup() {
    return fetch('/accounts/trainer-group-check/', { method: 'GET' })
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);
}

export function getUserDetails() {
    return fetch('/accounts/api-fetch-user-data', { method: 'GET' })
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);
}

export function closeUserSession() {
    return fetch('/accounts/api-logout', {
        method: 'GET'
    }).then(response => response.json())
    .then(data => data)
    .catch(error => error);
}


export function addNewExercise(exerciseDetails) {
    return fetch('/trainer/api/add-exercise/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(exerciseDetails)
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);
}


export function getAllExercises() {
    return fetch('/trainer/api/get-exercises/', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);
}


export function parseExerciseBlob(exercises) {
    let temp_exercise_list = [];
    exercises.forEach((item) => {
        temp_exercise_list.push({
            id: item.id,
            name: item.name,
            blob: JSON.parse(item.blob)
        })
    })
    return temp_exercise_list;
}

