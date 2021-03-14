import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { condition } from '../../utils/condition';


export default ({ data, whater, background }) => {
  let icon = condition(data.condition)

  return (
    <LinearGradient style={styles.container} colors={background}>
        <Text style={styles.date}>{data.date}</Text>
        <Icon name={icon.name} size={25} color={icon.color} />
        <View style={{alignItems:'center'}}>
          <Text style={{color: '#fff',fontSize:11}}>{data.min}°</Text>
          <Text style={{color: '#fff',fontWeight:'bold'}}>{data.max}°</Text>
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    marginLeft:12,
    borderRadius:8,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:14,
    paddingRight:14,
    justifyContent:'space-around',
    alignItems:'center',
  },
  date:{
    color: '#fff'
  }

});