
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import styles from "./CallFloatingButton.style"

export default ()=>{
    return(
        <View style={styles.conteiner}>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.image} source={require("../../../assets/call.png")}/>
            </TouchableOpacity>
        </View>
    )
}