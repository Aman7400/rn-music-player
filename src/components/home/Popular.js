import { useNavigation } from "@react-navigation/native"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { discover, songs } from "../../constants/data"
import Roboto from "../../constants/fonts"
import SectionToolbar from "../SectionToolbar"


export default function Popular() {
    const navigation = useNavigation()
    const filterArray = songs.filter((song) => song.categories.includes("Discover"))

    return (
        <>
            <SectionToolbar title={"Populat Songs"} action={() => navigation.navigate("SongList", {
                list: "Popular"
            })} />
            <ScrollView

                showsHorizontalScrollIndicator={false}

                style={{
                    paddingHorizontal: 16,
                    paddingTop: 0,
                    paddingBottom: 32
                }} horizontal={true}>

                {
                    filterArray.map((item, index) => <PopularItemCard item={item} key={index} />)
                }

            </ScrollView>
        </>

    )
}

function PopularItemCard({ item }) {
    const navigation = useNavigation()
    return (

        <TouchableOpacity onPress={() => navigation.navigate("SongDetail", { song: item })} style={{
            marginRight: 16,
            width: 180
        }}>
            <Image style={{
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                height: 240,
                maxWidth: 180

            }} source={item.img} />
            <View style={{
                padding: 8,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                backgroundColor: "white",
            }}>
                <Text style={{ fontSize: 16, fontFamily: Roboto.medium }}>
                    {item.title}
                </Text>
            </View>

        </TouchableOpacity>

    )
}