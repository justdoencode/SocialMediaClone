import { Image, TouchableOpacity, View } from "react-native"
import React from "react"

import styles from "./StoryAddCard.style"


export default () => {
    return (
        <TouchableOpacity style={styles.conteiner}>
            <Image source={require("../../assets/plus.png")} style={styles.storyImage} />
        </TouchableOpacity>
    )
}