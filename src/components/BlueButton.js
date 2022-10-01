import { StyleSheet, TouchableOpacity, Text} from 'react-native'

const BlueButton = ({navigation, titulo, navegar}) => {

    return(
        
        <TouchableOpacity style={styles.botonv}
        onPress={() => {
        navigation.navigate(navegar)
        }}>
        <Text style={styles.titulos}>{titulo}</Text>
        </TouchableOpacity>
       
    )
}

const styles=StyleSheet.create({
    botonv: {
        backgroundColor: '#FFFFFF',
        borderColor: '#002244',
        borderWidth: 2,
        borderRadius: 4,
        alignItems: 'center',
        flex: 1,
        marginLeft: 5,
    },
    titulos:{
        fontFamily: 'MontserratRegular',
        fontSize: 20,
        lineHeight: 19.5,
        margin: 10,
        color: '#002244',
    }
})

export default BlueButton