import React, { useState, useCallback, useEffect } from "react";
import { View, Text, TextInput,
    TextInputProps, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { RFValue } from "react-native-responsive-fontsize";
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
    borderWidth?: number,
    err?: {
        message: string,
        isInvalid: boolean,
    },
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

export const InputGroup = (props: IInputGroupProps) => {

    const {
        borderWidth,
        keyboardType,
        label,
        value,
        pass,
        required,
        atualiza,
        multiline,
        heigth,
        onContentSizeChange,
        err
    } = props;

    const [textValid, setTextValid] = useState(true);
    const [visible, setVisible] = useState(true);
    const borderInvalid = {
        borderWidth: 1,
        borderColor: defaultStyleProperties.redColor
    }

    useFocusEffect(
        useCallback(() => {
            setTextValid(true);
        }, [])
    )

    useEffect(() => {
        if (value?.trim()) {
            setTextValid(true);
        }

        if (!value && required) {
            setTextValid(false);

        }

        if (required && !(value?.trim())) {
            atualiza('');
            setTextValid(false);
        }
    }, [value])


    return (
        <View style={styles.containerInput}>
            <Text style={styles.label}>
                {label}{required && !textValid && <Text style={styles.mandatoryInput}>*</Text>}
            </Text>
            {pass
                ? <View style={styles.inputPass}>
                    <TextInput
                        onChangeText={atualiza}
                        style={[
                            styles.inputEntry,
                            { height: heigth || RFValue(40) },
                            ((required && !textValid) || err?.isInvalid) && borderInvalid
                        ]}
                        secureTextEntry={true}
                        textContentType='password'
                        value={value}
                    />
                    <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.viewPass}>
                        {
                            visible ? <Icon name="visibility" style={styles.iconEye} />
                                : <Icon name="visibility-off" style={styles.iconEye} />
                        }
                    </TouchableOpacity>
                </View>
                :
                <TextInput
                    {...props}
                    multiline={multiline}
                    onChangeText={atualiza}
                    style={[
                        styles.inputEntry,
                        { borderWidth: borderWidth ?? 0 },
                        ((required && !textValid) || err?.isInvalid) && borderInvalid,
                        { height: heigth || RFValue(40) }
                    ]}
                    value={value}
                    onContentSizeChange={onContentSizeChange}
                    keyboardType={keyboardType}
                />
            }
            {err?.isInvalid && <Text style={styles.textErr}>{err?.message}</Text>}
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
