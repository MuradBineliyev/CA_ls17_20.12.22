import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import FlatListCarts from './companent/FlatListCarts';
import FlatListHCarts from './companent/FlatListHCarts';

export default function App() {
  let data = [
    {
      img:"https://e7.pngegg.com/pngimages/764/289/png-clipart-carpool-taxi-carsharing-blablacar-car-rectangle-logo-thumbnail.png",
      name : "Slack",
      size: 12,
      desc: "Used moments ago",
      status : "Open"
    },
    {
      img:"https://e7.pngegg.com/pngimages/764/289/png-clipart-carpool-taxi-carsharing-blablacar-car-rectangle-logo-thumbnail.png",
      name : "erterteteter",
      size: 52,
      desc: "rtyhrthrged moments agosdfs",
      status : "Open"
    },
    {
      img:"https://e7.pngegg.com/pngimages/764/289/png-clipart-carpool-taxi-carsharing-blablacar-car-rectangle-logo-thumbnail.png",
      name : "erterteteter",
      size: 52,
      desc: "rtyhrthrged moments agosdfs",
      status : "Open"
    },
    {
      img:"https://e7.pngegg.com/pngimages/764/289/png-clipart-carpool-taxi-carsharing-blablacar-car-rectangle-logo-thumbnail.png",
      name : "erterteteter",
      size: 52,
      desc: "rtyhrthrged moments agosdfs",
      status : "Open"
    },
    {
      img:"https://e7.pngegg.com/pngimages/764/289/png-clipart-carpool-taxi-carsharing-blablacar-car-rectangle-logo-thumbnail.png",
      name : "erterteteter",
      size: 52,
      desc: "rtyhrthrged moments agosdfs",
      status : "Update"
    },
    {
      img:"https://e7.pngegg.com/pngimages/764/289/png-clipart-carpool-taxi-carsharing-blablacar-car-rectangle-logo-thumbnail.png",
      name : "erterteteter",
      size: 52,
      desc: "rtyhrthrged moments agosdfs",
      status : "Open"
    },
    {
      img:"https://e7.pngegg.com/pngimages/764/289/png-clipart-carpool-taxi-carsharing-blablacar-car-rectangle-logo-thumbnail.png",
      name : "erterteteter",
      size: 52,
      desc: "rtyhrthrged moments agosdfs",
      status : "Open"
    },
    {
      img:"https://e7.pngegg.com/pngimages/764/289/png-clipart-carpool-taxi-carsharing-blablacar-car-rectangle-logo-thumbnail.png",
      name : "erterteteter",
      size: 52,
      desc: "rtyhrthrged moments agosdfs",
      status : "Update"
    },
    {
      img:"https://e7.pngegg.com/pngimages/764/289/png-clipart-carpool-taxi-carsharing-blablacar-car-rectangle-logo-thumbnail.png",
      name : "erterteteter",
      size: 52,
      desc: "rtyhrthrged moments agosdfs",
      status : "Open"
    },
    {
      img:"https://e7.pngegg.com/pngimages/764/289/png-clipart-carpool-taxi-carsharing-blablacar-car-rectangle-logo-thumbnail.png",
      name : "erterteteter",
      size: 52,
      desc: "rtyhrthrged moments agosdfs",
      status : "Update"
    },
    {
      img:"https://e7.pngegg.com/pngimages/764/289/png-clipart-carpool-taxi-carsharing-blablacar-car-rectangle-logo-thumbnail.png",
      name : "erterteteter",
      size: 52,
      desc: "rtyhrthrged moments agosdfs",
      status : "Open"
    },
    {
      img:"https://e7.pngegg.com/pngimages/764/289/png-clipart-carpool-taxi-carsharing-blablacar-car-rectangle-logo-thumbnail.png",
      name : "erterteteter",
      size: 52,
      desc: "rtyhrthrged moments agosdfs",
      status : "Update"
    },
    {
      img:"https://e7.pngegg.com/pngimages/764/289/png-clipart-carpool-taxi-carsharing-blablacar-car-rectangle-logo-thumbnail.png",
      name : "erterteteter",
      size: 52,
      desc: "rtyhrthrged moments agosdfs",
      status : "Open"
    }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data = {data}
        renderItem = {FlatListCarts}
        ListHeaderComponent = {FlatListHCarts(data)}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
