import { StyleSheet } from "react-native";

export default StyleSheet.create({
    conteiner: {
        flexGrow: 1,
        backgroundColor: "#FFFFFF",
    },

    router_conteiner: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
        marginLeft: 15,
    },
    
    
    profile_conteiner:{
        alignItems:"center",
        marginTop:20,
    },
    profile_image:{
        height:103,
        width:103,
    },
    name: {
        flexDirection: "row",
        alignItems:"center",
    },
    name_title: {
        fontWeight: "bold",
        fontSize: 17,
        textAlign:"center"
    },
    verification: {
        marginLeft: 5,
    },

    biography_conteiner:{
        marginLeft:40,
        marginRight:40,
        marginTop:30,
    },


    settings_conteiner:{
        marginLeft:40,
        marginRight:40,
    },
    nationality:{
        flexDirection:"row",
        alignItems:"center",
    },
    subject_title:{
        fontWeight:"bold",
        fontSize:20,
        marginLeft:7,
        textAlign:"center"
    },
    subject_value:{
        fontSize:20,
        marginLeft:20,
        marginRight:5,
    }

})