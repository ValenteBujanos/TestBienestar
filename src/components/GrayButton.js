import { StyleSheet, TouchableOpacity, Text} from 'react-native'

const GrayButton = ({navigation, titulo, navegar}) => {

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
        borderColor: '#757575',
        borderWidth: 2,
        borderRadius: 4,
        alignItems: 'center',
        flex: 1,
        marginRight: 5,
    },
    titulos:{
        fontFamily: 'MontserratRegular',
        fontSize: 20,
        lineHeight: 19.5,
        margin: 10,
        color: '#757575',
    }
})

export default GrayButton