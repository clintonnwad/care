import axios from 'axios';
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

export async function getActivities() {
    let headers = await getHeaders();

    console.log(token);
    let response = await axios.get(`${baseUrl}/users/me/activities`, { headers })

    return response.data;
}

async function getHeaders() {
    return {
        'Authorization': 'Bearer ' + await getValueFor("token"),
    };
} 