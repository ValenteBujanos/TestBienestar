import {View, StyleSheet, TextInput, Text} from 'react-native'

const TextArea = ({texto, placeholder}) => {

    return(
        <View>
            <Text style={styles.labeltext}>{texto}</Text>
            <TextInput style={styles.inputstyle} placeholder={placeholder} multiline={true} />
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
        paddingTop: 10,
        backgroundColor:'#FFF',
        borderColor:'#ABABAB',
        borderWidth: 1,
        borderRadius: 4,
        height: 90,
        textAlignVertical: "top",
        fontSize: 16,
        fontFamily: 'MontserratRegular',
    }

})

export default TextArea