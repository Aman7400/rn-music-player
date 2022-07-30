import { Image, Text, TouchableOpacity, View } from "react-native"
import { discover, songs } from "../../constants/data"
import Roboto from "../../constants/fonts"
import { useNavigation } from "@react-navigation/native"
import Icon from "react-native-vector-icons/Ionicons"
import { SongListItem } from "../SongListItem"



export default function RecentlyPlayed() {
    const navigation = useNavigation()
    const filterArray = songs.filter((song) => song.categories.includes("Recently"))
    return (
        <>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 16
            }}>
                <Text style={{ fontSize: 18, marginVertical: 16, fontFamily: Roboto.medium }}>
                    Recently played
                </Text>

                <TouchableOpacity onPress={() => navigation.navigate("SongList", {
                    list: "Recently"
                })}>
                    <Icon name="chevron-forward-outline" size={18} />

                </TouchableOpacity>

            </View>

            <View style={{ paddingHorizontal: 16 }}>
                {
                    filterArray.length > 2 && filterArray.slice(0, 2).map((item, i) =>
                        <SongListItem onPress={() => navigation.navigate("SongList", {
                            list: "Recently"
                        })} key={i} song={item} />
                    )
                }
            </View>

        </>
    )
}


