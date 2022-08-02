import { useNavigation } from "@react-navigation/native";
import { ImageBackground, ScrollView, Text,TouchableOpacity } from "react-native";
import { discover, songs } from "../../constants/data";
import Roboto from "../../constants/fonts";
import SectionToolbar from "../SectionToolbar";

export default function Discover() {
  const navigation = useNavigation()
  const filterArray = songs.filter((song) => song.categories.includes("Discover"))
  return (
    <>
      <SectionToolbar action={() => navigation.navigate("SongList", {
                list: "Discover"
            })} title={"Discover this week's latest songs"} /> 

      <ScrollView bounces={false} horizontal={true} style={{
        marginLeft: 16
      }} showsHorizontalScrollIndicator={false}>
        {
          filterArray.map((item, i) =>

            <TouchableOpacity key={i} onPress={() => navigation.navigate("SongDetail", { song: item })} >
              <ImageBackground

                imageStyle={{
                  borderRadius: 16
                }}
                source={item.img}
                style={{
                  width: 360,
                  marginRight: i < discover.length - 1 ? 32 : 16,
                  height: 240,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Text style={{ fontSize: 32, color: "white", fontFamily: Roboto.bold }}>
                 Discover {item.title}
                </Text>
              </ImageBackground>
            </TouchableOpacity>


          )
        }
      </ScrollView>

    </>

  )
}
