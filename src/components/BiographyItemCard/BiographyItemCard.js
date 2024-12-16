
import React from "react";
import { Image, Text, View } from "react-native";

import styles from "./BiographyItemCard.style"


const title_images = {
    nationality: require('../../assets/nationality.png'),
    pin_map: require('../../assets/pin_map.png'),
    briefcase: require('../../assets/briefcase.png'),
    weight_scale: require('../../assets/weight_scale.png'),
    ruler: require('../../assets/ruler.png'),
    horoscope: require('../../assets/horoscope.png'),
  };

  const value_image={
    turkey: require('../../assets/turkey.png'),
  }

export default ({title,value,valueImageKey,titleImageKey}) => {
    return (
        <View style={styles.conteiner}>
            <Image source={title_images[titleImageKey]} />
            <Text style={styles.subject_title}>{title}</Text>

            <Text style={styles.subject_value}>{value}</Text>

            {
                valueImageKey ?(
                    <Image source={value_image[valueImageKey]} />
                ):(
                    null
                )
            }
        </View>
    )
}