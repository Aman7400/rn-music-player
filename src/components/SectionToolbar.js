import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import IonIcon from './IonIcon'
import Roboto from "../constants/fonts"

const SectionToolbar = ({title,action}) => {
  return (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16
    }}>
        <Text style={{ fontSize: 18, marginVertical: 16, fontFamily: Roboto.medium }}>
            {title}
        </Text>
        <TouchableOpacity onPress={action}>
            <IonIcon name="chevron-forward-outline" size={18} />
        </TouchableOpacity>

    </View>
  )
}

export default SectionToolbar