import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useEffect, useCallback } from 'react';
import { useFonts } from 'expo-font';
import TitleView from '../components/TitleView';
import { TextInput } from 'react-native-gesture-handler';

const Index = ({ navigation }) => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    //Importing Fonts
    const [fontsLoaded] = useFonts({
        'MontserratRegular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'MontserratBold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'MontserratSemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    });

    //Splash Screen
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
        await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ScrollView style={styles.mainContainer}>
            <TitleView />
            <View style={styles.logInContainer}>
                <Text style={styles.txtWelcome}>Iniciar Sesión</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTxt}>Correo electrónico:</Text>
                <TextInput
                    placeholder='Ingresa tu correo electrónico'
                    placeholderTextColor='#757575'
                    style={styles.inputLog}
                    onChangeText={user => setUser(user)}
                    defaultValue={user}
                />
                <Text style={styles.inputTxt}>Contraseña:</Text>
                <TextInput
                    placeholder='Ingresa tu contraseña'
                    placeholderTextColor='#757575'
                    style={styles.inputLog}
                    secureTextEntry={true}
                    onChangeText={pass => setPass(pass)}
                    defaultValue={pass}
                />
                <Text
                    style={{
                        textAlign: 'left',
                        marginBottom: 15,
                        color: '#404041',
                        alignSelf: 'flex-start',
                        marginLeft: '12%',
                        fontFamily: 'MontserratRegular',
                        fontSize: 16,
                    }}>
                    ¿No tienes cuenta?{' '}
                    <Text
                        style={{
                            textDecorationLine: 'underline',
                            fontFamily: 'MontserratRegular',
                            color: '#69BE28',
                        }}
                        onPress={() => {
                            navigation.navigate('Register')
                        }}>
                        Regístrate
                    </Text>
                </Text>
                <View style={styles.secondContainer}>
                    <Text
                        style={{
                            marginBottom: 15,
                            color: '#69BE28',
                            textDecorationLine: 'underline',
                            alignSelf: 'flex-end',
                            marginRight: '12%',
                            fontSize: 16,
                            fontFamily: 'MontserratRegular',
                        }}>
                        ¿Has olvidado la contraseña?
                    </Text>
                    <TouchableOpacity style={styles.logInButton}
                        onPress={() => {
                            let values = {
                                username: user,
                                password: pass,
                            }
                            navigation.navigate('Home')
                        }}>
                        <Text style={styles.btnLogInTxt}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff'
    },
    logInContainer: {
        backgroundColor: '#ffffff',
    },
    txtWelcome: {
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 10,
        fontSize: 24,
        fontFamily: 'MontserratBold',
        lineHeight: 24.38,
        color: '#404041',
    },
    inputContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    inputTxt: {
        alignSelf: 'flex-start',
        marginLeft: 50,
        marginBottom: 4,
        fontFamily: 'MontserratSemiBold',
        fontSize: 16,
        color: '#404041',
    },
    inputLog: {
        paddingLeft: 10,
        width: '80%',
        height: 50,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ABABAB',
        marginBottom: 20,
        fontFamily: 'MontserratRegular',
        fontSize: 16,
        color: '#000',
    },
    secondContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    logInButton: {
        marginTop: 30,
        backgroundColor: '#FFFFFF',
        borderColor: '#002244',
        borderWidth: 2,
        width: '80%',
        borderRadius: 4,
        alignItems: 'center',
        margin: 10,
    },
    btnLogInTxt: {
        fontFamily: 'MontserratRegular',
        fontSize: 20,
        lineHeight: 19.5,
        margin: 10,
        color: '#002244',
    }
})

export default Index
