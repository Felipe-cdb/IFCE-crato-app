import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import RNPickerSelect, { Item } from 'react-native-picker-select';

import styles from "./styles";

interface IInputGroupProps {
    label: string;
    pass?: boolean;
    required: boolean;
    editavel?: boolean;
    atualiza: (value: any) => void;
}
interface ISelectGroupProps {
    label: string;
    required: boolean;
    atualiza: (value: any) => void;
    lista: Item[];
}

export const InputGroup = ({ label, pass, required, editavel, atualiza }: IInputGroupProps) => {

    const [borda, setBorda] = useState({});
    const [vari, setVari] = useState('');

    const fimEntrada = () => {
        atualiza(vari);
        if (required && !vari.trim()) {
            setBorda({
                borderWidth: 1,
                borderColor: '#C91517',
            })
            return;
        }

        if (vari.trim()) {
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
                    onChangeText={setVari}
                    style={[styles.inputEntry, 
                        editavel == true || editavel == undefined ? borda : {}
                    ]}
                    secureTextEntry={true}
                    textContentType='password'
                    editable={editavel}
                />
                :<TextInput
                    onEndEditing={() => fimEntrada()}
                    onChangeText={setVari}
                    style={[styles.inputEntry, 
                        editavel == true || editavel == undefined ? borda : {}
                    ]}
                    editable={editavel}
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
