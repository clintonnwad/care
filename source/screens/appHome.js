import React from 'react';
import { Alert, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AppSearchInputField from '../components/AppSearchInputField';
import CustomBottomNav from '../components/CustomBottomNav';

function AppHome(props) {
    const userActivity = 3;

    return (
        <ImageBackground
            source={require('../assets/empty-background.png')}
            style={styles.container}>

            <View style={styles.top}>
                <View style={styles.topRow}>
                    <View style={styles.topColumnOne}>
                        <Text style={styles.intro}>Hi, Mary</Text>
                        <Text style={[styles.caption, styles.captionTop]}>Keep taking</Text>
                        <Text style={styles.caption}>care of your health</Text>
                    </View>
                    <View style={styles.topColumnTwo}>
                        <Image source={require('../assets/avatarUser.png')} style={styles.avatar} />
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>
                <AppSearchInputField placeholder="Search for patient here ..." />

                <Text style={styles.tinyText}>Recent activities</Text>

                {userActivity < 1 ?
                    <View style={styles.activityView}>
                        <ImageBackground source={require('../assets/no-activity.png')} style={styles.noActivityImage} />
                        <Text style={styles.noActivityHeader}>No Recent Activity</Text>
                        <Text style={styles.noActivityDesc}>Try adding a patient using the + button below</Text>
                    </View>
                    :
                    <ScrollView style={styles.activityScrollView}>
                        {/* Item One */}
                        <TouchableOpacity>
                            <View style={[styles.activityView, styles.activityRow]}>
                                <View style={styles.activityColumnOne}>
                                    <Image source={require('../assets/patient-1.png')} style={styles.activityAvatar} />
                                </View>
                                <View style={styles.activityColumnTwo}>
                                    <Text style={styles.activityDescOne}>Add Test Record for</Text>
                                    <Text style={styles.activityDescTwo}>Patrick White</Text>
                                    <Text style={styles.activityDescThree}>October 7, 2022 08:32 am</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* Item Two */}
                        <TouchableOpacity>
                            <View style={[styles.activityView, styles.activityRow]}>
                                <View style={styles.activityColumnOne}>
                                    <Image source={require('../assets/patient-2.png')} style={styles.activityAvatar} />
                                </View>
                                <View style={styles.activityColumnTwo}>
                                    <Text style={styles.activityDescOne}>Add Test Record for</Text>
                                    <Text style={styles.activityDescTwo}>Patrick Gaylord</Text>
                                    <Text style={styles.activityDescThree}>October 7, 2022 08:32 am</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* Item Three */}
                        <TouchableOpacity>
                            <View style={[styles.activityView, styles.activityRow]}>
                                <View style={styles.activityColumnOne}>
                                    <Image source={require('../assets/patient-3.png')} style={styles.activityAvatar} />
                                </View>
                                <View style={styles.activityColumnTwo}>
                                    <Text style={styles.activityDescOne}>Add Test Record for</Text>
                                    <Text style={styles.activityDescTwo}>Paco Hammerman</Text>
                                    <Text style={styles.activityDescThree}>October 7, 2022 08:32 am</Text>
                                </View>
                            </View>
                        </TouchableOpacity>


                        {/* Item Four */}
                        <TouchableOpacity>
                            <View style={[styles.activityView, styles.activityRow]}>
                                <View style={styles.activityColumnOne}>
                                    <Image source={require('../assets/patient-4.png')} style={styles.activityAvatar} />
                                </View>
                                <View style={styles.activityColumnTwo}>
                                    <Text style={styles.activityDescOne}>Add Test Record for</Text>
                                    <Text style={styles.activityDescTwo}>Patience Rowe</Text>
                                    <Text style={styles.activityDescThree}>October 7, 2022 08:32 am</Text>
                                </View>
                            </View>
                        </TouchableOpacity>


                        {/* Item Five */}
                        <TouchableOpacity>
                            <View style={[styles.activityView, styles.activityRow]}>
                                <View style={styles.activityColumnOne}>
                                    <Image source={require('../assets/patient-1.png')} style={styles.activityAvatar} />
                                </View>
                                <View style={styles.activityColumnTwo}>
                                    <Text style={styles.activityDescOne}>Add Test Record for</Text>
                                    <Text style={styles.activityDescTwo}>Patrick Greene</Text>
                                    <Text style={styles.activityDescThree}>October 7, 2022 08:32 am</Text>
                                </View>
                            </View>
                        </TouchableOpacity>


                        {/* Item Six */}
                        <TouchableOpacity>
                            <View style={[styles.activityView, styles.activityRow]}>
                                <View style={styles.activityColumnOne}>
                                    <Image source={require('../assets/patient-2.png')} style={styles.activityAvatar} />
                                </View>
                                <View style={styles.activityColumnTwo}>
                                    <Text style={styles.activityDescOne}>Add Test Record for</Text>
                                    <Text style={styles.activityDescTwo}>Johnson Junk</Text>
                                    <Text style={styles.activityDescThree}>October 7, 2022 08:32 am</Text>
                                </View>
                            </View>
                        </TouchableOpacity>






                    </ScrollView>
                }


            </View>

            <View style={styles.navArea}>
                <CustomBottomNav nav={props.navigation} />
            </View>

        </ImageBackground>


    );
}

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
    topRow: {
        flex: 1,
        flexDirection: 'row',
    },
    topColumnOne: {
        backgroundColor: 'transparent',
        flex: 3,
        alignContent: 'left',
        justifyContent: 'flex-end',
    },
    topColumnTwo: {
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'center',
    },
    bottom: {
        flex: 2,
        paddingStart: 20,
        paddingEnd: 20,
        paddingTop: 10,
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
        height: 60,
        width: 60,
        borderRadius: '50%',
    },
    activityColumnOne: {
        flex: 1,
    },
    activityColumnTwo: {
        flex: 3,
        // backgroundColor: 'red',
    },
    activityDescOne: {
        color: '#FFFFFF',
        fontSize: 12,
    },
    activityDescTwo: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '500',
    },
    activityDescThree: {
        color: '#5298EB',
        fontSize: 12,
    },
    activityScrollView: {
        marginBottom: 20
    }



})

export default AppHome;