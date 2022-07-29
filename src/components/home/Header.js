import { Text, TouchableOpacity, View } from "react-native"
import greetings from "../../utils/greetings"
import Roboto from "../../constants/fonts"
import Icon from 'react-native-vector-icons/Ionicons'

export default function HomeHeader() {

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
      {/* Notifications Button */}
      <TouchableOpacity>
        <Icon name="notifications-outline" size={24} />
      </TouchableOpacity>
    </View>
  )
}