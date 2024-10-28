import { Link, router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { View,Text, SafeAreaView, TouchableOpacity,StyleSheet} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { FIREBASE_AUTH } from "./firebaseConfig";

export default function Register(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [pasword1, setPassword1] = React.useState('');
    const [error,setError] = React.useState(false);

    const onPress = () => {
        console.log(email, password,pasword1)
        if(password!==pasword1){
            setError(true)
            return
        }
        createUserWithEmailAndPassword(FIREBASE_AUTH,email,password)
            .then((user)=>{
                console.log(user)
                setError(false)
                router.push("/")
            }).catch((err)=>{
                console.log(err)
                setError(true)
            })
    };
    
    return(
        <>
            <SafeAreaView style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
            <View style={{display:"flex",justifyContent:"flex-start",width:"300px"}}>
                <Link href={"/"}>◀️</Link>
            </View>
                <Text style={{fontFamily:"Oswald",fontSize:"30px"}}>Registrar Usuario</Text>
                <View style={styles.box}>
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
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword1}
                        value={pasword1}
                        placeholder="Confirmar Senha"
                        secureTextEntry={true}
                    />
                    {error&&<Text style={{marginBottom:10}}>Senha ou Email invalido!!</Text>}
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={styles.white}>Criar conta</Text>
                    </TouchableOpacity>
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
        width:"300px"
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'black',
        width:'120px',
        padding: 12,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    white:{
        color:"white"
    }
})