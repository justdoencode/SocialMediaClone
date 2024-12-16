
import React from "react";

import styles from "./RouterButton.style"
import { Image, TouchableOpacity } from "react-native";

const image={
    back:require('../../../assets/back.png'),
    warning:require('../../../assets/warning.png'),
    add:require('../../../assets/add.png'),
}


export default ({imageKey,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={image[imageKey]} style={styles.back_button} />
        </TouchableOpacity>
    )
}