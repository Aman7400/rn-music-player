import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

const ScrollabelSongList = ({route,navigation}) => {
    const {list} = route.params

  return (
    <SafeAreaView>
      <Text>ScrollabelSongList</Text>
      <Text>{list}</Text>
      <Button onPress={() => navigation.goBack()}>
        Go bAck
      </Button>
    </SafeAreaView>
  )
}

export default ScrollabelSongList