import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatListHCarts = (props) => {
    console.log(props);
  return (
    <View style = {styles.view}>
      <Text  style = {styles.text1}>On this device({props.length})</Text>
      <Text  style = {styles.text}>Last used</Text>
    </View>
  )
}

export default FlatListHCarts

const styles = StyleSheet.create({
    view : {
        flex:1,
        flexDirection: "row",
        justifyContent : "space-between",
        padding: 15,
        borderWidth:1,
        borderColor:"#d5d5d5",
        alignItems: "center"
    },
    text1:{
        fontSize: 16,
        fontWeight: "bold"
    }
})