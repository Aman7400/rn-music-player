import { Image, Text, TouchableOpacity, View } from "react-native"
import { discover, songs } from "../../constants/data"
import Roboto from "../../constants/fonts"
import {useNavigation} from "@react-navigation/native"



export default function RecentlyPlayed() {
    const navigation = useNavigation()
    return (
        <>
            <Text style={{ fontSize: 16, margin: 16, fontFamily: Roboto.medium }}>
                Recently played
            </Text>

            <View style={{ paddingHorizontal: 16 }}>
                {
                    songs.filter((song) => song.categories.includes("Recently")).map((item, i) =>
                        <RecentlyPlayedItem onPress={() => navigation.navigate("SongList",{
                            list:"Recently"
                        })} key={i} item={item} />
                    )
                }
            </View>

        </>
    )
}

function RecentlyPlayedItem({ item, onPress }) {
    return (
        <TouchableOpacity
        onPress={onPress}
            style={{
                flexDirection: "row",
                marginBottom: 8,
            }}>
            <View>
                <Image style={{
                    width: 64, height: 64, borderRadius: 8
                }} source={item.img} />
            </View>
            <View style={{ flex: 1, padding: 8 }}>
                <Text style={{ fontSize: 16, fontFamily: Roboto.bold }}>
                    {item.title}
                </Text>
                <Text style={{ fontSize: 12, fontFamily: Roboto.regular }}>
                    {item.artists.join(", ")}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

