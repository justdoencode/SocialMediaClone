
import React, { useEffect } from "react";
import { FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";

import styles from "./ProfilePage.style"
import StoryCard from "../../components/StoryCard/StoryCard";
import StoryAddCard from "../../components/StoryAddCard/StoryAddCard";
import CallFloatingButton from "../../components/Buttons/CallFloatingButton/CallFloatingButton";
import VideoCallFloatingButton from "../../components/Buttons/VideoCallFloatingButton/VideoCallFloatingButton";
import ClassicButton from "../../components/Buttons/ClasicButton/ClassicButton";
import RouterButton from "../../components/Buttons/RouterButton/RouterButton";



import { useSelector} from "react-redux";


const ProfilePage = ({ navigation }) => {


    const userData = useSelector(s => s.userData.userData)
    const posts = useSelector(s => s.userData.post)
    const stories = useSelector(s => s.userData.story)

    return (
        <View style={styles.conteiner}>
            <ScrollView>

                {/* Routers */}
                <View style={styles.router_conteiner}>
                    <RouterButton imageKey="back" />

                    <RouterButton imageKey="add" />
                </View>


                {/* Statistics and profile photo */}
                <View style={styles.account_data_conteiner}>
                    <View>
                        <Text style={styles.account_data}>{userData.following}</Text>
                        <Text>Takip</Text>
                    </View>

                    <View>
                        <Text style={styles.account_data}>{userData.followers}</Text>
                        <Text>Takipçi</Text>
                    </View>

                    <View>
                        <Text style={styles.account_data}>{userData.posts}</Text>
                        <Text>Gönderi</Text>
                    </View>

                    <View style={styles.profile_photo_conteiner}>
                        <Image source={require("../../assets/profile_photo.png")} />
                    </View>

                </View>


                {/* User name and properties */}
                <View style={styles.name_conteiner}>

                    <View style={styles.name}>
                        <Text style={styles.name_title}>{userData.username}</Text>
                        <Image source={require("../../assets/verification.png")}
                            style={styles.verification} />
                    </View>

                    <View style={styles.items_conteiner}>

                        <ImageBackground source={require("../../assets/women.png")}
                            style={styles.women_item}
                            imageStyle={{ borderRadius: 20, }}>

                            <Text style={styles.user_age}>{userData.age}</Text>
                        </ImageBackground>

                        <Image source={require("../../assets/diamond.png")} style={styles.diamond} />

                        <Image source={require("../../assets/vip.png")} />

                    </View>

                </View>


                {/* Biograpy */}
                <TouchableOpacity style={styles.biography_conteiner}
                    onPress={() => navigation.navigate("BiographyPage")}>

                    <View>

                        <View style={styles.country_conteiner}>

                            <View style={styles.country}>
                                <Image source={require("../../assets/flag_turkey.png")} />
                                <Text style={styles.country_title}>{userData.nationality}</Text>
                            </View>

                            <View style={styles.country}>
                                <Image source={require("../../assets/leo.png")} />
                                <Text style={styles.country_title}>{userData.horoscope}</Text>
                            </View>

                        </View>
                        <Text>{userData.hobbies}</Text>

                    </View>

                    <View style={styles.go_button}>
                        <Image source={require("../../assets/go.png")} />
                    </View>

                </TouchableOpacity>


                {/* Profile Buttons */}
                <View style={styles.profile_buttons_conteiner}>

                    <ClassicButton title="Profili Düzenle" onPress={() => navigation.navigate("ProfileEditPage")} />
                    <ClassicButton title="Profili Paylaş" />

                </View>


                {/* Stories */}
                <View style={styles.stories_conteiner}>
                    <StoryAddCard />
                    <FlatList data={stories}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <StoryCard image={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>



                {/* Posts */}
                <View style={styles.posts_conteiner}>
                    <View style={styles.posts_icons}>
                        <Image source={require("../../assets/photos_icon.png")} />
                        <Image source={require("../../assets/reels_icon.png")} />
                        <Image source={require("../../assets/align_icon.png")} />
                    </View>

                    <View style={styles.posts}>
                        <View style={styles.grid}>
                            {posts.map((image, index) => (
                                <TouchableOpacity key={index} style={styles.gridItem}>
                                    <Image source={{ uri: image }} style={styles.image} />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                </View>


            </ScrollView>
            <CallFloatingButton />
            <VideoCallFloatingButton />
        </View>


    )
}

export default ProfilePage;