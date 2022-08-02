import { View, Text } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"

const IonIcon = ({name,size,color,onPress}) => {
  return (
    <Icon suppressHighlighting={true} onPress={onPress} color={color} size={size} name={name}  />
  )
}

export default IonIcon