import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Alert, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const iconHeight = 30;
const iconWidth = 30;
const iconHeightBig = 70;
const iconWidthBig = 70;

function CustomBottomNav(props) {
    return (
        <View style={styles.containerNav}>
            <View style={styles.navContainer}>
                <View style={styles.navBar}>
                    <Pressable style={styles.iconBehavior} onPress={() => props.nav.navigate('ListPatients')}>
                        <Icon name="home" size={iconHeight} width={iconWidth} color="#FFFFFF" style={{ marginTop: 20 }} />
                    </Pressable>

                    <TouchableOpacity style={styles.iconBehavior}>
                        <Icon name="add-circle" size={iconHeightBig} width={iconWidthBig} color="#FFFFFF" />
                    </TouchableOpacity>

                    <Pressable style={styles.iconBehavior}>
                        <Icon name="list" size={iconHeight} width={iconWidth} color="#FFFFFF" style={{ marginTop: 20 }} />
                    </Pressable>
                </View>
            </View>

        </View>
    );
}

export default CustomBottomNav;

const styles = StyleSheet.create({
    containerNav: {
        flex: 1,
        backgroundColor: '#0A161D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 30,
    },
    navBar: {
        flexDirection: 'row',
        backgroundColor: '#0A161D',
        width: '90%',
        justifyContent: 'space-evenly',
        borderRadius: 40
    },
    iconBehavior: {
        padding: 14,
    }
})
