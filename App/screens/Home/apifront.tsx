import React, { useState } from 'react';
import { useGetPokemonListQuery } from '../../redux/slices/appSlice';
import { View,Text } from 'react-native';
import styles from '../../Styles';
import { FlatList } from 'react-native';
import { TextInput } from 'react-native';
import SearchBar from '../../components/Searchbar';
const Apifront = () => {
  const { data, error, isLoading } = useGetPokemonListQuery();
const[searchQuery,setSearchQuery]=useState('')
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!</Text>;

const handleSearch=data.results.filter((item)=>
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

