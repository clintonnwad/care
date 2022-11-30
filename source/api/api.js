import axios, { Axios } from 'axios';
import * as SecureStore from 'expo-secure-store';

const baseUrl = 'http://127.0.0.1:5000';

let token;

async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        return result;
    } else {
        return undefined;
    }
}

export async function login(email, password) {
    let response = await axios.post(`${baseUrl}/users/login`, { email: email, password: password })

    await save("token", response.data.token);
    await getValueFor("token");

    // console.log(await getValueFor("token"));

    token = response.data.token;

    return response.data.token;
}

export async function isLoggedIn() {
    return await getValueFor("token") !== undefined
}

// Function handling getActivities on the app home screen
export async function getActivities() {
    let headers = await getHeaders();

    // console.log(token);
    let response = await axios.get(`${baseUrl}/users/me/activities`, { headers })

    return response.data.reverse();
}

async function getHeaders() {
    return {
        'Authorization': 'Bearer ' + await getValueFor("token"),
    };
}

export async function getUserDetails() {
    let headers = await getHeaders();

    // console.log(token);
    let response = await axios.get(`${baseUrl}/users/me`, { headers })

    return response.data;
}

export async function addPatient(firstname, lastname, gender, dob, allergies, conditions) {
    let headers = await getHeaders();
    let response = await axios.post(`${baseUrl}/patients`, {
        firstname: firstname,
        lastname: lastname,
        gender: gender,
        dob: dob + "T17:08:13.930Z",
        allergies: allergies,
        conditions: conditions
    }, { headers: headers })

    // console.log(response)

    return response.data;
}

// Function handling getActivities on the app home screen
export async function getAllPatients() {
    let headers = await getHeaders();

    let response = await axios.get(`${baseUrl}/patients`, { headers })

    return response.data.reverse();
}

export async function getPatientByName(query) {
    let headers = await getHeaders();

    // console.log(token);
    let response = await axios.get(`${baseUrl}/patients?query=${query}`, { headers })

    return response.data;
}


export async function addTestResult(residentID, systolic_pressure, diastolic_pressure, heartbeat, respiratory_rate, blood_oxygen, notes) {
    let headers = await getHeaders();
    let response = await axios.post(`${baseUrl}/patients/${residentID}/tests`, {
        systolic_pressure: systolic_pressure,
        diastolic_pressure: diastolic_pressure,
        heartbeat: heartbeat,
        respiratory_rate: respiratory_rate,
        blood_oxygen: blood_oxygen,
        notes: notes
    }, { headers: headers })

    console.log(response)

    return response.data;
}

export async function getPatientDetails(residentID) {
    let headers = await getHeaders();

    // console.log(token);
    let response = await axios.get(`${baseUrl}/127.0.0.1:5000/patients/${residentID}`, { headers })

    return response.data;
}