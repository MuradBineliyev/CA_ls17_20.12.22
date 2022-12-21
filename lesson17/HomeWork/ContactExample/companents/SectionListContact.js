import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const SectionListContact = ({item}) => {
    let alertData = 
        `Id : ${item.id}
        \nName: ${item.firstName} 
        \nSurname: ${item.lastName}
        \nNumber: ${item.number}
        \nCreated: ${item.createdAt}
         `;
  return (
    <TouchableOpacity 
    onPress={()=> alert(alertData)}
    style = {styles.view}>
        <Image
            style = {styles.img}
            source= {{
                uri : item.avatar
            }}
        />
      <Text
        style ={styles.txt}
      >{item.firstName} {item.lastName}</Text>
    </TouchableOpacity>
  )
}

export default SectionListContact

const styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingHorizontal : 15,
        paddingVertical: 10,
        flexDirection : "row",
        alignItems : "center",
        borderBottomColor : "#ededed",
        borderBottomWidth : 1       
    },
    txt :{ 
        fontSize: 18,
        marginLeft: 10
    },
    img :{
        width : 30,
        height: 30,
        borderRadius : 10
    }
})