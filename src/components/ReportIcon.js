import {Image, StyleSheet, Text, View} from 'react-native'

const ReportIcon = ({image, isActive, label}) => {
  return (
    <View style={{display: 'flex', alignItems: 'center'}}>
        <View style={[styles.container, isActive ? styles.isActiveImage : styles.isDisableImage]}>
            <Image source={image} style={styles.image}/>
        </View>
        <Text style={styles.text}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: '70%',
        height: '70%',
    },
    isActiveImage: {
        backgroundColor: '#A3D930'
    },
    isDisableImage: {
        backgroundColor: '#C8D9A3'
    },
    container: {
        width: 80,
        height: 80,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        color: "#FFF",
        fontFamily: 'MontserratSemiBold'
    }
})

export default ReportIcon