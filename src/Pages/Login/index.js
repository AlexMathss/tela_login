import React from "react";
import {View, Text} from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function Login(){
    return(
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Animatable.View
                animation="fadeInLeft" delay={500}
            >
                <Text>Alex Matheus de Paula</Text>
            </Animatable.View>
        </View>
    )
}