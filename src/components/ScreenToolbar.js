import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import IonIcon from './IonIcon'
import Roboto from "../constants/fonts"


const ScreenToolbar = ({ title, subtitle, onBack }) => {
    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between", marginBottom: 32
        }}>

            <IonIcon onPress={onBack} name="arrow-back-outline" color="violet" size={30} />

            <View style={{ alignItems: "center", }}>
                <Text style={{
                    fontFamily: Roboto.light, fontSize: 12
                }}>{title} </Text>
                {subtitle && <Text style={{
                    fontFamily: Roboto.medium, fontSize: 16
                }} >{subtitle}</Text>}
            </View>

            <IonIcon name="ellipsis-vertical" color="violet" size={30} />

        </View>
    )
}

export default ScreenToolbar