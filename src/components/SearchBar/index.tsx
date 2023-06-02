import React from 'react'
import { TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

import styles from "./styles";

type SearchBarProperties = {
  clicked: boolean
  setClicked(value: boolean): void
  searchPhrase: string
  setSearchPhrase(value: string): void
}

const SearchBar = ({ clicked, searchPhrase, setClicked, setSearchPhrase }: SearchBarProperties) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
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
        />
        {clicked && (
          <Entypo name="cross" style={styles.entypoStyle} onPress={() => {
            setSearchPhrase("")
          }} />
        )}
      </View>
      {clicked && (
        <View>
          <Button
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