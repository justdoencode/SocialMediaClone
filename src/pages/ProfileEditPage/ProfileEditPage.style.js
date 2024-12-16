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

    profile_photo_edit_button:{
        marginTop:20,
    },
    profile_photo_edit_button_title:{
        fontWeight:"bold",
        fontSize:20,
    },
    
    
    
    profile_edit_conteiner:{
        marginLeft:20,
        marginRight:20,
        marginTop:30,
    },
    save_button_conteiner:{
        alignItems:"center",
    },
    item_edit_conteiner: {
        flexDirection: "row",
        alignItems: "center",
        marginTop:10,
        overflow:"hidden",
    },
    title_conteiner:{
        marginRight:20,
        flexDirection:"row",
        alignItems:"center",
        width:130,
    },
    title:{
        width:100,
    },
    subject_title: {
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 7,
        flexWrap:"wrap",
    },
    text_input:{
        fontSize:20,
    },
    select_list:{
        width:150,
    }


})