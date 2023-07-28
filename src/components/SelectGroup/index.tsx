import React from "react";
import { View, Text } from "react-native";
import { Picker } from '@react-native-picker/picker';

import styles from "./styles";

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
}

export const SelectGroup = ({
    label,
    lista,
    valid,
    atualiza,
    value,
    enable,
    messageErro
}: ISelectGroupProps) => {
    return (
        <View style={styles.containerInput}>
            <Text style={styles.label}>
                {label}{(!valid && enable) && <Text style={styles.mandatoryInput}>*</Text>}
            </Text>
            <View style={styles.inputEntry}>
                <Picker
                    enabled={enable}
                    selectedValue={value}
                    onValueChange={atualiza}
                >
                    {lista.map((i) => (
                        <Picker.Item key={i.value} label={i.label} value={i.value} />
                    ))}
                </Picker>
            </View>
            {(!valid && enable) && <Text style={styles.textErr}>{messageErro}</Text>}
        </View>
    )
};
