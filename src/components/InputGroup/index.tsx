import React, { useState, useCallback, useEffect, useRef } from "react";
import {
    View, Text, TextInput,
    TextInputProps, TouchableOpacity
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from "./styles";
import { defaultStyleProperties } from "../../base/styles";

interface IInputGroupProps extends TextInputProps {
    label: string;
    type?: "pass" | "email";
    required: boolean;
    multiline?: boolean;
    value: string;
    atualiza: (value: any) => void;
    heigth?: number;
    submit?: boolean;
    borderWidth?: number;
    errorMessage?: {
        messageErro?: string;
        valueIsValid?: (value: string) => boolean;
        dependencies?: string[];
    };
}

export type ItemType = {
    label: string,
    value: string | null
}

export const InputGroup = (props: IInputGroupProps) => {

    const {
        keyboardType,
        label,
        value,
        type,
        required,
        atualiza,
        multiline,
        heigth,
        errorMessage,
        submit
    } = props;

    const { valueIsValid, messageErro, dependencies = [] } = errorMessage || {};

    const isFirstRender = useRef(true);
    const [textValid, setTextValid] = useState(true);
    const [visible, setVisible] = useState(true);
    const borderInvalid = {
        borderWidth: 2,
        borderColor: defaultStyleProperties.redColor
    }

    useFocusEffect(
        useCallback(() => {
            setTextValid(true);
        }, [])
    )

    useEffect(() => {
        if (submit) {
            endEdintingText();
        }
    }, [submit, ...dependencies])

    useEffect(() => {
        // Ignorar a primeira renderização (montagem inicial)
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        endEdintingText();
    }, dependencies)

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const endEdintingText = () => {
        if (!valueIsValid) setTextValid(value.trim().length > 0);
        else setTextValid(valueIsValid(value));
    }

    return (
        <View style={styles.containerInput}>
            <Text style={styles.label}>
                {label}{(required && !textValid) && <Text style={styles.mandatoryInput}>*</Text>}
            </Text>
            {type === "pass"
                ? <View style={styles.inputPass}>
                    <TextInput
                        multiline={multiline}
                        onChangeText={atualiza}
                        onFocus={handleFocus}
                        value={value}
                        onBlur={handleBlur}
                        onEndEditing={endEdintingText}
                        secureTextEntry={visible}
                        textContentType='password'
                        style={[
                            styles.inputEntry,
                            {
                                height: heigth || RFValue(40),
                                borderWidth: isFocused && textValid ? 2 : 0,
                                borderColor: isFocused && textValid ? '#7BB4E3' : undefined
                            },
                            (required && !textValid) && borderInvalid
                        ]}
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
                    onFocus={handleFocus}
                    onEndEditing={endEdintingText}
                    value={value}
                    onBlur={handleBlur}
                    keyboardType={keyboardType}
                    style={[
                        styles.inputEntry,
                        (required && !textValid) ? borderInvalid :
                            {
                                height: heigth || RFValue(40),
                                borderWidth: isFocused ? 2 : 0,
                                borderColor: isFocused ? '#7BB4E3' : undefined
                            },
                        type === "email" && styles.inputEmail
                    ]}
                />
            }
            {!textValid && <Text style={styles.textErr}>{messageErro}</Text>}
        </View>
    )
};
