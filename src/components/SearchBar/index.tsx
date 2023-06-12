import React from 'react'
import { TextInput, View, Keyboard, Button, Platform } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

import styles from "./styles";

type SearchBarProperties = {
  clicked: boolean
  setClicked(value: boolean): void
  searchPhrase: string
  setSearchPhrase(value: string): void
}

const SearchBar = ({ clicked, searchPhrase, setClicked, setSearchPhrase }: SearchBarProperties) => {
  // const buttonStyle = Platform.OS === 'android' ? styles.androidButton : styles.iosButton;

  return (
    <View style={styles.container}>
      <View
        style={
          Platform.OS=='ios'?
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
          : styles.searchBar__clicked
        }
      >
        <Feather
          name="search"
          style={styles.featherStyle}
        />
        <TextInput
          style={styles.input}
          placeholder="Buscar"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
          onEndEditing={()=>{
            Keyboard.dismiss();
            setClicked(false);
          }}
        />
        {searchPhrase.trim() && (
          <Entypo name="cross" style={styles.entypoStyle} onPress={() => {
            setSearchPhrase("")
          }} />
        )}
      </View>
      {clicked && Platform.OS=='ios' && (
        <View>
          <Button
            color={'darkgray'}
            title="Cancelar"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  )
}

export default SearchBar