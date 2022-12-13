import { useRoute } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { React, useEffect, useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import { updatePatient } from '../api/api';
import AppButton from '../components/AppButton';
import AppDate from '../components/AppDate';
import AppDropdown from '../components/AppDropdown';
import { AppTextInput } from '../components/AppInputField';
import { stringifyDate, stringifyDateLong } from '../components/MomentStringify';

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

    const [selectedDate, setSelectedDate] = useState('');

    let [firstname, setFirstname] = useState(patient.first_name);
    let [lastname, setLastname] = useState(patient.last_name);
    let gender = "Male";
    let [dob, setDOB] = useState(patient.dob);
    let [allergies, setAllergies] = useState(patient.allergies);
    let [conditions, setConditions] = useState(patient.conditions);

    // Conv date
    const formattedDOB = stringifyDate(dob);

    // For avatar
    const [avatar, setAvatar] = useState(patient.avatar);

    const selectImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (result.uri !== undefined) {
            setAvatar(result.uri);
        }
    };

    // Date Picker
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // Convert date using Moment.js
        let formattedDate = stringifyDate(date);
        setDOB(date);

        hideDatePicker();
    };


    let updatePatientRecord = (e) => {
        if (!avatar || !firstname || !lastname || !gender || !dob || !allergies || !conditions) {
            Alert.alert("Incomplete data supplied", "You need to enter data for all fields. All fields are required");
        }
        else {
            // Call the addPatient function and pass values into it
            updatePatient(residentID, avatar, firstname, lastname, gender, dob, allergies, conditions)
                .then(
                    (result) => {
                        Alert.alert("Successful", "Patient Details updated sucessfully", [
                            { test: 'OK', onPress: props.navigation.navigate("PatientDetails", { residentID }) }
                        ]);
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
                <TouchableOpacity onPress={selectImage}>
                    {avatar === undefined ?
                        <Image
                            source={require("../assets/upload-avatar.png")}
                            style={styles.uploadAvatar}
                        />
                        :
                        <Image
                            source={{ uri: avatar }}
                            style={styles.newAvatar}
                        />

                    }
                </TouchableOpacity>
            </View>

            <ScrollView>
                <Text style={styles.label}>Firstname</Text>
                <AppTextInput placeholder="Enter first name" defaultValue={`${patient.first_name}`} onChangeText={(firstname) => setFirstname(firstname)} />

                <Text style={styles.label}>Lastname</Text>
                <AppTextInput placeholder="Enter last name" defaultValue={`${patient.last_name}`} onChangeText={(lastname) => setLastname(lastname)} />

                <Text style={styles.label}>Gender</Text>
                {props.testing === undefined ?
                    <AppDropdown data={genderData} onPress={(selected) => setGender(selected)} />
                    :
                    <></>
                }

                <Text style={styles.label}>Date of Birth</Text>
                <TouchableOpacity onPress={showDatePicker}>
                    <AppDate placeholder="Enter Date of Birth" text={stringifyDate(dob)} />
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    date={new Date()}
                    isDarkModeEnabled={true}
                />

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
    newAvatar: {
        height: 120,
        width: 120,
        borderRadius: 200 / 2,
        marginTop: 10,
        marginBottom: 20,
    }
})