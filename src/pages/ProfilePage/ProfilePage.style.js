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

    account_data_conteiner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 30,
        marginRight: 30,
    },
    account_data: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
    },
    profile_photo_conteiner: {
        width: 103,
        height: 103,
    },


    name_conteiner: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    name: {
        flexDirection: "row",
        marginRight: 30,
    },
    name_title: {
        fontWeight: "bold",
        fontSize: 17,
    },
    verification: {
        marginLeft: 5,
        alignSelf: "center",
    },
    items_conteiner: {
        flexDirection: "row",
    },
    women_item: {
        height: 20,
        width: 52,
        justifyContent: "center",
        paddingRight: 8,
        marginRight: 5,
    },
    user_age: {
        textAlign: "right",
        color: "white",
        fontSize: 12,
        fontWeight: "bold"
    },
    diamond: {
        marginRight: 5,
    },


    biography_conteiner: {
        overflow: "hidden",
        flexDirection: "row",
        backgroundColor: "#F3F4F6",
        padding: 15,
        margin: 20,
        borderRadius: 10,
    },
    biography_inner_conteiner: {
        flexDirection: "row",
    },
    country_conteiner: {
        flexDirection: "row",
        marginBottom: 8,
    },
    country: {
        flexDirection: "row",
        width: 94,
        height: 23,
        borderWidth: 1,
        borderColor: "#E3E3E3",
        borderRadius: 5,
        alignItems: "center",
        paddingLeft: 5,
        marginRight: 15,
    },
    country_title: {
        marginLeft: 5,

    },
    go_button: {
        justifyContent: "center",
        marginLeft: 70
    },



    profile_buttons_conteiner: {
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
        justifyContent: "space-between"
    },
    
   
    stories_conteiner: {
        marginTop: 30,
        flexDirection: "row",
    },


    posts_conteiner: {
        marginTop: 50,
    },
    posts_icons: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    posts: {
        marginTop: 20,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    gridItem: {
        width: '33%',
        height:140,
    },
    image: {
        width: '100%',
        aspectRatio: 1, 
    },


})