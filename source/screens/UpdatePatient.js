import { StackActions } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { React, useEffect, useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { updatePatient } from '../api/api';
import AppButton from '../components/AppButton';
import AppDropdown from '../components/AppDropdown';
import { AppTextInput } from '../components/AppInputField';
import { calcNumYears, stringifyDate, stringifyDateLong } from '../components/MomentStringify';

function UpdatePatient(props) {
    const route = useRoute();
    const patient = route.params.response;
    const residentID = patient._id;

    // For dropdown data
    const genderData = [
        { key: 'Male', value: 'Male' },
        { key: 'Female', value: 'Female' },
        { key: 'Others', value: 'Others' },
    ];

    const [selectedDate, setSelectedDate] = useState();

    let [firstname, setFirstname] = useState(patient.first_name);
    let [lastname, setLastname] = useState('');
    // let [gender, setGender] = useState("");
    let gender = "Male";
    let [dob, setDOB] = useState('');
    let [allergies, setAllergies] = useState('');
    let [conditions, setConditions] = useState('');


    let updatePatientRecord = (e) => {
        if (!firstname || !lastname || !gender || !dob || !allergies || !conditions) {
            Alert.alert("Incomplete data supplied", "You need to enter data for all fields. All fields are required");
        }
        else {
            // Call the addPatient function and pass values into it
            updatePatient(firstname, lastname, gender, dob, allergies, conditions)
                .then(
                    (result) => {
                        Alert.alert("Successful", "Patient Details sucessfully");
                        props.navigation.navigate("AppHome");
                    }
                )
                .catch(function (error) {
                    if (error.response) {
                        Alert.alert(
                            "System Error",
                            "Unable to fetch data. Error Details: \n" +
                            error.response.data + "\n\n" +
                            error.response.status + "\n\n" +
                            error.response.headers + "\n\n"
                        );
                    } else if (error.request) {
                        Alert.alert(
                            "System Error",
                            "Error requesting data. Error Details: \n" + error.request
                        );
                    } else {
                        Alert.alert(
                            "System Error",
                            "Error getting data. Error Details: \n" + error.message
                        );
                    }
                });
        }

    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.uploadAvatarView}>
                <TouchableOpacity>
                    <Image
                        source={require("../assets/upload-avatar.png")}
                        style={styles.uploadAvatar}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <Text style={styles.label}>Firstname</Text>
                <AppTextInput placeholder="Enter first name" defaultValue={`${patient.first_name}`} onChangeText={(firstname) => setFirstname(firstname)} />

                <Text style={styles.label}>Lastname</Text>
                <AppTextInput placeholder="Enter last name" defaultValue={`${patient.last_name}`} onChangeText={(lastname) => setLastname(lastname)} />

                <Text style={styles.label}>Gender</Text>
                <AppDropdown data={genderData} onPress={(selected) => setGender(selected)} />

                <Text style={styles.label}>Date of Birth</Text>
                <AppTextInput placeholder="Enter Date of Birth" defaultValue={stringifyDate(patient.dob)} onChangeText={(dob) => setDOB(dob)} />

                <Text style={styles.label}>Allergies</Text>
                <AppTextInput placeholder="Enter any allergies patient may have" defaultValue={`${patient.allergies}`} onChangeText={(allergies) => setAllergies(allergies)} />

                <Text style={styles.label}>Condition</Text>
                <AppTextInput placeholder="Enter any illness or conditions patient may have" defaultValue={`${patient.conditions}`} onChangeText={(conditions) => setConditions(conditions)} />

                <AppButton text="Update" onPress={() => updatePatientRecord()} />

                <View style={{ marginBottom: 50 }}></View>
            </ScrollView>


        </KeyboardAvoidingView>
    );
}

export default UpdatePatient;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A161D',
        width: '100%',
        height: '100%',
        padding: 20,
    },
    uploadAvatarView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadAvatar: {
        height: 120,
        width: 113,
        marginTop: 10,
        marginBottom: 20
    },
    label: {
        color: '#FFFFFF',
        marginTop: 15,
    },

})