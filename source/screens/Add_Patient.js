import React from 'react';
import { Alert, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AppButton from '../components/AppButton';
import AppDropdown from '../components/AppDropdown';
import AppTextInput from '../components/AppInputField';

function AddPatient(props) {
    // For dropdown data
    const genderData = [
        { key: 'Male', value: 'Male' },
        { key: 'Female', value: 'Female' },
        { key: 'Others', value: 'Others' },
    ];

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
                <AppTextInput placeholder="Enter first name" />

                <Text style={styles.label}>Lastname</Text>
                <AppTextInput placeholder="Enter last name" />

                <Text style={styles.label}>Gender</Text>
                <AppDropdown data={genderData} />

                <Text style={styles.label}>Date of Birth</Text>
                <AppTextInput placeholder="Enter Date of Birth" />

                <Text style={styles.label}>Allergies</Text>
                <AppTextInput placeholder="Enter any allergies patient may have" />

                <Text style={styles.label}>Condition</Text>
                <AppTextInput placeholder="Enter any illness or conditions patient may have" />

                <AppButton text="Add Patient" />

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
        marginBottom: 20
    },
    label: {
        color: '#FFFFFF',
        marginTop: 15,
    },

})