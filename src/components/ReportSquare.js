import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

const ReportSquare = ({ text, image, navigation }) => {

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('FormData')
                    }}>
                    <Image source={image} style={styles.image} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('FormData')
                    }}>
                    <Text style={styles.textImage}>{text}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 160,
        height: 160,
        borderRadius: 12,
        borderColor: '#002244',
        borderWidth: 2
    },
    container: {
        display: 'flex',
        width: 200,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    textImage: {
        fontFamily: 'MontserratSemiBold',
        color: '#404041',
    }
})

export default ReportSquare
