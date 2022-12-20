import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View, TextInput, KeyboardAvoidingView, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Formulario from '../../Componente/Formulario';

import { useNavigation } from "@react-navigation/native";


export default function Create(){
    const navigation = useNavigation();
    return(
        <View style={{backgroundColor: 'rgba(12,10,18,0.9)'}}>
        <Animatable.View animation="fadeInLeft" >
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.backIcon}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btnBack}>
                    <Image source={require('../../../assets/arrowp.png')} style={styles.btnImg}/>
                </TouchableOpacity>
            </View>

            <View style={styles.form}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Create Account</Text>
                    <Text style={styles.subTitle}>Please fill the input below here</Text>
                </View>
                <View style={styles.inputs}>
                    <Formulario
                        title={'Full name'}
                        place={'Alex Matheus de Paula'}
                        imagem={require('../../../assets/perfil.png')}
                    />
                    <Formulario
                        title={'Phone'}
                        place={'(**) 90000-0000'}
                        imagem={require('../../../assets/smart.png')}
                    />
                    <Formulario
                        title={'Email'}
                        place={'exeplo@exemplo.com.br'}
                        imagem={require('../../../assets/mensagem.png')}
                    />
                    <View style={styles.cardRegister}>
                        <Image source={require('../../../assets/lock.png')} style={styles.imgInput}/>
                        <View style={styles.cardSeparator}>
                            <Text style={styles.titleSeparator}>Password</Text>
                            <TextInput
                                style={styles.inputEmail}
                                placeholder='********'
                                placeholderTextColor="#FFF"
                            />
                        </View>
                    </View>
                    <View style={styles.cardRegister}>
                        <Image source={require('../../../assets/lock.png')} style={styles.imgInput}/>
                        <View style={styles.cardSeparator}>
                            <Text style={styles.titleSeparator}>Confirm Password</Text>
                            <TextInput
                                style={styles.inputEmail}
                                placeholder='********'
                                placeholderTextColor="#FFF"
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn}>
                    <Text style={styles.btnText}>SIGN UP</Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <Text style={[styles.forgot, {fontSize: 15, color: '#FFF'}]}>Already hava a acoount? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.forgot}>Sign In</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </KeyboardAvoidingView>
        </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor:'rgba(12,10,18,0.9)',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btnImg: {
        width: 40, 
        height: 40
    },
    imgInput: {
        width: 30, 
        height: 30
    },
    cardRegister: {
        height: 60,
        width: 380,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingTop: 5,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#6c63ff'
    },
    cardSeparator: {
        width: 320,
        height: '100%',
        justifyContent: 'space-between',
        borderRadius: 15,
    },
    titleSeparator: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#6f677e',
        marginLeft: 10,
        textTransform: 'uppercase',
        fontWeight: '600'
    },
    inputEmail: {
        height: 40,
        fontSize: 20,
        paddingLeft: 10,
        color: 'white'
    },
    backIcon: {
        width: '90%'
    },
    form: {
        height: '90%',
        width: '95%',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    title: {
        width: '100%',
        height: '8%',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    inputs: {
        height: '60%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleText: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: '600'
    },
    subTitle: {
        color: '#fff',
        fontSize: 20
    },
    btn: {
        backgroundColor: '#6c63ff',
        width: 150,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontWeight: 'bold',
        color: '#FFF'
    },
    footer: {
        height: 40,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    forgot: {
        fontSize: 15,
        color: '#6c63ff',
        fontWeight: '600'
    }
})