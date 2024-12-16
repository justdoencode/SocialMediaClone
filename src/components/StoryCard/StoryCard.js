import { Image, TouchableOpacity, View } from "react-native"
import React from "react"

import styles from "./StoryCard.style"


export default ({image}) => { 
    return (
        <TouchableOpacity style={styles.conteiner}>
            <Image source={{ uri: image.image }} style={styles.storyImage} />
        </TouchableOpacity>
    )
}