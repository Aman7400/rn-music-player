import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "../screens/Categories";
import Home from "../screens/Home";
import Notification from "../screens/Notification";
import ScrollabelSongList from "../screens/ScrollabelSongList";
import SongDetails from "../screens/SongDetails";


const Stack =  createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name ="SongList" options={({ route }) => ({ title: route.params.list,headerShown:true })} component={ScrollabelSongList} />
            <Stack.Screen name ="SongDetail" options={({ route }) => ({ title: route.params.song.title,headerShown:true })} component={SongDetails} />
            <Stack.Screen name ="Notification" component={Notification} />
        </Stack.Navigator>
    )
}

const CategoryStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Category" component={Categories} />
            <Stack.Screen name ="SongList"  options={({ route }) => ({ title: route.params.list,headerShown:true,headerBackTitleVisible:false })}  component={ScrollabelSongList} />
            <Stack.Screen name ="SongDetail" options={({ route }) => ({ title: route.params.song.title,headerShown:true,headerBackTitleVisible:false  })} component={SongDetails} />
        </Stack.Navigator>
    )
}

export {HomeStack,CategoryStack}