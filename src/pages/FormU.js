import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ReportIcon from '../components/ReportIcon'
import Input from '../components/Input'
import GrayButton from '../components/GrayButton'
import BlueButton from '../components/BlueButton'

import UserIcon from '../assets/images/FormIcons/UserIcon.png'
import MarkIcon from '../assets/images/FormIcons/MarkIcon.png'
import MapIcon from '../assets/images/FormIcons/MapIcon.png'

const FormU = ({navigation}) => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.statusContainer}>
                <ReportIcon image={UserIcon} isActive label="Datos" />
                <ReportIcon image={MapIcon} isActive label="Ubicación" />
                <ReportIcon image={MarkIcon} label="Finalizar" />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.titulo}>Ubicación del reporte</Text>
                <View style={{marginBottom:20}}>
                    <Input texto="*Código postal" placeholder="Código postal" />
                    <Input texto="*Dirección" placeholder="Dirección" />
                    <Input texto="Dirección 2" placeholder="Dirección 2" />
                </View>
                <View style={styles.buttonsContainer}>
                    <GrayButton
                        navigation={navigation}
                        navegar="FormData"
                        titulo="Anterior"
                    />
                    <BlueButton
                    navigation={navigation}
                    navegar=""
                    titulo="Siguiente"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#ffffff',
        height: '100%',
    },
    statusContainer: {
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
    },
    titulo: {
        marginTop: 15,
        paddingBottom: 15,
        fontSize: 24,
        fontFamily: "MontserratBold",
        color: "#404041",
        textAlign: "center",
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 10,
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
    }
})

export default FormU;
