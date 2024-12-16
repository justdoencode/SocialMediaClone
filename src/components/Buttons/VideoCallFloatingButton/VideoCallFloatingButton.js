
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import styles from "./VideoCallFloatingButton.style"

export default ()=>{
    return(
        <View style={styles.conteiner}>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.image} source={require("../../../assets/video_call.png")}/>
            </TouchableOpacity>
        </View>
    )
}