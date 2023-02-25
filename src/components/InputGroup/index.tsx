import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import RNPickerSelect, { Item } from 'react-native-picker-select';

import styles from "./styles";

interface IInputGroupProps {
    label: string;
    pass?: boolean;
    required: boolean;
    editavel?: boolean;
    numberLines?: number;
    multiline?: boolean;
    value: string;
    atualiza: (value: any) => void;
}
interface ISelectGroupProps {
    label: string;
    required: boolean;
    atualiza: (value: any) => void;
    lista: Item[];
}

export const InputGroup = ({ label, value, pass, required, editavel, atualiza, multiline, numberLines }: IInputGroupProps) => {

    const [borda, setBorda] = useState({});

    const fimEntrada = () => {
        if (!value) {
            setBorda({
                borderWidth: 1,
                borderColor: '#C91517',
            })
            return;
        }

        if (required && !value.trim()) {
            setBorda({
                borderWidth: 1,
                borderColor: '#C91517',
            })
            return;
        }

        if (value.trim()) {
            setBorda({})
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
                    onEndEditing={() => fimEntrada()}
                    onChangeText={atualiza}
                    style={[styles.inputEntry, 
                        editavel == true || editavel == undefined ? borda : {}
                    ]}
                    secureTextEntry={true}
                    textContentType='password'
                    editable={editavel}
                    value={value}
                />
                :<TextInput
                    multiline={multiline}
                    numberOfLines={numberLines}
                    onEndEditing={() => fimEntrada()}
                    onChangeText={atualiza}
                    style={[styles.inputEntry, 
                        editavel == true || editavel == undefined ? borda : {}
                    ]}
                    editable={editavel}
                    value={value}
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
