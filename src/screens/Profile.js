import { ActivityIndicator, Image, SafeAreaView, Switch, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import { AuthContext } from '../../contexts/AuthContext'
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import * as ImagePicker from "expo-image-picker";
import axios from 'axios'
import * as SecureStore from "expo-secure-store"
import {BACKEND_URL} from "@env"
import ScreenToolbar from "../components/ScreenToolbar"


const Profile = () => {

    const [isLoading, setIsLoading] = React.useState(false)
    const [isDarkModeOn, setIsDarkModeOn] = React.useState(false)
    // const { userProfile, isDarkModeOn, setIsDarkModeOn, setUserProfile } = React.useContext(AuthContext)
    const [img, setImg] = React.useState(null)

    const uploadImage = async () => {

        try {

            setIsLoading(true);


            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: "Images",
                aspect: [4, 3],
                quality: 1,
            });


            setImg(result.uri);


            // const formData = new FormData();
            // formData.append("profilePic", {
            //     uri: result.uri,
            //     type: 'image/jpg',
            //     name: 'image.jpg',
            // });



            // let token = await SecureStore.getItemAsync("token")

            // const res = await axios.post(`${BACKEND_URL}/user/profile`, formData, {
            //     headers: {
            //         Authorization: "Bearer " + token
            //     },
            //     enctype: "multipart/form-data",
            // })


            // if (res.data.message === 'Profile Updated') {

                setIsLoading(false);
            //     setUserProfile(res.data.updatedUser)
            //     alert("Profile Picture Updated Successfully")

            // }



        } catch (error) {

            setIsLoading(false);
            alert('Upload Error' + error)

        }

    }


    if (isLoading) {
        return <View style={{ flex: 1 }}>
            <ActivityIndicator style={{ flex: 1 }} />
        </View>
    }



    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
          <View style={{padding:16}}>

          <ScreenToolbar style={{marginBottom:4}} onBack={() => {}} title="Your" subtitle={"Profile"} />
            <View style={{
                borderRadius: 16,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
            }}>

                <TouchableOpacity
                    onPress={uploadImage}
                    style={{
                        position: "relative",
                        top: 120,
                        left: 40,
                        zIndex: 3,
                        height: 36,
                        width: 36,
                        backgroundColor: "violet",
                        justifyContent: 'center',
                        alignItems: "center",
                        borderRadius: 100

                    }}>
                    <Icon name="camera" size={18} color="white" />
                </TouchableOpacity>

                <Image resizeMode="cover" style={{
                    width: 120, height: 120,
                    borderRadius: 100,
                    marginBottom: 16
                }} source={{ uri: img || 'https://i0.wp.com/themarvelreport.com/wp-content/uploads/2019/05/Tony-Stark-Iron-Man.jpg?ssl=1' }} />
                <Text style={{
                    fontSize: 24,
                    fontWeight: "bold"
                }}>{"Aman"}</Text>
                <Text style={{
                    fontSize: 16,
                    fontWeight: "500"
                }}>{"amanks7400@gmail.com"}</Text>

                {/* Edit Profile */}
                <Button
                    mode="contained"
                    style={{
                        margin: 16,
                        borderRadius: 24,
                        padding: 2,
                        backgroundColor: "violet"
                    }}
                >
                    Edit Profile
                </Button>

                {/* Address */}
                <View style={{
                    width: "100%", marginVertical: 8,
                }}>
                    <Text style={{
                        padding: 8,
                        backgroundColor: "#94949440", color: "grey", fontWeight: "500", textTransform: "uppercase"
                    }}>
                        Content
                    </Text>

                    <TouchableOpacity style={{ flexDirection: 'row', padding: 8, alignItems: "center" }} >
                        <Icon name="heart-outline" size={18} />
                        <Text style={{
                            fontSize: 18,
                            marginLeft: 8

                        }}>
                            Favourites
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', padding: 8, alignItems: "center" }} >
                        <Icon name="download-outline" size={18} />
                        <Text style={{
                            fontSize: 18,
                            marginLeft: 8

                        }}>
                            Downloads
                        </Text>
                    </TouchableOpacity>

                </View>

                <View style={{
                    width: "100%", marginVertical: 16,
                }}>
                    <Text style={{
                        padding: 8,
                        backgroundColor: "#94949440", color: "grey", fontWeight: "500", textTransform: "uppercase"
                    }}>
                        Prefrences
                    </Text>

                    <TouchableOpacity style={{ flexDirection: 'row', padding: 8, alignItems: "center" }} >
                        <Icon name="globe-outline" size={18} />
                        <Text style={{
                            fontSize: 18,
                            marginLeft: 8

                        }}>
                            Languages
                        </Text>
                        <Text style={{
                            marginLeft: 'auto',
                            marginRight: 8
                        }} >
                            English
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', padding: 8, alignItems: "center" }} >
                        <Icon name="moon-outline" size={18} />
                        <Text style={{
                            fontSize: 18,
                            marginLeft: 8

                        }}>
                            Dark Mode
                        </Text>
                        <Switch onValueChange={async () => {
                            setIsDarkModeOn(!isDarkModeOn)
                            await SecureStore.setItemAsync("mode", !isDarkModeOn ? "dark" : "normal");

                        }} value={isDarkModeOn} style={{
                            marginLeft: 'auto'
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', padding: 8, alignItems: "center" }} >
                        <Icon name="wifi-outline" size={18} />
                        <Text style={{
                            fontSize: 18,
                            marginLeft: 8

                        }}>
                            Only Download via wifi
                        </Text>
                        <Switch value={false} style={{
                            marginLeft: 'auto'
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', padding: 8, alignItems: "center" }} >
                        <Icon name="layers-outline" size={18} />
                        <Text style={{
                            fontSize: 18,
                            marginLeft: 8

                        }}>
                            Play in Background
                        </Text>
                        <Switch value={false} style={{
                            marginLeft: 'auto'
                        }} />
                    </TouchableOpacity>


                </View>



            </View>
          </View>
        </SafeAreaView>
    )
}

export default Profile