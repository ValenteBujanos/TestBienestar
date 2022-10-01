import {View, StyleSheet, TextInput, Text} from 'react-native'

const DisabledInput = ({texto, placeholder, value }) => {

  return(
    <View>
      <Text style={styles.labeltext}>{texto}</Text>
      <TextInput style={styles.inputstyle} placeholder={placeholder} editable={false} value={value} />
    </View>
  )
}

const styles = StyleSheet.create({
  labeltext: {
    fontSize: 16,
    paddingBottom: 5,
    color: "#404041",
    fontFamily: "MontserratSemiBold",
  },
  inputstyle: {
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#D9D9D9",
    borderColor: "#ABABAB",
    borderWidth: 1,
    borderRadius: 4,
    height: 45,
    fontSize: 16,
    fontFamily: "MontserratRegular",
  },
});

export default DisabledInput
