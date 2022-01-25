import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import GlobalStyles from '../style/GlobalStyles';
import { authentification } from '../Firebase/Config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Register({navigation}) {

    const [password, setPassword] = useState("")
    const [tmp, setTemp] = useState("")
    const [email, setEmail] = useState("")

    const register = () => {

        if(email.length != 0 || password.length != 0){
            createUserWithEmailAndPassword(authentification,email,password)
            .then(() => {
                navigation.navigate("Identification")
            })
            .catch(err => {
                console.log(err)
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
          source={require("../assets/RegisterLogo.jpg")}
          style = {GlobalStyles.newImg}
      />
      <View style = {GlobalStyles.parentContainer}>
            <View style = {GlobalStyles.inputParentContainer}>
                <TextInput
                    placeholder='Email Address'
                    style = {GlobalStyles.input}
                    keyboardType='email-address'
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                />
                <TextInput
                    placeholder='Password'
                    style = {GlobalStyles.input}
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    secureTextEntry={true}
                />
                <TextInput
                    placeholder='Confirm password'
                    style = {GlobalStyles.input}
                    value={tmp}
                    onChangeText={(t) => setTemp(t)}
                    secureTextEntry={true}
                />
                {
                    tmp != "" &&
                    password != tmp? (<Text style = {{color: "red", fontSize: 15, fontWeight: "bold"}}>Passwords are not similar</Text>):(<Text></Text>) 
                }
            </View>
            <View style = {GlobalStyles.buttonsParentContainer}>
                <TouchableOpacity style = {[GlobalStyles.button, {
                    backgroundColor: "#7762E5", 
                    marginTop: 5,
                    shadowColor: "#444444",
                    shadowOffset: {
                        width: 2,
                        height: 2
                    },
                    shadowRadius: 20,
                    shadowOpacity: 0.8,
                    elevation: 7,
                    }]}
                    onPress={() => register()}
                    disabled={tmp == ""? true:false}
                >
                    <Text style = {[GlobalStyles.buttonText, {color: "#fff"}]}>
                        Sign up
                    </Text>
                </TouchableOpacity>
          </View>
      </View>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}
