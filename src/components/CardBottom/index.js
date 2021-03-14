import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';



export default ({ background , whater }) => {
  return (
    <LinearGradient style={styles.container} colors={background}>
      <View style={styles.card}>
        <Icon name='weather-windy' size={30} color='#fff' />
        <Text style={{color:'#f8f8f8'}}>{whater.wind_speedy}</Text>
      </View>
      <View style={styles.card}>
        <Icon name='weather-sunset-up' size={30} color='#fff' />
        <Text style={{color:'#f8f8f8'}}>{whater.sunrise}</Text>
      </View>
      <View style={styles.card}>
        <Icon name='weather-sunset-down' size={30} color='#fff' />
        <Text style={{color:'#f8f8f8'}}>{whater.sunset}</Text>
      </View>
      <View style={styles.card}>
        <Icon name='water-outline' size={30} color='#fff' />
        <Text style={{color:'#f8f8f8'}}>{whater.humidity}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    marginTop:15,
    justifyContent:'space-around',
    //height:'15%',
    width:'95%',
    //alignItems:'center',
    borderRadius:7,
    flexDirection:'row'
  },
  card:{
    justifyContent:'center',
    alignItems:'center',
  }
})