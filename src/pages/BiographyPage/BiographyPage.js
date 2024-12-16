
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { useSelector } from "react-redux";

import styles from "./BiographyPage.style"
import BiographyItemCard from "../../components/BiographyItemCard/BiographyItemCard";
import RouterButton from "../../components/Buttons/RouterButton/RouterButton";




const BiographyPage = ({navigation}) => {


    const userData=useSelector(s=>s.userData.userData)

    return (
        <View style={styles.conteiner}>
            <ScrollView>

                {/* Routers */}
                <View style={styles.router_conteiner}>
                    <RouterButton imageKey="back" onPress={()=>navigation.navigate("ProfilePage")}/>

                    <RouterButton imageKey="warning"/>
                </View>


                {/* ProfilePhoto */}
                <View style={styles.profile_conteiner}>

                    <Image source={require("../../assets/profile_photo.png")} style={styles.profile_image} />

                    <View style={styles.name}>
                        <Text style={styles.name_title}>{userData.username}</Text>
                        <Image source={require("../../assets/verification.png")}
                            style={styles.verification} />
                    </View>

                </View>


                {/* Hobbies */}
                <View style={styles.biography_conteiner}>
                    <Text>{userData.hobbies}</Text>
                </View>

                

                {/* User Biograpy */}
                <View style={styles.settings_conteiner}>

                    <BiographyItemCard title="Uyruk" titleImageKey="nationality"
                        value={userData.nationality} valueImageKey="turkey" />

                    <BiographyItemCard title="Burç" titleImageKey="horoscope" value={userData.horoscope} />

                    <BiographyItemCard title="Boy" titleImageKey="ruler" value={userData.height} />

                    <BiographyItemCard title="Ağırlık" titleImageKey="weight_scale" value={userData.weight} />

                    <BiographyItemCard title="Meslek" titleImageKey="briefcase" value={userData.job} />

                    <BiographyItemCard title="Mevcut Konum" titleImageKey="pin_map"
                        value={userData.location} valueImageKey="turkey" />

                </View>



            </ScrollView>
        </View>


    )
}

export default BiographyPage;