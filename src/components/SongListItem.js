import { Image, Text, TouchableOpacity, View } from "react-native"
import Roboto from "../constants/fonts"
import Icon from "react-native-vector-icons/Ionicons"
import React from "react"
import { useNavigation } from "@react-navigation/native"



export function SongListItem({song}) {
    const {title,img,artists,categories} = song
    const [isLiked,setIsLiked] = React.useState(false)
    const navigation = useNavigation()
    return (
      <TouchableOpacity onPress={() => navigation.navigate("SongDetail",{song})}>
        <View style={{
          flexDirection: "row",
          marginBottom:8,
          backgroundColor:"white",
          borderRadius:8,
          padding:8,
  
        }}>
  
          <View >
            <Image source={img} style={{
              height: 64,
              width: 64,
              borderRadius:8
            }} />
          </View>
          <View style={{
            marginLeft: 8,
            flex: 1,
          }}>
            <Text style={{
              fontFamily: Roboto.bold,
              fontSize: 24
            }}>
              {title}
            </Text>
            <Text style={{
              fontFamily: Roboto.medium,
              fontSize: 14
            }}>
              {artists.toString()}
            </Text>
            <Text style={{
              fontFamily: Roboto.light,
              fontSize: 12
            }}>
              {categories.toString()}
            </Text>
          </View>
          <View>
            <Icon onPress={()=> setIsLiked(!isLiked)} color={isLiked ? 'red' : 'grey'} name={isLiked ? 'heart' : 'heart-outline'} size={24} />
          </View>
        </View>
  
      </TouchableOpacity>
    )
  }