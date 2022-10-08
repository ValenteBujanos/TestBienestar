import React from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useEffect, useCallback } from 'react';
import { useFonts } from 'expo-font';

const Reports = ({ navigation }) => {

  //Importing Fonts
  const [fontsLoaded] = useFonts({
    'MontserratRegular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'MontserratBold': require('../assets/fonts/Montserrat-Bold.ttf'),
    'MontserratSemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
  });

  //Splash Screen
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

    return (
        <ScrollView style={styles.mainContainer}>
            <View>
                <Text style={styles.mainTitle}>MIS REPORTES</Text>
            </View>
            <TouchableOpacity
                style={styles.calisBtn}
                onPress={() => {
                    navigation.navigate('Index')
                }}
                >
                <Text style={styles.textButton}>Calis</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainTitle: {
        textAlign: 'center',
        backgroundColor: '#002244',
        color: '#FFF',
        fontSize: 32,
        padding: 10,
        fontFamily: 'MontserratBold'
    },
    mainContainer: {
        width: '100%',
        backgroundColor: '#ffffff'
    },
    calisBtn: {
        backgroundColor: '#757575',
        margin: 5,
        padding: 5,
        borderRadius: 5,
    },
    textButton: {
        fontFamily: 'MontserratRegular',
        fontSize: 20,
    }
})

export default Reports
