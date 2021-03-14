import React from 'react';
import { StyleSheet,Text  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export default ({ background, whater , icon }) => {
  return (
    <LinearGradient style={styles.container} colors={background}>
      <Text style={styles.date}>Data: {whater.date}</Text>
      <Text style={styles.city}>Cidade: {whater.city_name}</Text>
      <Icon name={icon.name} size={175} color={icon.color} />
      <Text style={styles.grau}>{whater.temp}°</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    width:'95%',
    height:'55%',
    margin:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:7
  },
  date:{
    color:'#fff',
    fontSize:20,
    marginBottom:10
  },
  city:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
  },
  grau:{
    color:'#fff',
    fontSize:40,
    fontWeight:'bold',
  }

})