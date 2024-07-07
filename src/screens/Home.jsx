import { StyleSheet, Text, ScrollView, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, {useEffect, useState} from 'react';

const Home = ({navigation}) => {
    const [data, setData] = useState([]); //state atau penampung data

      const ambildata = async () => {
        try{
          const response = await fetch('https://doa-doa-api-ahmadramadhan.fly.dev/api'); //ambil data
          const json = await response.json(); //ubah data ke JSON
          return setData(json);
        } catch (error) {
          console.log(error); //menampilkan eror
          Alert.alert('info', 'koneksi bermasalah');
        }
      };

  useEffect(() => {
  ambildata();
  }, []);

  return (
    <ScrollView>
        {data && 
            data.map((item, index) => {
                return (
                   <TouchableOpacity style={styles.contentBody} onPress={() => navigation.navigate('isi', {iddoa: item.id})} key={item.id}>
                        <Text key={index} style={styles.contentAyat}>{item.doa}</Text>
                   </TouchableOpacity>
                )
            })}
      <Text>Playlist</Text>
      <ScrollView onpre></ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Musik' )}>
        {/* <MaterialCommunity name="menu" size={28} color="white"/> */}
        <Text
            style={{
                fontsize: 18,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 2,
            }}>
            untukanda
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  contentBody: {
    margin: 7,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  contentAyat: {
    fontWeight: 'bold',
    fontSize: 18,
    
  },
});