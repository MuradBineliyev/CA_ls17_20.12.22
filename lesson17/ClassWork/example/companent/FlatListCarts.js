import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FlatListCarts = ({item}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.imgView}>
          <Image
            style = {styles.img}
            source={{
              uri : item.img
            }}
          />
      </View>
      <View style={styles.content}>
          <Text numberOfLines={1} style ={styles.text1}>{item.name}</Text>
          <Text numberOfLines={1} style = {styles.text2}>{item.size} MB * {item.desc}</Text>
      </View>
      <View>
          <TouchableOpacity 
          onPress={()=>{
            alert(item.name)
          }}
          style ={styles.touchable}>
              <Text style={styles.touchableText}>{item.status.toUpperCase()}</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}


export default FlatListCarts

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    justifyContent : "flex-start",
    padding : 10,
    borderWidth:1,
    borderColor:"#d5d5d5",
    alignItems: "center"
  },
  content:{
    flex:4,
    // paddingLeft: 
  },
  text1: {
    fontSize: 20   
  },
  text2:{
    fontSize:12
  },
  imgView:{
    flex: 1
  },
  touchView:{
    flex:2
  },
  touchable:{
    borderColor:"green",
    borderWidth: 1.5,
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:5
  },
  touchableText :{
    color:"green",
    fontWeight:"bold"
  },
  img: {
    width: 40,
    height: 40,
    backgroundColor: "yellow",
    borderRadius: 10
  }
})