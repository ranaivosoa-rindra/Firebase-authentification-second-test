import { Image, Text, View, StatusBar, TouchableOpacity, Alert } from 'react-native';
import GlobalStyles from '../style/GlobalStyles';
import { authentification } from '../Firebase/Config';
import { signOut } from 'firebase/auth';


export default function Home({navigation}) {

    const logout = () => {
        signOut(authentification)
        .then(() => {
            navigation.replace("Identification");
        })
        .catch(err => {
            console.log(err)
        })
    }

  return (
    <View style={[GlobalStyles.container, {backgroundColor: "#fff"}]}>
        <Image
            source={require("../assets/HomeLogo.jpg")}
            style = {GlobalStyles.welcomeImg}
        />
        <View style = {[GlobalStyles.parentContainer, {width: "100%", justifyContent: "center", height: "50%"}]}>
            <View style = {{alignItems: "center", marginBottom: 50}} >
                <Text style = {[GlobalStyles.buttonText, {fontSize: 20, color: "#E31484"}]}>
                    Welcome 
                </Text>
                <Text style = {[GlobalStyles.buttonText, {fontSize: 17, color: "#4B80ED"}]}>
                    {authentification.currentUser?.email}
                </Text>
            </View>
            <TouchableOpacity 
                style = {[GlobalStyles.button, {marginHorizontal: 40, backgroundColor: "#CF148C"}]}
                onPress={() => logout()}    
            >
                <Text style = {[GlobalStyles.buttonText, {color: "#fff"}]}>
                    Log out
                </Text>
            </TouchableOpacity>
        </View>
        <StatusBar hidden={true} />
    </View>
  );
}
