import { useNavigation } from "@react-navigation/native";
import { ImageBackground, ScrollView, Text,TouchableOpacity } from "react-native";
import { discover } from "../../constants/data";
import Roboto from "../../constants/fonts";

export default function Discover() {
  const navigation = useNavigation()
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

            <TouchableOpacity key={i} onPress={() => navigation.navigate("SongList", { list: "Discover" })} >
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
                  Discover Card {i}
                </Text>
              </ImageBackground>
            </TouchableOpacity>


          )
        }
      </ScrollView>

    </>

  )
}
