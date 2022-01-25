import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import GlobalStyles from '../style/GlobalStyles';
import { authentification } from '../Firebase/Config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Identification({navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShown, setIsShown] = useState(true)

  const signIn = () => {
    
    if(email.length != 0 || password.length != 0){
        signInWithEmailAndPassword(authentification,email,password)
        .then(() => {
            navigation.replace("Home")
        })
        .catch(err => {
            console.log(err);
            alert("Invalid email address or password")
        })    
    }else{
        Alert.alert("Oooops","You forgot to fill everything")
    }
  }

  return (
      <TouchableWithoutFeedback
        onPress={() => {Keyboard.dismiss()}}
      >
    <View style={GlobalStyles.container}>
        <Image
            source={require("../assets/loginLogo.jpg")}
            style = {GlobalStyles.img}
        />
        <View style = {GlobalStyles.parentContainer}>
            <View style = {GlobalStyles.inputParentContainer}>
                <TextInput
                    placeholder='Email Address'
                    style = {GlobalStyles.input}
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    keyboardType='email-address'
                />
                <TextInput
                    placeholder='Password'
                    style = {GlobalStyles.input}
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    secureTextEntry={isShown}
                />
            </View>
            <View style = {GlobalStyles.buttonsParentContainer}>
                <TouchableOpacity
                    style = {[GlobalStyles.button, {
                        backgroundColor: "#FAE342", 
                        shadowColor: "#444444",
                        shadowOffset: {
                            width: 2,
                            height: 2
                        },
                        shadowRadius: 20,
                        shadowOpacity: 0.8,
                        elevation: 5,
                        }]}
                    onPress={() => signIn()}
                >
                    <Text style = {[GlobalStyles.buttonText, {color: "#93226D"}]}>
                        Sign in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {[GlobalStyles.button, {backgroundColor: "#93226D"}]}
                    onPress={() => navigation.navigate("Register")}
                >
                    <Text style = {[GlobalStyles.buttonText, {color: "#fff"}]}>
                        Register Now
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}
