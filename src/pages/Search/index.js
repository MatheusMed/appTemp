import React,{useState} from 'react';
import { Text,View,StyleSheet,SafeAreaView, TouchableOpacity,TextInput,Keyboard  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import api, { key } from '../../services/api';
import LinearGradient from 'react-native-linear-gradient';
import CardBottom from '../../components/CardBottom'

export default () => {

  const [ inputSearch, setInputSearch ] = useState('');
  const [ city, setCity ] = useState(null);
  const [ error,setError ] = useState(null);
  const [background,setBackground] = useState(['#65e6c1','#a1b484']);

  async function handleSearch(){
    const response = await api.get(`weather?key=${key}&city_name=${inputSearch}`);
    //console.log(response.data);

    if(response.data.by === 'default'){
      setError('Cidade nao encontrada ❌ 🔍');
      setInputSearch('');
      setCity(null);
      Keyboard.dismiss();
      return;
    }
    setCity(response.data);
    setInputSearch('');
    Keyboard.dismiss();
  }
  if(city){
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBox} >
          <TextInput 
            value={inputSearch}
            onChangeText={t=>setInputSearch(t)}
            placeholder="EX: Sao Paulo , SP"
            style={styles.input}
          />
          <TouchableOpacity style={styles.searchButton} activeOpacity={0.9} onPress={handleSearch}>
            <Icon name='search-outline' size={25} color='#333' />
          </TouchableOpacity>
        </View>

        <LinearGradient
          style={styles.header}
          colors={background}
        >
          <Text style={styles.date} >{city.results.date}</Text>
          <Text style={styles.city}>{city.results.city_name}</Text>
          <View>
            <Text style={styles.temp}>Temp: {city.results.temp}°</Text>
          </View>
          </LinearGradient>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.searchBoxText}>Pesquise Sua Cidade</Text>
        <View style={styles.searchBox} >
          <TextInput 
            value={inputSearch}
            onChangeText={t=>setInputSearch(t)}
            placeholder="EX: Sao Paulo , SP"
            style={styles.input}
          />
          <TouchableOpacity style={styles.searchButton} activeOpacity={0.9} onPress={handleSearch}>
            <Icon name='search-outline' size={25} color='#333' />
          </TouchableOpacity>
        </View>
        {error && <Text style={{ marginTop:25,fontSize:20,color:'#f82' }}>{error}</Text> }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#333',
    alignItems: 'center',
    paddingTop: '10%'
  },
  searchBox:{
    alignItems: 'center',
    flexDirection:'row',
    backgroundColor:'#ddd',
    height:50,
    width:'90%',
    borderRadius:8,
  },
  input:{
    width:'85%',
    height:50,
    backgroundColor:'#fff',
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8,
    justifyContent:'center',
    alignItems: 'center',
    padding:7,
  },
  searchButton:{
    width:'15%',
    backgroundColor:'#f82',
    alignItems: 'center',
    justifyContent:'center',
    height:50,
    borderTopRightRadius:8,
    borderBottomRightRadius:8,
  },
  header:{
    marginTop:'5%',
    width:'90%',
    paddingTop:'3%',
    paddingBottom:'3%',
    alignItems: 'center',
    justifyContent:'space-between',
    borderRadius:8
  },
  date:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fdfdfd'
  },
  city:{
    fontWeight:'bold',
    fontSize:30,
    color:'#fff'
  },
  temp:{
    fontWeight:'bold',
    fontSize:50,
    color:'#fff'
  },
  searchBoxText:{
    color:'#fff',
    fontSize:20,
    marginBottom:10,
  }
})