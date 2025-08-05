import React, { useState } from 'react';
import { useGetPokemonListQuery } from './appSlice';
import { View,Text } from 'react-native';
import styles from '../../Styles';
import { FlatList } from 'react-native';
import { TextInput } from 'react-native';
const Apifront = () => {
  const { data, error, isLoading } = useGetPokemonListQuery();
const[searchQuery,setSearchQuery]=useState('')
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!</Text>;

const handleSearch=data.results.filter((item)=>
item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.searchQuery}
      placeholder="search"
      value={searchQuery}
      onChangeText={setSearchQuery}
      />
    <View style={styles.dataContainer}>
      <FlatList
      data={handleSearch}
      keyExtractor={(item)=>{item.name,item.height}}
      renderItem={({item,index,height})=>(
        <Text>{index+1}   {item.name}{item.height}</Text>
  )}
      />
    </View>
    </View>
  );
};
export default Apifront

