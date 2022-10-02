import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import TitleView from '../components/TitleView';
import axios from 'axios';

const Register = ({ navigation }) => {

    const [name, setName] = useState('');
    const [primerApellido, setPrimerApellido] = useState('');
    const [segundoApellido, setSegundoApellido] = useState('');
    const [mail, setMail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [pw1, setPw1] = useState('');
    const [pw2, setPw2] = useState('');

    return (
        <View style={styles.mainContainer}>
            <TitleView />
            <ScrollView>
                <Text style={styles.title}>Registrarse</Text>
                <View style={styles.inputsContainer}>
                <Text style={styles.lblInput}>*Nombre(s):</Text>
                    <TextInput 
                        placeholder='Ingresa tu nombre' 
                        style={styles.InputLogin} 
                        onChangeText={name => setName(name)}
                        defaultValue={name}
                    />
                    <Text style={styles.lblInput}>*Primer Apellido:</Text>
                    <TextInput 
                        placeholder='Ingresa tu primer apellido' 
                        style={styles.InputLogin} 
                        onChangeText={primerApellido => setPrimerApellido(primerApellido)}
                        defaultValue={primerApellido}
                    />
                    <Text style={styles.lblInput}>Segundo Apellido:</Text>
                    <TextInput 
                        placeholder='Ingresa tu segundo apellido' 
                        style={styles.InputLogin} 
                        onChangeText={segundoApellido => setSegundoApellido(segundoApellido)}
                        defaultValue={segundoApellido}
                    />
                    <Text style={styles.lblInput}>*Correo Electrónico:</Text>
                    <TextInput 
                        placeholder='Ingresa tu correo electrónico' 
                        style={styles.InputLogin} 
                        onChangeText={mail => setMail(mail)} 
                        defaultValue={mail}
                    />
                    <Text style={styles.lblInput}>*Teléfono:</Text>
                    <TextInput 
                        placeholder='Ingresa tu teléfono'
                        style={styles.InputLogin}
                        onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                        defaultValue={phoneNumber}
                    />
                    <Text style={styles.lblInput}>*Contraseña:</Text>
                    <TextInput 
                        placeholder='Ingresa tu contraseña' 
                        style={styles.InputLogin}
                        secureTextEntry={true}
                        onChangeText={pw1 => setPw1(pw1)}
                        defaultValue={pw1}
                    />
                    <Text style={styles.lblInput}>*Confirmar contraseña</Text>
                    <TextInput 
                        placeholder='Confirma tu contraseña'
                        style={styles.InputLogin} 
                        secureTextEntry={true}
                        onChangeText={pw2 => setPw2(pw2)}
                        defaultValue={pw2}
                    />
                    <View style={styles.termsContainer}>
                        <Text
                            style={{
                                textAlign: 'center',
                                marginBottom: 15,
                                color: '#555',
                                textDecorationLine: 'underline',
                                color: '#69BE28',
                                fontFamily: 'MontserratRegular',
                                fontSize: 16
                            }}>
                            Acepto los términos y condiciones
                        </Text>
                    </View>
                    <View style={{ width: '80%', marginBottom: 10, flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity
                        style={styles.CancelButton}
                        onPress={() => {navigation.navigate("Index");}}>
                            <Text style={styles.btnCancelTxt}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.SignInButton}
                        onPress={() => {
                            if(pw1 == pw2){
                                let values = {
                                    usuario: name,
                                    correo: mail,
                                    password: pw1,
                                }
                                axios({
                                    method: "POST",
                                    url: "http://app.utmatamoros.edu.mx/app_bienestar/api/registrar.php",
                                    data: JSON.stringify(values)
                                })
                                .then((res)=>{
                                    let val = res.data[0];
                                    if(val.Registered==true){
                                        navigation.navigate('Index');
                                        console.log('Registro exitoso')
                                    }else{
                                        alert("Error: No se pudo registar al usuario");
                                    }
                                })
                                .catch((error)=>{
                                    if(error.response){
                                        console.log(error.response);
                                        console.log('Error de conexion')
                                    }
                                })
                            }
                        }}>
                                <Text style={styles.btnLogInTxt}>Registrarse</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    title: {
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 10,
        fontSize: 24,
        fontFamily: 'MontserratBold',
        lineHeight: 24.38,
        color: '#404041',
    },
    inputsContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lblInput: {
        alignSelf: 'flex-start',
        marginLeft: 50,
        marginBottom: 4,
        fontFamily: 'MontserratSemiBold',
        fontSize: 16,
        color: '#404041',
    },
    InputLogin: {
        paddingLeft: 10,
        width: '80%',
        height: 50,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ABABAB',
        marginBottom: 5,
        fontFamily: 'MontserratRegular',
        fontSize: 16,
    },
    termsContainer: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    CancelButton: {
        backgroundColor: '#FFFFFF',
        borderColor: '#757575',
        borderWidth: 2,
        borderRadius: 4,
        alignItems: 'center',
        flex: 1,
        marginRight: 5,
    },
    btnCancelTxt: {
        fontFamily: 'MontserratRegular',
        fontSize: 20,
        lineHeight: 19.5,
        margin: 10,
        color: '#757575',
    },
    SignInButton: {
        backgroundColor: '#FFFFFF',
        borderColor: '#002244',
        borderWidth: 2,
        borderRadius: 4,
        alignItems: 'center',
        flex: 1,
        marginLeft: 5,
    },
    btnLogInTxt: {
        fontFamily: 'MontserratRegular',
        fontSize: 20,
        lineHeight: 19.5,
        margin: 10,
        color: '#002244',
    },
})

export default Register
