import React, {useState} from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import { SimpleModal } from "../SimpleModal";

export default function Confirm(){
    const [isModalVisible, setisModalVisible] = useState(false);
    const [chooseData, setchooseData] = useState();

    const changeModalVisible = (bool) => {
        setisModalVisible(bool)
    }

    const setData = (data) => {
        setchooseData(data)
    }
    return(
        <View>
            <Text style={styles.text}>
                {chooseData}
            </Text>
            <TouchableOpacity
            onPress={() => changeModalVisible(true)}
            style={styles.btn}>
                <Text style={styles.text}>Esqueceu a senha?</Text>
            </TouchableOpacity>
            <Modal
                transparent={true}
                animationType='fade'
                visible={isModalVisible}
                nRequestClose = {() => changeModalVisible(false)}
            >
                <SimpleModal
                    changeModalVisible={changeModalVisible}
                    setData={setData}
                />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        color: '#FF4500'
    }
})