import { View, Text, Image, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import Roboto from "../constants/fonts"
import { ProgressBar } from 'react-native-paper';
import IonIcon from '../components/IonIcon';
import ScreenToolbar from '../components/ScreenToolbar';


const SongDetails = ({ route, navigation }) => {
    const { img, title, categories, artists } = route.params.song
    const [playing, setPlaying] = React.useState(true)
    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <View style={{
                flex: 1,
                padding: 24,
                position: "relative"
            }}>

                <ScreenToolbar title={"Playing"} subtitle={title} onBack={() => navigation.goBack()} />
                <View style={{

                }}>
                    <Image source={img} style={{
                        height: 300,
                        width: (Dimensions.get("screen").width - 48),
                        borderRadius: 16
                    }} />
                </View>
                {/* Song information */}
                <SongInformation song={route.params.song} />
                {/* ProgressBar */}
                <View style={{ marginVertical: 8 }}>
                    <ProgressBar progress={0.5} color="violet" />
                </View>
                {/* Play Buttons */}
                <PlayButtons playing={playing} setPlaying={() => setPlaying(!playing)} />
                {/* Share */}
                <View style={{ marginTop: "auto", justifyContent: "flex-end", flexDirection: "row" }}>
                    <Icon suppressHighlighting={true} onPress={() => alert("Sharing on Social Media")} name="share-social" style={{ marginRight: 8 }} size={30} />
                    <IonIcon name="albums-outline" onPress={() => alert("Album Info")} style={{ marginRight: 8 }} size={30} />
                </View>

            </View>

        </SafeAreaView>
    )
}

function SongInformation({ song }) {

    const { title, artists } = song;
    const [isLiked, setIsLiked] = React.useState(false)

    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16, marginTop: 48 }}>
            <View>
                <Text style={{
                    fontSize: 24,
                    fontFamily: Roboto.bold
                }}>{title}</Text>
                <Text style={{
                    fontSize: 16,
                    fontFamily: Roboto.light
                }}>{artists.toString()}</Text>
            </View>
            <View>
                <Icon suppressHighlighting={true} onPress={() => setIsLiked(!isLiked)} color={isLiked ? 'violet' : 'grey'} name={isLiked ? 'heart' : 'heart-outline'} size={30} />
            </View>
        </View>
    )

}

function PlayButtons({ playing, setPlaying }) {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: 8
        }}>
            {/* Shuffle */}
            <Icon name="shuffle" size={30} />
            {/* Prev */}
            <Icon name="play-back" color="violet" size={30} />

            {/* Play / Pause */}
            <TouchableOpacity style={{
                borderRadius: 50,
                width: 64,
                height: 64,
                backgroundColor: "violet",
                justifyContent: "center",
                alignItems: "center",
            }} onPress={setPlaying}>
                <Icon suppressHighlighting={true} color="white" name={playing ? "play" : "pause"} size={36} />
            </TouchableOpacity>
            {/* Next */}
            <Icon name="play-forward" color="violet" size={30} />


            {/* Repeat */}
            <Icon name="repeat" size={30} />
        </View>
    )
}

export default SongDetails