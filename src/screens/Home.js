import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HomeHeader from '../components/home/Header'
import Discover from '../components/home/Discover'
import RecentlyPlayed  from '../components/home/RecentlyPlayed'
import Popular from '../components/home/Popular'

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
        <Popular />

      </ScrollView>

    </SafeAreaView>
  )
}

export default Home









