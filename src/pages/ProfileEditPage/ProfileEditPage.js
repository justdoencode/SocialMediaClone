
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'

import styles from "./ProfileEditPage.style"
import RouterButton from "../../components/Buttons/RouterButton/RouterButton";

import { useDispatch, useSelector } from "react-redux";
import { Formik} from "formik";
import ClassicButton from "../../components/Buttons/ClasicButton/ClassicButton";





const ProfileEditPage = ({navigation}) => {


    const userData=useSelector(s=>s.userData.userData)
    const countries=useSelector(s=>s.userData.country)
    const horoscopes=useSelector(s=>s.userData.horoscope)

    
    
    const dispatch = useDispatch();
    function handleFormSubmit(userData){
        dispatch({type:"UPDATE_DATA",payload:{userData}})
        console.log("dispatch: ",userData)
    }

    return (
        <View style={styles.conteiner}>
            <ScrollView>

                <View style={styles.router_conteiner}>
                    <RouterButton imageKey="back" onPress={()=>navigation.navigate("ProfilePage")}/>
                </View>

                <View style={styles.profile_conteiner}>

                    <Image source={require("../../assets/profile_photo.png")} style={styles.profile_image} />

                    <TouchableOpacity style={styles.profile_photo_edit_button}>
                        <Text style={styles.profile_photo_edit_button_title}>Profil resmini düzenle</Text>
                    </TouchableOpacity>

                </View>



                <Formik
                    initialValues={userData}
                    onSubmit={handleFormSubmit}
                >

                    {({ handleChange, values, handleSubmit, setFieldValue}) => (
                        <View style={styles.profile_edit_conteiner}>
                            <View style={styles.save_button_conteiner}>
                                <ClassicButton title="Bilgilerimi Kaydet" onPress={handleSubmit}/>
                            </View>
                            
                            {/* UserName */}
                            <View style={styles.item_edit_conteiner}>
                                <View style={styles.title_conteiner}>
                                    <Image source={require("../../assets/user.png")} />
                                    <View style={styles.title}>
                                        <Text style={styles.subject_title}>Kullanıcı Adı</Text>
                                    </View>

                                </View>

                                <TextInput style={styles.text_input}
                                    defaultValue={values.username}
                                    value={values.username}
                                    onChangeText={handleChange('username')}
                                />
                            </View>


                            {/* Biography */}
                            <View style={styles.item_edit_conteiner}>
                                <View style={styles.title_conteiner}>
                                    <Image source={require("../../assets/biography.png")} />
                                    <View style={styles.title}>
                                        <Text style={styles.subject_title}>Biyografi</Text>
                                    </View>
                                </View>

                                <TextInput style={styles.text_input}
                                    defaultValue={values.hobbies}
                                    value={values.hobbies}
                                    onChangeText={handleChange('hobbies')}
                                />
                            </View>



                            {/* Nationality */}
                            <View style={styles.item_edit_conteiner}>
                                <View style={styles.title_conteiner}>
                                    <Image source={require("../../assets/nationality.png")} />
                                    <View style={styles.title}>
                                        <Text style={styles.subject_title}>Uyruk</Text>
                                    </View>

                                </View>

                                <SelectList style={styles.select_list}
                                    placeholder="Ülke.."
                                    setSelected={(val) => {
                                        setFieldValue("nationality", val)
                                    }}

                                    data={countries}
                                    save="value"
                                    boxStyles={{ width: 200, borderWidth: 0 }}
                                />
                            </View>


                            {/* Horoscope */}
                            <View style={styles.item_edit_conteiner}>
                                <View style={styles.title_conteiner}>
                                    <Image source={require("../../assets/horoscope.png")} />
                                    <View style={styles.title}>
                                        <Text style={styles.subject_title}>Burç</Text>
                                    </View>

                                </View>

                                <SelectList style={styles.select_list}
                                    placeholder="Burç.."
                                    setSelected={(val) => {
                                        setFieldValue("horoscope", val)
                                    }}
                                    data={horoscopes}
                                    save="value"
                                    boxStyles={{ width: 200, borderWidth: 0 }}
                                />
                            </View>


                            {/* Height */}
                            <View style={styles.item_edit_conteiner}>
                                <View style={styles.title_conteiner}>
                                    <Image source={require("../../assets/ruler.png")} />
                                    <View style={styles.title}>
                                        <Text style={styles.subject_title}>Boy</Text>
                                    </View>
                                </View>

                                <TextInput style={styles.text_input}
                                    defaultValue={values.height}
                                    value={values.height}
                                    onChangeText={handleChange('height')}
                                />
                            </View>


                            {/* Weight */}
                            <View style={styles.item_edit_conteiner}>
                                <View style={styles.title_conteiner}>
                                    <Image source={require("../../assets/weight_scale.png")} />
                                    <View style={styles.title}>
                                        <Text style={styles.subject_title}>Ağırlık</Text>
                                    </View>
                                </View>

                                <TextInput style={styles.text_input}
                                    defaultValue={values.weight}
                                    value={values.weight}
                                    onChangeText={handleChange('weight')} />
                            </View>


                            {/* Job */}
                            <View style={styles.item_edit_conteiner}>
                                <View style={styles.title_conteiner}>
                                    <Image source={require("../../assets/briefcase.png")} />
                                    <View style={styles.title}>
                                        <Text style={styles.subject_title}>Meslek</Text>
                                    </View>
                                </View>

                                <TextInput style={styles.text_input}
                                    defaultValue={values.job}
                                    value={values.job}
                                    onChangeText={handleChange('job')} />
                            </View>


                            {/* Location */}
                            <View style={styles.item_edit_conteiner}>
                                <View style={styles.title_conteiner}>
                                    <Image source={require("../../assets/pin_map.png")} />
                                    <View style={styles.title}>
                                        <Text style={styles.subject_title}>Mevcut Konum</Text>
                                    </View>

                                </View>

                                <SelectList style={styles.select_list}
                                    placeholder="Konum.."
                                    setSelected={(val) => {
                                        setFieldValue("location", val)
                                    }}
                                    data={countries}
                                    save="value"
                                    boxStyles={{ width: 200, borderWidth: 0 }}
                                />
                            </View>


                            {/* Date Of Birth */}
                            <View style={styles.item_edit_conteiner}>
                                <View style={styles.title_conteiner}>
                                    <Image source={require("../../assets/date.png")} />
                                    <View style={styles.title}>
                                        <Text style={styles.subject_title}>Doğum Tarihi</Text>
                                    </View>
                                </View>

                                <TextInput style={styles.text_input}
                                    defaultValue={values.dob}
                                    value={values.dob}
                                    onChangeText={handleChange('dob')} />
                            </View>
                            
                            
                        </View>

                    )}

                </Formik>



            </ScrollView>
        </View>


    )
}

export default ProfileEditPage;