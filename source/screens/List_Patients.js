import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AppSearchInputField from '../components/AppSearchInputField';
import CustomBottomNav from '../components/CustomBottomNav';

function ListPatients(props) {
    const userActivity = 3;

    return (
        <View style={styles.container}>
            <View style={{ top: 40, flex: 1 }}>
                <AppSearchInputField placeholder={"Search for patient here ..."} />

                <ScrollView>
                    <TouchableOpacity onPress={() => props.navigation.navigate('PatientDetails')}>
                        <View style={[styles.activityView, styles.activityRow]}>
                            <View style={styles.activityColumnOne}>
                                <Image source={require('../assets/patient-1.png')} style={styles.activityAvatar} />
                            </View>
                            <View style={styles.activityColumnTwo}>
                                <Text style={styles.activityDescOne}>Patrick White</Text>
                                <Text style={styles.activityDescTwo}>70 y.o Female</Text>
                                <Text style={styles.activityDescThree}>Joined October 7, 2022</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('PatientDetails')}>
                        <View style={[styles.activityView, styles.activityRow]}>
                            <View style={styles.activityColumnOne}>
                                <Image source={require('../assets/patient-1.png')} style={styles.activityAvatar} />
                            </View>
                            <View style={styles.activityColumnTwo}>
                                <Text style={styles.activityDescOne}>Patrick White</Text>
                                <Text style={styles.activityDescTwo}>70 y.o Female</Text>
                                <Text style={styles.activityDescThree}>Joined October 7, 2022</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('PatientDetails')}>
                        <View style={[styles.activityView, styles.activityRow]}>
                            <View style={styles.activityColumnOne}>
                                <Image source={require('../assets/patient-1.png')} style={styles.activityAvatar} />
                            </View>
                            <View style={styles.activityColumnTwo}>
                                <Text style={styles.activityDescOne}>Patrick White</Text>
                                <Text style={styles.activityDescTwo}>70 y.o Female</Text>
                                <Text style={styles.activityDescThree}>Joined October 7, 2022</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('PatientDetails')}>
                        <View style={[styles.activityView, styles.activityRow]}>
                            <View style={styles.activityColumnOne}>
                                <Image source={require('../assets/patient-1.png')} style={styles.activityAvatar} />
                            </View>
                            <View style={styles.activityColumnTwo}>
                                <Text style={styles.activityDescOne}>Patrick White</Text>
                                <Text style={styles.activityDescTwo}>70 y.o Female</Text>
                                <Text style={styles.activityDescThree}>Joined October 7, 2022</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


                </ScrollView>


            </View>


            <View style={styles.navArea}>
                <CustomBottomNav nav={props.navigation} />
            </View>
        </View>
    );
}

export default ListPatients;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A161D',
        width: '100%',
        height: '100%',
        padding: 20,
    },
    navArea: {
        height: 100,
        paddingStart: 40,
        paddingEnd: 40,
        paddingTop: 20,
    },
    noActivityImage: {
        height: 130,
        width: 120,
        marginTop: 30,
    },
    activityView: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noActivityHeader: {
        color: '#2B4764',
        fontSize: 16,
        marginTop: 15,
        fontWeight: "600",
    },
    noActivityDesc: {
        color: '#2B4764',
        fontWeight: '500',
        fontSize: 12,
        marginTop: 6,
    },
    activityRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    activityAvatar: {
        height: 70,
        width: 70,
        borderRadius: '50%',
    },
    activityColumnOne: {
        flex: 1,
    },
    activityColumnTwo: {
        flex: 3,
    },
    activityDescOne: {
        color: '#FFFFFF',
        fontSize: 21,
        fontWeight: '600',
    },
    activityDescTwo: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '400',
        marginTop: 2,
    },
    activityDescThree: {
        marginTop: 3,
        color: '#5298EB',
        fontSize: 12,
    },
    activityScrollView: {
        marginBottom: 20
    }
})