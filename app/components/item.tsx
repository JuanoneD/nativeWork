import { StyleSheet, Text, View } from "react-native"
import {Image} from "expo-image"

export const Item = ({nome,age,data,image}:{nome:string,age:string,data:string,image:string})=>{
    return(
        <>
        <View style={style.itemList}>
            <Image source={image} style={style.imageSt} />
            <Text style={style.fonte}>{nome}</Text>
            <Text>{age}</Text>
            <Text style={style.fonte2}>{data}</Text>
        </View>
        </>
    )
}

const style = StyleSheet.create({
    itemList:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        margin:10,
        height:20,
        padding:40,
        paddingHorizontal:10,
        backgroundColor:"#414141"
    },
    imageSt:{
        width:30,
        height:30
    },
    fonte:{
        fontFamily:"Oswald",
        color:"#FFFFFF"
    },
    fonte2:{
        fontFamily:"Inter",
        color:"#FFFFFF"
    }
})