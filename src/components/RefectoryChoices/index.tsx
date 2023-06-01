import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from "./styles";
import { RefectoryContext } from '../../context/refectory.context'

type MenuType = 'breakfast' | 'lunch' | 'afternoonSnack' | 'dinner' | 'nightSnack'

export function RefectoryChoices() {
    const { checkboxAnswerFields, setCheckboxAnswerFields } = useContext(RefectoryContext)

    const handleChange = (key: MenuType) => {
        const value = checkboxAnswerFields[key] === 0 ? 1 : 0
        setCheckboxAnswerFields({ ...checkboxAnswerFields, [key]: value })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione suas opções do dia:</Text>

            <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => handleChange('breakfast')}
            >
                <View style={styles.checkbox}>
                    {!!checkboxAnswerFields.breakfast && <Icon style={styles.checkIcon} name='check-bold' />}
                </View>
                <Text style={styles.optionText}>Café da Manhã</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => handleChange('lunch')}
            >
                <View style={styles.checkbox}>
                    {!!checkboxAnswerFields.lunch && <Icon style={styles.checkIcon} name='check-bold' />}
                </View>
                <Text style={styles.optionText}>Almoço</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => handleChange('afternoonSnack')}
            >
                <View style={styles.checkbox}>
                    {!!checkboxAnswerFields.afternoonSnack && <Icon style={styles.checkIcon} name='check-bold' />}
                </View>
                <Text style={styles.optionText}>Lanche da Tarde</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => handleChange('dinner')}
            >
                <View style={styles.checkbox}>
                    {!!checkboxAnswerFields.dinner && <Icon style={styles.checkIcon} name='check-bold' />}
                </View>
                <Text style={styles.optionText}>Janta</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => handleChange('nightSnack')}
            >
                <View style={styles.checkbox}>
                    {!!checkboxAnswerFields.nightSnack && <Icon style={styles.checkIcon} name='check-bold' />}
                </View>
                <Text style={styles.optionText}>Lanche da Noite</Text>
            </TouchableOpacity>
        </View>
    );
}