import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AppSearchInputField from '../components/AppSearchInputField';
import CustomBottomNav from '../components/CustomBottomNav';

function ListPatients(props) {
    const numPatients = 3;

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <AppSearchInputField placeholder={"Search for patient here ..."} />
                <ScrollView>
                    <TouchableOpacity onPress={() => props.navigation.navigate('PatientDetails')}>
                        <View style={[styles.listItem, styles.activityRow]}>
                            <View style={styles.activityColumnOne}>
                                <Image source={require('../assets/patient-1.png')} style={styles.activityAvatar} />
                            </View>
                            <View style={styles.activityColumnTwo}>
                                <Text style={styles.activityDescOne}>Patricia White</Text>
                                <Text style={styles.activityDescTwo}>70 y.o Female</Text>
                                <Text style={styles.activityDescThree}>Joined October 7, 2022</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Item 2 */}
                    <TouchableOpacity onPress={() => props.navigation.navigate('PatientDetails')}>
                        <View style={[styles.listItem, styles.activityRow]}>
                            <View style={styles.activityColumnOne}>
                                <Image source={require('../assets/patient-2.png')} style={styles.activityAvatar} />
                            </View>
                            <View style={styles.activityColumnTwo}>
                                <Text style={styles.activityDescOne}>Patrick Gaylord</Text>
                                <Text style={styles.activityDescTwo}>76 y.o  Female</Text>
                                <Text style={styles.activityDescThree}>Joined January 23, 2014</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Item 3 */}
                    <TouchableOpacity onPress={() => props.navigation.navigate('PatientDetails')}>
                        <View style={[styles.listItem, styles.activityRow]}>
                            <View style={styles.activityColumnOne}>
                                <Image source={require('../assets/patient-3.png')} style={styles.activityAvatar} />
                            </View>
                            <View style={styles.activityColumnTwo}>
                                <Text style={styles.activityDescOne}>Paco Hammerman</Text>
                                <Text style={styles.activityDescTwo}>69 y.o Male</Text>
                                <Text style={styles.activityDescThree}>Joined August 14, 2015</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Item 4 */}
                    <TouchableOpacity onPress={() => props.navigation.navigate('PatientDetails')}>
                        <View style={[styles.listItem, styles.activityRow]}>
                            <View style={styles.activityColumnOne}>
                                <Image source={require('../assets/patient-4.png')} style={styles.activityAvatar} />
                            </View>
                            <View style={styles.activityColumnTwo}>
                                <Text style={styles.activityDescOne}>Patience Rowe</Text>
                                <Text style={styles.activityDescTwo}>69 y.o Female</Text>
                                <Text style={styles.activityDescThree}>Joined September 7, 2020</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Item 5 */}
                    <TouchableOpacity onPress={() => props.navigation.navigate('PatientDetails')}>
                        <View style={[styles.listItem, styles.activityRow]}>
                            <View style={styles.activityColumnOne}>
                                <Image source={require('../assets/patient-1.png')} style={styles.activityAvatar} />
                            </View>
                            <View style={styles.activityColumnTwo}>
                                <Text style={styles.activityDescOne}>Patricia White</Text>
                                <Text style={styles.activityDescTwo}>70 y.o Female</Text>
                                <Text style={styles.activityDescThree}>Joined October 7, 2022</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Item 6 */}
                    <TouchableOpacity onPress={() => props.navigation.navigate('PatientDetails')}>
                        <View style={[styles.listItem, styles.activityRow]}>
                            <View style={styles.activityColumnOne}>
                                <Image source={require('../assets/patient-2.png')} style={styles.activityAvatar} />
                            </View>
                            <View style={styles.activityColumnTwo}>
                                <Text style={styles.activityDescOne}>Patrick Gaylord</Text>
                                <Text style={styles.activityDescTwo}>76 y.o  Female</Text>
                                <Text style={styles.activityDescThree}>Joined January 23, 2014</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Item 7 */}
                    <TouchableOpacity onPress={() => props.navigation.navigate('PatientDetails')}>
                        <View style={[styles.listItem, styles.activityRow]}>
                            <View style={styles.activityColumnOne}>
                                <Image source={require('../assets/patient-3.png')} style={styles.activityAvatar} />
                            </View>
                            <View style={styles.activityColumnTwo}>
                                <Text style={styles.activityDescOne}>Paco Hammerman</Text>
                                <Text style={styles.activityDescTwo}>69 y.o Male</Text>
                                <Text style={styles.activityDescThree}>Joined August 14, 2015</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Item 8 */}
                    <TouchableOpacity onPress={() => props.navigation.navigate('PatientDetails')}>
                        <View style={[styles.listItem, styles.activityRow]}>
                            <View style={styles.activityColumnOne}>
                                <Image source={require('../assets/patient-4.png')} style={styles.activityAvatar} />
                            </View>
                            <View style={styles.activityColumnTwo}>
                                <Text style={styles.activityDescOne}>Patience Rowe</Text>
                                <Text style={styles.activityDescTwo}>69 y.o Female</Text>
                                <Text style={styles.activityDescThree}>Joined September 7, 2020</Text>
                            </View>
                        </View>
                    </TouchableOpacity>



                </ScrollView>
            </View>

            <View style={styles.navArea}>
                <CustomBottomNav nav={props.navigation} page="listPatients" />
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
    },
    top: {
        flex: 1,
        paddingStart: 20,
        paddingEnd: 20,
    },
    bottom: {
        flex: 4,
        paddingStart: 20,
        paddingEnd: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        flex: 1,
        resizeMode: 'contain',
        marginRight: 20,
        justifyContent: 'flex-end',
        alignContent: 'center',
        marginTop: '100%',
    },
    intro: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    caption: {
        color: '#FFFFFF',
        fontSize: 30,
    },
    captionTop: {
        marginTop: 30
    },
    navArea: {
        height: 100,
        paddingStart: 40,
        paddingEnd: 40,
        paddingTop: 20,
        backgroundColor: '#0A161D',
    },
    tinyText: {
        color: '#FFFFFF',
        marginTop: 10,
        marginBottom: 10
    },
    listItem: {
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
        height: 60,
        width: 60,
        borderRadius: 50,
    },
    activityColumnOne: {
        flex: 1,
    },
    activityColumnTwo: {
        flex: 3,
    },
    activityDescOne: {
        color: '#FFFFFF',
        fontSize: 20,
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