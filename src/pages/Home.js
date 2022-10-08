import React from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useEffect, useCallback } from 'react';
import { useFonts } from 'expo-font';
import ReportSquare from '../components/ReportSquare';

const IconAccidente = require('../assets/images/ReportIcons/AccidenteAutomovilistico.png')
const IconAlumbrado = require('../assets/images/ReportIcons/AlumbradoPublico.png')
const IconBache = require('../assets/images/ReportIcons/Baches.png')
const IconFuga = require('../assets/images/ReportIcons/FugadeAgua.png')
const IconLimpieza = require('../assets/images/ReportIcons/LimpiezaPublica.png')
const IconSemaforo = require('../assets/images/ReportIcons/Semaforo.png')
const IconVandalismo = require('../assets/images/ReportIcons/Vandalismo.png')
const IconOtro = require('../assets/images/ReportIcons/Otros.png')

const Home = ({ navigation }) => {

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
            <View>
                <Text style={styles.mainTitle}>REPORTAR</Text>
            </View>
            <View style={styles.container}>
                <ReportSquare navigation={navigation} text='Bache' image={IconBache} />
                <ReportSquare navigation={navigation} text='Semáforo' image={IconSemaforo} />
                <ReportSquare
                    navigation={navigation}
                    text='Alumbrado público'
                    image={IconAlumbrado}
                />
                <ReportSquare navigation={navigation} text='Vandalismo' image={IconVandalismo} />
                <ReportSquare
                    navigation={navigation}
                    text='Accidente de tránsito'
                    image={IconAccidente}
                />
                <ReportSquare navigation={navigation} text='Limpieza' image={IconLimpieza} />
                <ReportSquare navigation={navigation} text='Fuga de agua' image={IconFuga} />
                <ReportSquare navigation={navigation} text='Otro' image={IconOtro} />
            </View>
            <TouchableOpacity
                style={styles.reportsButton}
                onPress={() => {navigation.navigate("Reports");}}
            >
                <Text style={styles.reportButton}>Mis Reportes</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainTitle: {
        textAlign: 'center',
        backgroundColor: '#002244',
        color: '#FFF',
        fontSize: 32,
        padding: 10,
        fontFamily: 'MontserratBold'
    },
    mainContainer: {
        width: '100%',
        backgroundColor: '#ffffff'
    },
    container: {
        display: 'flex',
        width: '100%',
        height: 850,
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    reportButton: {
        fontSize: 20,
        width: '75%',
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        color: '#002244',
        borderRadius: 4,
        marginBottom: 32,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 5,
        paddingTop: 5,
        fontFamily: 'MontserratRegular',
        borderColor: '#002244',
        borderWidth: 2,
    },
})

export default Home
