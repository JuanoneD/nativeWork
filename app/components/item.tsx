import { StyleSheet, Text, View } from "react-native"

export const Item = ({nome,age,data}:{nome:string,age:string,data:string})=>{
    return(
        <>
        <View style={style.itemList}>
            <Text>{nome}</Text>
            <Text>{age}</Text>
            <Text>{data}</Text>
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
    }
})