import React, { useState, useCallback } from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import RNPickerSelect, { Item } from 'react-native-picker-select';
import { RFValue } from "react-native-responsive-fontsize";
import { useFocusEffect } from '@react-navigation/native';

import styles from "./styles";

interface IInputGroupProps extends TextInputProps {
    label: string;
    pass?: boolean;
    required: boolean;
    multiline?: boolean;
    value: string;
    atualiza: (value: any) => void;
    heigth?: number;
    borderWidth?: number
}
interface ISelectGroupProps {
    label: string;
    required: boolean;
    atualiza: (value: any) => void;
    lista: Item[];
}

export const InputGroup = ({ borderWidth, keyboardType, label, value, pass, required, atualiza, multiline, heigth, onContentSizeChange }: IInputGroupProps) => {

    const [borda, setBorda] = useState({});

    useFocusEffect(
        useCallback(() => {
          setBorda({});
        }, [])
      )

    const endInput = () => {
        if (value?.trim()) {
            setBorda({});
            return;
        }

        if (!value && required) {
            setBorda({
                borderWidth: 1,
                borderColor:'#C91517'
            });
            return;
        }

        if (required && !(value?.trim())) {
            atualiza('');
            setBorda('#C91517');
            return;
        }

    }

    return(
        <View style={styles.containerInpu}>
            <Text style={styles.label}>
                {label}{required && <Text style={{color: '#C91517'}}>*</Text>}
            </Text>
           {pass
                ?<TextInput
                    onEndEditing={() => endInput()}
                    onChangeText={atualiza}
                    style={[styles.inputEntry, borda, {height: heigth || RFValue(40)}]}
                    secureTextEntry={true}
                    textContentType='password'
                    value={value}
                />
                :<TextInput
                    multiline={multiline}
                    onEndEditing={() => endInput()}
                    onChangeText={atualiza}
                    style={[styles.inputEntry, { borderWidth: borderWidth ?? 0 }, borda, {height: heigth || undefined}]}
                    value={value}
                    onContentSizeChange={onContentSizeChange}
                    keyboardType={keyboardType}
                />
            }

        </View>
    )
};

export const SelectGroup = ({ label, lista, required, atualiza}: ISelectGroupProps) => {
    return(
        <View style={styles.containerInpu}>
            <Text style={styles.label}>
                {label}{required && <Text style={{color: '#C91517'}}>*</Text>}
            </Text>
            <View style={styles.inputEntry}>
                <RNPickerSelect
                    placeholder={{}}
                    onValueChange={atualiza}
                    items={lista}
                />
            </View>
        </View>
    )
};
