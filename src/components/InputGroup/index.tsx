import React, { useState, useCallback } from "react";
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
    type?: "pass"|"email";
    required: boolean;
    multiline?: boolean;
    value: string;
    atualiza: (value: any) => void;
    heigth?: number;
    errorMessage: {
        messageErro?: string;
        valueIsValid?: (value:string|null|undefined)=>boolean;
        setIsValid: React.Dispatch<React.SetStateAction<boolean>>
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
        onContentSizeChange,
        errorMessage
    } = props;

    const { valueIsValid, messageErro, setIsValid } = errorMessage;

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

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleValue = (value: string) => {
        if(valueIsValid === undefined){
            setTextValid(value.trim().length > 0);
            atualiza(value);
            return;
        }
        setTextValid(valueIsValid(value));
        setIsValid(valueIsValid(value));
        atualiza(value);        
    }

    return (
        <View style={styles.containerInput}>
            <Text style={styles.label}>
                {label}{(required && !textValid) && <Text style={styles.mandatoryInput}>*</Text>}
            </Text>
            {type === "pass"
                ? <View style={styles.inputPass}>
                    <TextInput
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChangeText={handleValue}
                        style={[
                            styles.inputEntry,
                            {
                                height: heigth || RFValue(40),
                                borderWidth: isFocused && textValid ? 2 : 0,
                                borderColor: isFocused && textValid ? '#7BB4E3' : undefined
                            },
                            (required && !textValid) && borderInvalid
                        ]}
                        secureTextEntry={visible}
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
                    onChangeText={handleValue}
                    style={[
                        styles.inputEntry,
                        (required && !textValid) ? borderInvalid :
                            {
                                height: heigth || RFValue(40),
                                borderWidth: isFocused ? 2 : 0,
                                borderColor: isFocused ? '#7BB4E3' : undefined
                            },
                        type==="email" && styles.inputEmail
                    ]}
                    value={value}
                    onContentSizeChange={onContentSizeChange}
                    keyboardType={keyboardType}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            }
            {!textValid && <Text style={styles.textErr}>{messageErro}</Text>}
        </View>
    )
};