import React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import ReportIcon from '../components/ReportIcon'

import UserIcon from '../assets/images/FormIcons/UserIcon.png'
import MarkIcon from '../assets/images/FormIcons/MarkIcon.png'
import MapIcon from '../assets/images/FormIcons/MapIcon.png'

const EndMsg = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.statusContainer}>
                <ReportIcon image={UserIcon} isActive label="Datos" />
                <ReportIcon image={MapIcon} isActive label="Ubicación" />
                <ReportIcon image={MarkIcon} isActive label="Finalizar" />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.titulo}>Reporte Finalizado</Text>
                <View style={styles.msgContainer}>
                    <Text style={styles.message}>Su denuncia ha sido enviada y será atendida por las autoridades correspondientes.</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.exitButton}
                        onPress={() => {navigation.navigate("Index");}}
                    >
                        <Text style={styles.exitText}>Salir</Text>
                    </TouchableOpacity>
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
        margin: 35,
    },
    titulo: {
        paddingBottom: 15,
        fontSize: 24,
        fontFamily: 'MontserratBold',
        color: '#404041',
        textAlign: 'center',
    },
    msgContainer: {
        alignItems: 'center'
    },
    message: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 20,
        color: '#404041',
        textAlign: 'center',
        width: '60%',
        marginBottom: 20
    },
    btnContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    exitButton: {
        backgroundColor: '#FFFFFF',
        borderColor: '#002244',
        borderWidth: 2,
        borderRadius: 4,
        alignItems: 'center',
        marginLeft: 5,
        width: '50%'
    },
    exitText: {
        fontFamily: 'MontserratRegular',
        fontSize: 20,
        lineHeight: 19.5,
        margin: 10,
        color: '#002244',
    }
})

export default EndMsg;