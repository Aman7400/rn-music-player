import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native'
import React from 'react'
import greetings from '../../src/utils/greetings'
import Roboto from "../../src/constants/fonts"
import Icon from 'react-native-vector-icons/Ionicons'
import { discover } from '../constants/data'

const Home = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: "white"
    }}>

      <ScrollView alwaysBounceVertical={false} vertical={true} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <HomeHeader />

        {/* Discover */}
        <Discover />

        {/* Recently Played */}
        <RecentlyPlayed />
        {/* Popular */}

      </ScrollView>

    </SafeAreaView>
  )
}

export default Home


function HomeHeader() {

  const greeting = greetings()

  return (
    <View style={{
      paddingHorizontal: 16,
      paddingVertical: 16,
      flexDirection: "row",
      justifyContent: "space-between",
    }}>
      {/* Greeting */}

      <View>
        <Text style={{
          fontFamily: Roboto.bold,
          fontSize: 24
        }}>
          Hey Aman
        </Text>
        <Text style={{
          fontFamily: Roboto.regular,
        }}>
          {greeting}
        </Text>
      </View>
      {/* Search Button */}
      <TouchableOpacity>
        <Icon name="search" size={24} />
      </TouchableOpacity>
    </View>
  )
}

function Discover() {
  return (
    <>
      <Text style={{ fontSize: 16, marginBottom: 4, marginLeft: 16, fontFamily: Roboto.medium }}>
        Discover this week's latest songs
      </Text>


      <ScrollView bounces={false} horizontal={true} style={{
        marginLeft: 16
      }} showsHorizontalScrollIndicator={false}>
        {
          discover.map((item, i) =>

            <ImageBackground
              key={i}
              imageStyle={{
                borderRadius: 16

              }}
              source={item.img}
              style={{
                width: 360,
                marginRight: 32,
                height: 240,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 16

              }}>
              <Text style={{ fontSize: 32, color: "white", fontFamily: Roboto.bold }}>
                Discover Card {i}
              </Text>
            </ImageBackground>
          )
        }
      </ScrollView>

    </>

  )
}


function RecentlyPlayed() {
  return (
    <>
      <Text style={{ fontSize: 16, margin: 16, fontFamily: Roboto.medium }}>
        Recently played
      </Text>

      <View style={{ paddingHorizontal: 16 }}>
        {
          discover.map((item, i) =>
            <RecentlyPlayedItem item={item} />
          )
        }
      </View>

    </>
  )
}


function RecentlyPlayedItem({ item }) {
  return (
    <TouchableOpacity style={{ flexDirection: "row", marginBottom: 8 }}>
      <View>
        <Image style={{
          width: 64, height: 64, borderRadius: 16
        }} source={item.img} />
      </View>
      <View style={{ flex: 1, padding: 8 }}>
        <Text style={{ fontSize: 16, fontFamily: Roboto.regular }}>
          Some Random Song
        </Text>
      </View>
    </TouchableOpacity>
  )
}