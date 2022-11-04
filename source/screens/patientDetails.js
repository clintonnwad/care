import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function PatientDetails(props) {
    return (
        <View style={styles.container}>
            <Text>Hello World</Text>
        </View>
    );
}

export default PatientDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A161D',
        width: '100%',
        height: '100%',
        padding: 20,
    },
})