import { Link, router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { View, Text } from "react-native"
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FIREBASE_AUTH } from "./firebaseConfig";
import { FlatList } from "react-native-gesture-handler";

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error,setError] = React.useState(false);


    const onPress = () => {
        signInWithEmailAndPassword(FIREBASE_AUTH,email,password)
            .then((user)=>{
                console.log(user)
                router.push("/(tabs)/list")
                setError(false)
            }).catch((err)=>{
                console.log(err)
                setError(true)
            })
    };

    return (
        <>
            <SafeAreaView style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                <View style={styles.box}>
                    <Text style={{fontFamily:"Oswald",fontSize:"40px"}}>Login</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Email"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Senha"
                        secureTextEntry={true}
                    />
                    {error&&<Text style={{marginBottom:10}}>Email ou senha invalido!!</Text>}
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={styles.white}>Login</Text>
                    </TouchableOpacity>
                    <View>
                        <Link href={"/register"}>Cadastrar Usuario</Link>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    box:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:"80%"
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 12,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width:'120px'
    },
    white:{
        color:"white"
    }
})