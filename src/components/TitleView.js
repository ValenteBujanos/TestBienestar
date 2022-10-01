import {View, StyleSheet, Text} from 'react-native'

const TitleView = () => {

    return(
        
        <View style={styles.titleView}>
                <Text style={styles.title}>
                    APP{"\n"}BIENESTAR
                </Text>
            </View>
       
    )
}

const styles=StyleSheet.create({
    titleView: {
        width: '100%',
        height: 196,
        backgroundColor: '#002244',
    },
    title: {
        color: '#ffffff',
        fontFamily: 'MontserratBold',
        fontSize: 30,
        lineHeight: 36.31,
        marginTop: 53,
        marginLeft: 31,
        fontWeight: '700',
    },
})

export default TitleView