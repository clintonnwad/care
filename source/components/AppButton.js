import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function AppButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#025AC9', '#532BED']}
                style={styles.linearGradient}
            >
                <Text style={[props.style, styles.button]}>{props.text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        width: "100%",
        textAlign: 'center',
        color: '#FFFFFF',
        borderTopRightRadius: 20,
        fontSize: 20
    },
    linearGradient: {
        borderRadius: "20%",
        padding: 25,
        marginTop: 20,
    }
})

export default AppButton;