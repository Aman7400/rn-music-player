import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-paper';
import { songs } from '../constants/data';
import Roboto from "../constants/fonts"

const ScrollabelSongList = ({ route, navigation }) => {
  const { list } = route.params

  const [filterArray, setFilterArray] = React.useState([])

  React.useState(() => {

    const selectedSongs = songs.filter((song) => song.categories.includes(list))
    setFilterArray([...selectedSongs])

  }, [list])

  return (
    <SafeAreaView>
      <Text>ScrollabelSongList</Text>
      <Text>{list}</Text>
      <Button onPress={() => navigation.goBack()}>
        Go bAck
      </Button>

      <ScrollView style={{
        padding: 16
      }} vertical={true}>

        {

          filterArray.map((song, i) => <SongListItem key={i} song={song}/>)

        }

      </ScrollView>

    </SafeAreaView>
  )
}

export default ScrollabelSongList


function SongListItem({song}) {
  const {title,img,artists,categories} = song
  return (
    <TouchableOpacity >
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
          marginLeft: 8
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
      </View>

    </TouchableOpacity>
  )
}