import { Image, ScrollView, Text, View } from "react-native"
import { discover } from "../../constants/data"
import Roboto from "../../constants/fonts"


export default function Popular() {
    return (
        <>
            <Text style={{ fontSize: 16, margin: 16, fontFamily: Roboto.medium }}>
                Popular Songs
            </Text>
            <ScrollView

                showsHorizontalScrollIndicator={false}

                style={{
                    paddingHorizontal: 16,
                    paddingTop: 0,
                    paddingBottom: 32
                }} horizontal={true}>

                {
                    discover.map((item, index) => <PopularItemCard item={item} key={index} />)
                }

            </ScrollView>
        </>

    )
}

function PopularItemCard({ item }) {
    return (

        <View style={{
            marginRight: 16,
            width: 180
        }}>
            <Image style={{
                borderRadius: 16,
                height: 240,
                maxWidth: 180

            }} source={item.img} />

            <Text style={{ fontSize: 16, fontFamily: Roboto.medium }}>
                {item.title || 'Some title Goes here which is very long'}
            </Text>

        </View>

    )
}