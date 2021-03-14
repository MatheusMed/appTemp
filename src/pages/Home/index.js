import React,{useEffect,useState} from 'react';
import { View,StyleSheet, SafeAreaView, FlatList, PermissionsAndroid ,Text } from 'react-native';
import CardBottom from '../../components/CardBottom';
import CardForquest from '../../components/CardForquest';
import CardHeader from '../../components/CardHeader';
import Geolocation from 'react-native-geolocation-service';
import api, { key } from '../../services/api';


const mylist = [
  {
    "date": "12/03",
    "weekday": "Sex",
    "max": 26,
    "min": 17,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "13/03",
    "weekday": "Sáb",
    "max": 26,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "14/03",
    "weekday": "Dom",
    "max": 27,
    "min": 17,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "15/03",
    "weekday": "Seg",
    "max": 26,
    "min": 17,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "16/03",
    "weekday": "Ter",
    "max": 26,
    "min": 17,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "17/03",
    "weekday": "Qua",
    "max": 27,
    "min": 17,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "18/03",
    "weekday": "Qui",
    "max": 23,
    "min": 18,
    "description": "Tempestades",
    "condition": "cloud"
  },
  {
    "date": "19/03",
    "weekday": "Sex",
    "max": 24,
    "min": 18,
    "description": "Tempestades isoladas",
    "condition": "rain"
  },
  {
    "date": "20/03",
    "weekday": "Sáb",
    "max": 26,
    "min": 19,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "21/03",
    "weekday": "Dom",
    "max": 25,
    "min": 18,
    "description": "Tempestades",
    "condition": "clear_day"
  }
];


export default () => {
  const [errorMensage, setErrorMensage] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [hasLocationPermission,setHasLocationPermission] = useState(false);
  const [userPosition,setUserPosition] = useState(false);

  const [ whater, setWhater ] = useState([]);

  const [icon,setIcon] = useState({name:'cloud',color:'#fff'});
  const [background,setBackground] = useState(['#0082a6','#1ea0e1']);

  async function verifyLocationPermission(){
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if(granted === PermissionsAndroid.RESULTS.GRANTED ){
        console.log('permissao concedida');
        setHasLocationPermission(true);
      }else{
        console.log('permissao negada');
        setHasLocationPermission(false);
      }
    }catch(err){
      console.warn(err);
    }
  }

  useEffect(() => {

    verifyLocationPermission();

      (async () => {
        if(hasLocationPermission){
          Geolocation.getCurrentPosition(
            position => {
              setUserPosition({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            },
            error => {
              console.log(error.code, error.message);
            }
          );
        }

      const response = await api.get(`weather?key=${key}&lat=${userPosition.latitude}&lon=${userPosition.longitude}`);

      setWhater(response.data.results);
      
      if(response.data.results.currently === 'noite'){
        setBackground(['#0c3741','#0f2f61']);
      }

      switch(response.data.results.ondition_slug){
        case 'clear_day':
        setIcon({
           name:'partly-sunny',color:'#ffb030'});
           break;
        case 'storm':
          setIcon({
            name:'thunderstorm',color:'#fff'});
            break;
        case 'snow':
          setIcon({
            name:'snow',color:'#fff'});
            break; 
        case 'cloud':
          setIcon({
            name:'rainy',color:'#fff'});
            break;      
      }
      setLoading(false);
      })();
  
  },[]);
  return (
    <SafeAreaView style={styles.container}>
        <CardHeader background={background} whater={whater} icon={icon} />
        <CardBottom background={background} whater={whater} />
        <FlatList 
        horizontal={true}
        contentContainerStyle={{paddingBottom: '5%'}}
        style={ styles.list }
        data={whater.forecast}
        keyExtractor={item => item.date}
        renderItem={ ({ item })=> <CardForquest background={background} data={item} /> }
        
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#333',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:'5%'
  },
  list:{
    marginTop:10,
    marginLeft:10,
    marginRight:10,
  }
})