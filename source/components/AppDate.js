import React from 'react';
import { Alert, Platform, StyleSheet, Text, TextInput, Touchable, View } from 'react-native';

function AppDate(props, otherProps) {
    return (
        <View style={[styles.container, styles.shadowProp]}>

            {props.text !== "" ?
                <Text
                    style={styles.textInput}
                    {...otherProps}
                    placeholderTextColor="#A8AFB3"
                    keyboardAppearance="dark"
                >
                    {props.text}
                </Text>

                :

                <Text
                    style={styles.textInput}
                    {...otherProps}
                    placeholderTextColor="#A8AFB3"
                    keyboardAppearance="dark"
                >
                    Select your DOB
                </Text>

            }


        </View>
    );
}

export default AppDate;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#172A35',
        borderRadius: 10,
        width: '100%',
        padding: 25,
        marginTop: 10,
        flexDirection: "row",
    },
    textInput: {
        fontSize: 15,
        fontWeight: "500",
        color: "#A8AFB3",
        width: '100%',
    },
    shadowProp: {
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 3 },
        shadowOpacity: .17,
        shadowRadius: 3,
    },

});