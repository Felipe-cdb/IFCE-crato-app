import React from "react";
import { View, Text, ActionSheetIOS } from "react-native";
import { Picker } from '@react-native-picker/picker';

import styles from "./styles";
import { defaultStyleProperties } from "../../base/styles";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export type ItemType = {
    label: string,
    value: string | null
}

interface ISelectGroupProps {
    label: string;
    valid?: boolean;
    atualiza: (value: any) => void;
    lista: ItemType[];
    value: string | null;
    enable?: boolean;
    messageErro?: string;
    osType: "ios" | "android" | "windows" | "macos" | "web"
}

export const SelectGroup = ({
    label,
    lista,
    valid,
    atualiza,
    value,
    enable,
    messageErro,
    osType
}: ISelectGroupProps) => {
    const onPress = () =>
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ['Cancelar', ...lista.map(item => item.label || '')],
                cancelButtonIndex: 0,
                userInterfaceStyle: 'dark',
            },
            (buttonIndex: number) => {
                const listItems = lista.map(item => item.value || '')
                const listButtonIndex = listItems[buttonIndex - 1];

                atualiza(listButtonIndex)
            },
        );

    return (
        <View style={styles.containerInput}>
            <Text style={styles.label}>
                {label}{(!valid && enable) && <Text style={styles.mandatoryInput}>*</Text>}
            </Text>
            <View style={[
                styles.inputEntry,
                (!valid && enable) && {
                    borderWidth: 2,
                    borderColor: defaultStyleProperties.redColor
                }
            ]}>
                {osType === 'ios' ?
                    <TouchableOpacity>
                        <TextInput
                            onTouchStart={onPress}
                            editable={false}
                            value={lista.find(item => item.value === value)?.label}
                        />
                    </TouchableOpacity>
                    :
                    (
                        <Picker
                            enabled={enable}
                            selectedValue={value}
                            onValueChange={atualiza}
                        >
                            {lista.map((i) => (
                                <Picker.Item key={i.value} label={i.label} value={i.value} />
                            ))}
                        </Picker>
                    )

                }
            </View>
            {(!valid && enable) && <Text style={styles.textErr}>{messageErro}</Text>}
        </View>
    )
};
