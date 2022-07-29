import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import { Card, Searchbar } from 'react-native-paper';
import Roboto from "../constants/fonts"
import { categories } from '../constants/data';


const Categories = () => {

  const [searchQuery, setSearchQuery] = React.useState('');

  const [filterArray, setFilterArray] = React.useState(categories)

  const onChangeSearch = query => {
    setSearchQuery(query);
    const searchedRes = categories.filter((category) => category.title.includes(query))
    setFilterArray(searchedRes)
  }

  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <View style={{
        paddingHorizontal: 16,
        flex: 1,
      }}>
        {/* Search Bar */}
        <Searchbar
          style={{
            marginVertical: 8,
            borderRadius: 8
          }}
          inputStyle={{
            color: "purple",
            fontFamily: Roboto.medium
          }}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        {/* Categories */}
        {filterArray.length > 0 && <ScrollView style={{
          marginVertical: 8,
        }}
          showsVerticalScrollIndicator={false}
          vertical={true}>

          {
            filterArray.map((category, index) =>
              <Card style={{ margin: 4 }} key={index}>
                <Card.Cover source={category.img} />
                <Card.Title title={category.title} />
              </Card>)
          }

        </ScrollView>}

        {/* Fallback for no results */}

        {
          filterArray.length === 0 &&
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",

          }}>
            <Text style={{
              fontFamily: Roboto.bold,
              fontSize: 24
            }}>
              Couldn't find "{searchQuery}"
            </Text>
            <Text style={{
              fontFamily: Roboto.light,
              fontSize: 16,
              textAlign: "center"
            }}>
              Try searching again using a different spelling or keyword.
            </Text>
          </View>
        }

      </View>

    </SafeAreaView>
  )
}

export default Categories

