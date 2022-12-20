import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";
// import StepModal from "react-native-step-modal";

import * as Animatable from 'react-native-animatable';
import Confirm from "../../Componente/Confirm";

export default function Login(){
    const navigation = useNavigation();
    return(
        <View style={styles.content}>
            <Animatable.View
                animation="fadeInLeft" delay={500}
                style={styles.containerAnimation}
            >
               
                <View style={styles.container}>
                    <Image source={require('../../../assets/ranger.png')} style={styles.userImg}/>
                    <Text style={styles.username}>Alex Matheus</Text>
                </View>
                <View
                    style={styles.containerMain}>
                    <View style={styles.cardTitle}>
                        <Text style={styles.title}>Seja bem{'\n'}vindo</Text>
                    </View>
                    <View style={styles.cardPrincipal}>
                        <Text style={styles.conteudo}>
                            Criação de aplicativo realizado em React Native{'\n'}
                            destinado a estudos.
                        </Text>
                    </View>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btn}>
                        <Text style={styles.btnText}>Tela de Login</Text>
                    </TouchableOpacity>

                    
                    
                </View>
                
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center', 
        justifyContent: 'center', 
        flex: 1, 
        backgroundColor: 'rgba(12,10,18,0.9)'
    },
    containerAnimation: {
        width: '100%', 
        justifyContent: 'space-between', 
        flex: 1
    },
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    userImg: {
        width: 40, 
        height: 40
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    containerMain: {
        height: '93%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardTitle: {
        width: 150,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '600',
        color: '#FFF'
    },
    cardPrincipal: {
        width: 320,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    conteudo: {
        textAlign: 'center',
        fontSize: 17,
        color: '#FFF'
    },
    btn: {
        backgroundColor: '#6c63ff',
        width: 120,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    btnText: {
        fontWeight: '600',
        textTransform: 'uppercase',
        color: '#FFF'
    }
})