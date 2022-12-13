import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { addTestResult } from '../api/api';
import AppButton from '../components/AppButton';
import { AppTextInput } from '../components/AppInputField';

function AddTestResult(props) {
    const route = useRoute();
    const residentID = route.params.residentID;
    let [systolic_pressure, setSystolicPressure] = useState();
    let [diastolic_pressure, setDiastolicPressure] = useState();
    let [heartbeat, setHeartBeat] = useState();
    let [respiratory_rate, setRespiratoryRate] = useState();
    let [blood_oxygen, setBloodOxygen] = useState();
    let [notes, setNotes] = useState();

    let createTestRecord = (e) => {
        if (!systolic_pressure && !diastolic_pressure && !heartbeat && !respiratory_rate && !blood_oxygen && !notes) {
            Alert.alert("Warning!", "You missed a record. You need to enter a value for all fields");
        }
        else {
            // Call the Add Test Result api function and pass the values to it
            addTestResult(residentID, systolic_pressure, diastolic_pressure, heartbeat, respiratory_rate, blood_oxygen, notes)
                .then(
                    (result) => {
                        Alert.alert("Patient Test Result", "Test Record Added Successfully", [
                            {
                                text: "Ok",
                                onPress: () => props.navigation.navigate('PatientDetails', { residentID })
                            }
                        ]);
                    }
                )
                .catch(
                    function (error) {
                        console.log(error.response);
                    }
                )
        }
    }


    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ marginBottom: 70 }}>
                <Text style={styles.label}>Blood Pressure (mmHg)</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.bloodPressureColOne}>
                        <AppTextInput placeholder="Systolic Pressure" keyboardType='numeric' onChangeText={(systolic_pressure) => setSystolicPressure(systolic_pressure)} />
                    </View>
                    <View style={styles.bloodPressureColTwo}>
                        <AppTextInput placeholder="Diastolic Pressure" keyboardType='numeric' onChangeText={(diastolic_pressure) => setDiastolicPressure(diastolic_pressure)} />
                    </View>
                </View>

                <Text style={styles.label}>Heartbeat rate (BPM)</Text>
                <AppTextInput placeholder="Enter beats per minute" keyboardType='numeric' onChangeText={(heartbeat) => setHeartBeat(heartbeat)} />

                <Text style={styles.label}>Respiratory rate</Text>
                <AppTextInput placeholder="Enter beats per minute" keyboardType='numeric' onChangeText={(respiratory_rate) => setRespiratoryRate(respiratory_rate)} />

                <Text style={styles.label}>Blood oxygen level (%SpO2)</Text>
                <AppTextInput placeholder="Enter breaths per minute" keyboardType='numeric' onChangeText={(blood_oxygen) => setBloodOxygen(blood_oxygen)} />

                <Text style={styles.label}>Notes/Observations</Text>
                <AppTextInput placeholder="Enter note or any observations" multiline={true} numberOfLines={6} height={100} onChangeText={(notes) => setNotes(notes)} />

                <AppButton text="Add Result" onPress={() => createTestRecord()} />
            </ScrollView>


        </KeyboardAvoidingView>
    );
}

export default AddTestResult;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A161D',
        width: '100%',
        height: '100%',
        padding: 20,
    },
    label: {
        color: '#FFFFFF',
        marginTop: 15,
    },
    bloodPressureColOne: {
        flex: 1,
        marginEnd: 5,
    },
    bloodPressureColTwo: {
        flex: 1,
        marginStart: 5,
    },
})