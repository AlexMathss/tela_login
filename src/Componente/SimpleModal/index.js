import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, Alert } from "react-native";

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;

const SimpleModal = (props) => {

const closeModal = (bool, data) => {
    props.changeModalVisible(bool);
    props.setData(data);
}

const createButtonAlert = () => {
    Alert.alert(
        "Redefinição de senha",
        "Código enviado",
        [
            {
                text: "OK",
            }
        ]
    )
}
    return(
        
        <TouchableOpacity
            disabled={true}
            style={styles.container}
        >
            <View style={styles.modal}>
                <View style={[styles.inputView, {fontSize: 20}]}>
                    <TextInput
                        placeholder="Digite seu e-mail"
                        placeholderTextColor="black"
                        style={styles.inputSize}
                    />
                    <TextInput
                        placeholder="Confirme seu e-mail"
                        placeholderTextColor="black"
                        style={styles.inputSize}
                        testID='confirm'
                    />
                </View>
                <View style={styles.buttonsView}>
                    <TouchableOpacity onPress={() => closeModal(false)}
                    style={styles.touchableOpacity}>
                        <Text style={[styles.text,{color: 'blue'}]}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => closeModal(false, createButtonAlert)}
                    style={styles.touchableOpacity}>
                        <Text style={[styles.text,{color: 'blue'}]}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        height: HEIGHT_MODAL,
        width: WIDTH - 80,
        paddingTop: 10,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    inputView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    inputSize: {
        width: '90%',
        height: 30,
        paddingLeft: 10,
        backgroundColor: 'rgba(169,169,169,0.5)',
        borderRadius: 10
    },
    text: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonsView: {
        width: '100%',
        flexDirection: 'row'
    },
    noti: {
        color: 'orange',
        fontSize: 16,
        textAlign: 'center'
    },
    touchableOpacity: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center'
    }
});

export {SimpleModal}


// Anotações
// - Realizar autenticação para verificar se os campos do e-mail estão preenchidos e ativar o botão.