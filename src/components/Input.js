import {View, StyleSheet, TextInput, Text} from 'react-native'

const Input = ({texto, placeholder, edit}) => {

    return(
        <View>
            <Text style={styles.labeltext}>{texto}</Text>
            <TextInput style={styles.inputstyle} placeholder={placeholder} editable={edit} />
        </View>
    )
}

const styles=StyleSheet.create({
    labeltext:{
        fontSize: 16,
        paddingBottom: 5,
        color: '#404041',
        fontFamily: 'MontserratSemiBold'
    },
    inputstyle:{
        marginBottom:10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor:'#FFF',
        borderColor:'#ABABAB',
        borderWidth: 1,
        borderRadius: 4,
        height: 45,
        fontSize: 16,
        fontFamily: 'MontserratRegular',
    }

})

export default Input
