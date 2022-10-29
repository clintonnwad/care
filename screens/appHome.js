import React from 'react';
import { View, ImageBackground, StyleSheet, Text, Image } from 'react-native';
import AppSearchInputField from '../components/AppSearchInputField';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from '../components/BottomTabNav';


function AppHome(props) {
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
                            <Image source={require('../assets/avatarUser.png')}  style={styles.avatar} />
                        </View>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <AppSearchInputField placeholder="Search for patient here ..."/>
                </View>


                
                    
                <NavigationContainer independent={true}>
                    <BottomTabNav />
                </NavigationContainer>
                
        </ImageBackground>

        
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#0A161D',
        width:'100%',
        height:'100%',
    },
    top:{
        flex:1, 
        paddingStart:20,
        paddingEnd: 20,
    },
    topRow:{
        flex:1, 
        flexDirection:'row',
    },
    topColumnOne:{
        backgroundColor: 'transparent', 
        flex:3, 
        alignContent:'left', 
        justifyContent: 'flex-end',
    },
    topColumnTwo:{
        backgroundColor: 'transparent', 
        flex:1, 
        justifyContent: 'flex-end', 
        alignContent:'center'
    },
    bottom:{
        flex:2, 
        // backgroundColor: '#000',
        paddingStart:20,
        paddingEnd: 20,
        paddingTop: 10
    },
    avatar:{
        width: 100, 
        height: 100, 
        flex: 1, 
        resizeMode: 'contain', 
        marginRight: 20,
        justifyContent: 'flex-end', 
        alignContent:'center', 
        marginTop:'100%',
    },
    intro:{
        color: '#fff',
        fontSize: 16,
    },
    caption:{
        color: '#FFF',
        fontSize: 30,
    },
    captionTop:{
        marginTop: 30
    },

})

export default AppHome;