import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "../screens/Categories";
import Home from "../screens/Home";
import ScrollabelSongList from "../screens/ScrollabelSongList";


const Stack =  createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name ="SongList" component={ScrollabelSongList} />
        </Stack.Navigator>
    )
}

const CategoryStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Category" component={Categories} />
            <Stack.Screen name ="SongList" component={ScrollabelSongList} />
        </Stack.Navigator>
    )
}

export {HomeStack,CategoryStack}