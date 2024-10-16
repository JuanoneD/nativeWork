import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native"

export const Header =({image}:{image:ImageSourcePropType})=>{
    return(
        <>
            <View style={styles.background}>
                <Text style={styles.white}>Header Exemplo</Text>
                <Image source={image}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
  background:{
    backgroundColor:"#090909",
    display:"flex",
    alignItems:"center",
    paddingHorizontal:10,
    paddingVertical:30

  },
  white:{
    color:"#ffffff",
    fontWeight:"900",
    fontSize:30
  }
})