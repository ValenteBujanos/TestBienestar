import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import ReportIcon from '../components/ReportIcon';
import GrayButton from '../components/GrayButton';
import BlueButton from '../components/BlueButton';
import TextArea from '../components/TextArea';
import DisabledInput from '../components/DisabledInput';

import UserIcon from '../assets/images/FormIcons/UserIcon.png'
import MarkIcon from '../assets/images/FormIcons/MarkIcon.png'
import MapIcon from '../assets/images/FormIcons/MapIcon.png'

import { useEffect, useCallback } from 'react';
import { useFonts } from 'expo-font';

import * as ImagePicker from 'expo-image-picker';

const FormData = ({ navigation }) => {
    //Image Picker
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [3, 3],
            quality: 1,
            allowsEditing: true
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    //A partir de aqui todo bien
    let d = new Date();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();
    let yy = d.getFullYear();

    let myDateString = dd + "/" + mm + "/" + yy; //(US)

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
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <ReportIcon image={UserIcon} isActive label="Datos" />
                <ReportIcon image={MapIcon} label="Ubicación" />
                <ReportIcon image={MarkIcon} label="Finalizar" />
            </View>
            <ScrollView style={styles.formContainer}>
                <Text style={styles.titulo}>Datos del reporte</Text>
                <View>
                    <DisabledInput
                    texto="*Reportado por:"
                    placeholder="Nombre Completo"
                    />
                    <DisabledInput texto="*Motivo del Reporte:" placeholder={"Motivo"} />
                    <DisabledInput
                        texto="*Fecha:"
                        placeholder="Fecha"
                        value={myDateString}
                    />
                    <TextArea texto="Detalles del reporte:" placeholder="Descripción" />
                    <Text
                        style={{
                            fontSize: 16,
                            paddingBottom: 5,
                            color: "#404041",
                            fontFamily: "MontserratSemiBold",
                        }}
                    >
                    Subir pruebas:
                    </Text>
                </View>
                <View style={styles.evidenceContainer}>
                    <Text
                        style={styles.evidenceTxt}
                        onPress = {pickImage}
                        >Cargar archivo</Text>
                </View>
                <ScrollView style={styles.imagesContainer} horizontal>
                    <Image source={{ uri: image }} style={{ width: 100, height: 100, margin: 5 }} />
                </ScrollView>
                <View style={styles.buttonsContainer}>
                    <GrayButton
                        navigation={navigation}
                        navegar="Index"
                        titulo="Cancelar"
                    />
                    <BlueButton
                    navigation={navigation}
                    navegar="FormU"
                    titulo="Siguiente"
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#ffffff',
        height: '100%',
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#002244",
        paddingTop: 8,
        paddingBottom: 7,
    },
    formContainer: {
        marginLeft: 40,
        marginRight: 40,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#ffffff',
    },
    titulo: {
        marginTop: 15,
        paddingBottom: 15,
        fontSize: 24,
        fontFamily: "MontserratBold",
        color: "#404041",
        textAlign: "center",
    },
    evidenceContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "flex-start",
        backgroundColor: '#ffffff',
    },
    evidenceTxt: {
        color: "#404041",
        fontFamily: "MontserratRegular",
        fontSize: 14,
        marginRight: 5,
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 10,
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
    },
    imagesContainer: {
        
    }
})

export default FormData
