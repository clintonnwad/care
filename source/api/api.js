import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const baseUrl = 'http://127.0.0.1:5000';

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

    console.log(await getValueFor("token"));

    return response.data.token;
}

export async function isLoggedIn() {
    return await getValueFor("token") !== undefined
}