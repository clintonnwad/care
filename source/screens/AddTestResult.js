import React from 'react';
import { ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AppButton from '../components/AppButton';
import { AppTextInput } from '../components/AppInputField';

function AddTestResult(props) {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ marginBottom: 70 }}>
                <Text style={styles.label}>Blood Pressure (mmHg)</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.bloodPressureColOne}>
                        <AppTextInput placeholder="Systolic Pressure" />
                    </View>
                    <View style={styles.bloodPressureColTwo}>
                        <AppTextInput placeholder="Diastolic Pressure" />
                    </View>
                </View>

                <Text style={styles.label}>Heartbeat rate (BPM)</Text>
                <AppTextInput placeholder="Enter beats per minute" />

                <Text style={styles.label}>Respiratory rate</Text>
                <AppTextInput placeholder="Enter beats per minute" />

                <Text style={styles.label}>Blood oxygen level (%SpO2)</Text>
                <AppTextInput placeholder="Enter breaths per minute" />

                <Text style={styles.label}>Notes/Observations</Text>
                <AppTextInput placeholder="Enter note or any observations" multiline={true} numberOfLines={6} height={100} />

                <AppButton text="Add Result" />
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