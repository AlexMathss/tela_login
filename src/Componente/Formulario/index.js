import React from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';

export default function Formulario({
    title,
    place,
    imagem
}){
    return(
        <View style={styles.cardRegister}>
            <Image source={imagem} style={styles.imgInput}/>
            <View style={styles.cardSeparator}>
                <Text style={styles.titleSeparator}>{title}</Text>
                <TextInput
                    style={styles.inputEmail}
                    placeholder={place}
                    placeholderTextColor="#FFF"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    imgInput: {
        width: 30, 
        height: 30
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
    
})