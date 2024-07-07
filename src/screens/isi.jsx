import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'



const Isi = ({route}) => {
    const {iddoa} = route.params;

    const [data, setData] = useState([]); //state atau penampung data

      const ambildata = async () => {
        try{
          const response = await fetch(`https://doa-doa-api-ahmadramadhan.fly.dev/api/${iddoa}`); //ambil data
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
    <View>
      {data && 
            data.map((item, index) => {
                return (
                   <TouchableOpacity onPress={() => navigation.navigate('isi')} key={item.id}>
                        <Text>{item.doa} </Text>
                        <Text>{item.ayat} </Text>
                        <Text>{item.latin} </Text>
                        
                   </TouchableOpacity>
                )
            })}
    </View>
  )
}

export default Isi

const styles = StyleSheet.create({})