import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Alert, Image, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';

function CustomBottomNav(props) {
    return (
        <View style={styles.containerNav}>
            <View style={styles.navContainer}>
                <View style={styles.navBar}>
                    <Pressable style={styles.iconBehavior} onPress={() => props.nav.navigate('AppHome')}>
                        {
                            props.page == "home" ?
                                <Image source={require('../assets/home-button.png')} style={styles.smallNavBottomButton} />
                                :
                                <Image source={require('../assets/home-button-white.png')} style={styles.smallNavBottomButton} />

                        }
                    </Pressable>

                    <TouchableOpacity style={styles.iconBehavior} onPress={() => props.nav.navigate('AddPatient')}>
                        <Image source={require('../assets/add-button.png')} style={{ height: 60, width: 60 }} />
                    </TouchableOpacity>

                    <Pressable style={styles.iconBehavior} onPress={() => props.nav.navigate('ListPatients')}>
                        {
                            props.page == "listPatients" ?
                                <Image source={require('../assets/list-button.png')} style={styles.smallNavBottomButton} />
                                :
                                <Image source={require('../assets/list-button-white.png')} style={styles.smallNavBottomButton} />

                        }
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
        bottom: 25,
    },
    navBar: {
        flexDirection: 'row',
        backgroundColor: '#0A161D',
        width: '100%',
        justifyContent: 'space-between',
        paddingRight: 35,
        paddingLeft: 35,
    },
    iconBehavior: {
        padding: 14,
    },
    smallNavBottomButton: {
        height: 25,
        width: 25,
        marginTop: 15,
    }

})
