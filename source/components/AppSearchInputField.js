import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function AppSearchInputField({ ...otherProps }) {
    return (
        <View style={styles.container}>
            <Ionicons name="search-outline" size={20} color="white" />
            <TextInput style={styles.textInput} {...otherProps} placeholderTextColor="#A8AFB3" keyboardAppearance="dark" />

            <TouchableOpacity>
                <Ionicons name="filter-outline" size={20} color="white" style={{ marginLeft: 30 }} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#172A35',
        borderRadius: 40,
        flexDirection: 'row',
        width: '100%',
        padding: 25,
        marginVertical: 10
    },
    textInput: {
        fontSize: 15,
        color: "#A8AFB3",
        paddingLeft: 10,
        paddingRight: 20
    }
})
export default AppSearchInputField;