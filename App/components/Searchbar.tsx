import React from 'react';
import { TextInput} from 'react-native';
import styles from '../Styles';
const SearchBar = ({ value, onChangeText }) => (
  <TextInput
    style={styles.searchQuery}
    placeholder="Search Pokémon"
    value={value}
    onChangeText={onChangeText}
  />
);
export default SearchBar;
