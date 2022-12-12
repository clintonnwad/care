import { StackActions } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { React, useEffect, useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import { addPatient } from '../api/api';
import AppButton from '../components/AppButton';
import AppDate from '../components/AppDate';
import AppDropdown from '../components/AppDropdown';
import { AppTextInput } from '../components/AppInputField';
import { stringifyDate } from '../components/MomentStringify';

function AddPatient(props) {
    // For dropdown data
    const genderData = [
        { key: 'Male', value: 'Male' },
        { key: 'Female', value: 'Female' },
        { key: 'Others', value: 'Others' },
    ];

    const [selectedDate, setSelectedDate] = useState('');

    let [firstname, setFirstname] = useState('');
    let [lastname, setLastname] = useState('');
    // let [gender, setGender] = useState("");
    let gender = "Male";
    let [dob, setDOB] = useState('');
    let [allergies, setAllergies] = useState('');
    let [conditions, setConditions] = useState('');

    // For avatar
    const [avatar, setAvatar] = useState(null);

    const selectImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setAvatar(result.uri);
            console.log(result.uri);
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

        setDOB(formattedDate);
        hideDatePicker();
    };


    let createPatient = (e) => {
        if (!avatar || !firstname || !lastname || !gender || !dob || !allergies || !conditions) {
            Alert.alert("Incomplete data supplied", "You need to enter data for all fields. All fields are required");
        }
        else {
            const popAction = StackActions.pop(1);

            // Call the addPatient function and pass values into it
            addPatient(avatar, firstname, lastname, gender, dob, allergies, conditions)
                .then(
                    (result) => {
                        Alert.alert("Successful", "Patient added sucessfully");
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
                <TouchableOpacity onPress={selectImage}>
                    {avatar !== null ?
                        <Image
                            source={{ uri: avatar }}
                            style={styles.newAvatar}
                        />
                        :
                        <Image
                            source={require("../assets/upload-avatar.png")}
                            style={styles.uploadAvatar}
                        />

                    }
                </TouchableOpacity>
            </View>

            <ScrollView>
                <Text style={styles.label}>Firstname</Text>
                <AppTextInput placeholder="Enter first name" onChangeText={(firstname) => setFirstname(firstname)} />

                <Text style={styles.label}>Lastname</Text>
                <AppTextInput placeholder="Enter last name" onChangeText={(lastname) => setLastname(lastname)} />

                <Text style={styles.label}>Gender</Text>
                {props.testing === undefined ?
                    <AppDropdown data={genderData} onPress={(selected) => setGender(selected)} />
                    :
                    <></>
                }

                <Text style={styles.label} onPress={showDatePicker}>Date of Birth</Text>
                <TouchableOpacity onPress={showDatePicker}>
                    <AppDate placeholder="Enter Date of Birth" text={dob} />
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
                <AppTextInput placeholder="Enter any allergies patient may have" onChangeText={(allergies) => setAllergies(allergies)} />

                <Text style={styles.label}>Condition</Text>
                <AppTextInput placeholder="Enter any illness or conditions patient may have" onChangeText={(conditions) => setConditions(conditions)} />

                <AppButton text="Add Patient" onPress={() => createPatient()} />

                <View style={{ marginBottom: 50 }}></View>
            </ScrollView>


        </KeyboardAvoidingView>
    );
}

export default AddPatient;

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
        marginBottom: 20,
    },
    label: {
        color: '#FFFFFF',
        marginTop: 15,
    },
    newAvatar: {
        height: 120,
        width: 113,
        borderRadius: 200 / 2,
        marginTop: 10,
        marginBottom: 20,
    }
})