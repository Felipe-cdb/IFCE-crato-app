import React, { useState, useCallback } from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { RFValue } from "react-native-responsive-fontsize";
import { useFocusEffect } from '@react-navigation/native';

import styles from "./styles";
import { defaultStyleProperties } from "../../base/styles";

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

type ItemType = {
    label: string,
    value: string
}

interface ISelectGroupProps {
    label: string;
    required: boolean;
    atualiza: (value: any) => void;
    lista: ItemType[];
    value: string;
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
                borderColor: defaultStyleProperties.redColor
            });
            return;
        }

        if (required && !(value?.trim())) {
            atualiza('');
            setBorda(defaultStyleProperties.redColor);
            return;
        }

    }

    return (
        <View style={styles.containerInput}>
            <Text style={styles.label}>
                {label}{required && <Text style={styles.mandatoryInput}>*</Text>}
            </Text>
            {pass
                ? <TextInput
                    onEndEditing={() => endInput()}
                    onChangeText={atualiza}
                    style={[styles.inputEntry, borda, { height: heigth || RFValue(40) }]}
                    secureTextEntry={true}
                    textContentType='password'
                    value={value}
                />
                : <TextInput
                    multiline={multiline}
                    onEndEditing={() => endInput()}
                    onChangeText={atualiza}
                    style={[styles.inputEntry, { borderWidth: borderWidth ?? 0 }, borda, { height: heigth || RFValue(40) }]}
                    value={value}
                    onContentSizeChange={onContentSizeChange}
                    keyboardType={keyboardType}
                />
            }

        </View>
    )
};

export const SelectGroup = ({ label, lista, required, atualiza, value }: ISelectGroupProps) => {
    return (
        <View style={styles.containerInput}>
            <Text style={styles.label}>
                {label}{required && <Text style={styles.mandatoryInput}>*</Text>}
            </Text>
            <View style={styles.inputEntry}>
                <Picker
                    selectedValue={value}
                    onValueChange={atualiza}
                >
                    {lista.map((i) => (
                        <Picker.Item key={i.value} label={i.label} value={i.value} />
                    ))}
                </Picker>
            </View>
        </View>
    )
};
