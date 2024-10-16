import { StyleSheet, Text,StatusBar, View,FlatList } from "react-native";
import DATA from "@/app/constants/data.json"
import { Item } from "../components/item";

export default function List() {
    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item nome={item.nome} age={item.idade} data={item.data} s />}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    )
};

const styles = StyleSheet.create({
back:{
    padding:1
},

    container: {
      flex: 1,
      padding:1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });