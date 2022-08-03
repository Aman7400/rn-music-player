import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-paper';
import { songs } from '../constants/data';
import { SongListItem } from '../components/SongListItem';
import ScreenToolbar from '../components/ScreenToolbar';

const ScrollabelSongList = ({ route, navigation }) => {
  const { list } = route.params

  const [filterArray, setFilterArray] = React.useState([])

  React.useState(() => {
    const selectedSongs = songs.filter((song) => song.categories.includes(list))
    setFilterArray([...selectedSongs])
  }, [list])

  

  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <View style={{padding:16,flex:1}}>
      <ScreenToolbar title="Showing Category" subtitle={list} onBack={()=>navigation.goBack()} />
      <ScrollView style={{
        padding: 8,
        flex:1
      }} vertical={true}>

        {

          filterArray.map((song, i) => <SongListItem key={i} song={song}/>)

        }

      </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ScrollabelSongList


