import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView, Pressable } from "react-native";
import * as Animatable from 'react-native-animatable';

import { useNavigation } from "@react-navigation/native";

export default function Home(){
    const navigation = useNavigation();
    return(
        <Animatable.View animation="fadeInUp" delay={600}
        style={styles.container}>
            <Image source={require('../../../assets/loginbg.png')} style={styles.cardImg}/>
            <View style={styles.containerCadastro}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.sub}>Please fill the input below here</Text>
                </View>
                <View style={styles.containerRegister}>
                    <View style={styles.cardRegister}>
                        <Image source={require('../../../assets/mensagem.png')} style={{width: 40, height: 40}}/>
                        <View style={styles.cardSeparator}>
                            <Text style={styles.titleSeparator}>Email</Text>
                            <TextInput
                                style={styles.inputEmail}
                                placeholder="user123@gmail.com"
                                placeholderTextColor="#FFF"
                            />
                        </View>
                        
                    </View>
                    <View style={styles.cardRegister}>
                        <Image source={require('../../../assets/password.png')} style={{width: 40, height: 40}}/>
                        <View style={styles.cardSeparator}>
                            <Text style={styles.titleSeparator}>Password</Text>
                            <TextInput
                                style={styles.inputEmail}
                                placeholder="Password"
                                secureTextEntry={true}
                                placeholderTextColor="#FFF"
                            />
                        </View>
                    </View>                   
                </View>
                <View style={styles.loginButton}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn}>
                        <Text style={styles.btnText}>LOGIN</Text>
                    </TouchableOpacity>
                    <Pressable>
                        <Text style={[styles.forgot, styles.buttonOpen]}>Forgot Password?</Text>
                    </Pressable>
                </View>
                <View style={styles.footer}>
                    <Text style={[styles.forgot, {fontSize: 15}]}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                            <Text style={styles.forgot}>Sign Up</Text>
                        </TouchableOpacity>
                    
                </View>
            </View>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor:'rgba(12,10,18,0.9)',
        height: '100%'
    },
    cardImg: {
        width: 240,
        height: 200
    },
    containerCadastro: {
        width: 300,
        height: 400,
        justifyContent: 'space-between'
    },
    containerTitle: {
        height: 60,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        color: 'white'
    },
    sub: {
        fontSize: 20,
        fontWeight: '500',
        color: '#C0C0C0'
    },
    containerRegister: {
        height: 150,
        justifyContent: 'space-between',
        
    },
    cardRegister: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingTop: 5,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#17f2de'
    },
    cardSeparator: {
        width: 250,
        height: '100%',
        justifyContent: 'space-between'
    },
    titleSeparator: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#6f677e',
        marginLeft: 10
    },
    inputEmail: {
        height: 40,
        fontSize: 20,
        paddingLeft: 10,
        color: 'white',
    },
    loginButton: {
        height: 90,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#17f2de',
        width: 150,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 17,
        fontWeight: '600'
    },
    footer: {
        height: 40,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    forgot: {
        fontSize: 15,
        color: '#17f2de',
        fontWeight: '600'
    }
})