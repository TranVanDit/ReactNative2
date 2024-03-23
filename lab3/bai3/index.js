import { Image, SafeAreaView, StyleSheet, Text,View,FlatList} from "react-native";
import React from "react-native";


export default function Lab3Bai3() {
    const animals = [
        {
            item: 1,
            name: 'Shark',
            image: require('../../image/Shark.png')
            
        },
        {
            item:2,
            name: 'Herring',
            image: require('../../image/Hering.png')
        },
        {
            item: 3,
            name: 'Lion',
            image: require('../../image/Lion.png')
        },
        {
            item: 4,
            name: 'Polar Bear',
            image: require('../../image/PolarBear.png')
        },
        {
            item: 5,
            name: 'Penguin',
            image: require('../../image/Dragon.png')
        },
        {
            item: 6,
            name: 'Parrot',
            image: require('../../image/Shark.png')
        },
        {
            item: 7,
            name: 'Dragon',
            image: require('../../image/Shark.png')
        },
    ];
    const oneAnimal = ({ item }) => (
        <View style ={styles.item}>
        <View style={styles.avatarContainer}>
            <Image loadingIndicatorSource={item.image} style={styles.avatar}/>
        </View>
        <Text style={styles.name}>{item.name}</Text>
        </View>
    )

    headerComponent = () => {
        return <Text style={styles.listHeadline}>Animals</Text>
    }
    itemSeparator = () =>{
        return <View style={styles.separator}></View>
    }

    return (
        <SafeAreaView>
            <FlatList
                ListFooterComponentStyle = {styles.listHeader}
                ListHeaderComponent={headerComponent}
                data={animals}
                renderItem={oneAnimal}
                ItemSeparatorComponent={itemSeparator}
                ListEmptyComponent={<Text>This is a vrey flat list</Text>}
               
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    listHeader:{
        height:55,
        alignItems:'center',
        justifyContent:'center'
    },
    listHeadline:{
          color:'#333',
          fontSize:21,
          fontWeight:'bold',
          paddingBottom:20,
          paddingLeft:150
    },
    item:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:13,
    },
    avatarContainer:{
        backgroundColor:'#d9d9d9',
        borderRadius:100,
        height:89,
        width:89,
        justifyContent:'center',
        alignItems:'center',
    },
    avatar:{
        height:55,
        width:55,
    },
    separator:{
        height:1,
        width:'100%',
        backgroundColor:'#ccc'
    },
});