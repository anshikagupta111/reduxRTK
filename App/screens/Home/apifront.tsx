import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { View,Text } from 'react-native';
import styles from '../../Styles';
import { fetchPokemonNames } from '../../redux/slices/index';
import { FlatList } from 'react-native';
import { TextInput } from 'react-native';
import { SearchBar } from '../../components/index';
const Apifront = () => {
  const dispatch=useDispatch()
  const { names, error, isLoading } = useSelector((state)=>state.pokemon)
const[searchQuery,setSearchQuery]=useState('')
 useEffect(() => {
    dispatch(fetchPokemonNames());
  }, [dispatch]);
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!</Text>;

const handleSearch=names.filter((item)=>
item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  
  return (
    <View style={styles.container}>
      <SearchBar value={searchQuery} onChangeText={setSearchQuery}/>

    <View style={styles.dataContainer}>
      <FlatList
      data={handleSearch}
      style={styles.itemlist}
      keyExtractor={(item)=>(item.name)}
      renderItem={({item,index})=>(
        <Text style={styles.listItem}>{index+1}   {item.name}</Text>
  )}
      />
    </View>
    </View>
  );
};
export default Apifront

