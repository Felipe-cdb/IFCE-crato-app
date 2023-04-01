import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

interface RefectoryChoicesProps {
    onSelectBreakfast: (isSelected: boolean) => void;
    onSelectLunch: (isSelected: boolean) => void;
    onSelectAfternoonSnack: (isSelected: boolean) => void;
    onSelectDinner: (isSelected: boolean) => void;
    onSelectEveningSnack: (isSelected: boolean) => void;
}

export function RefectoryChoices({
    onSelectBreakfast,
    onSelectLunch,
    onSelectAfternoonSnack,
    onSelectDinner,
    onSelectEveningSnack,
}: RefectoryChoicesProps) {
    const [breakfastSelected, setBreakfastSelected] = useState(false);
    const [lunchSelected, setLunchSelected] = useState(false);
    const [afternoonSnackSelected, setAfternoonSnackSelected] = useState(false);
    const [dinnerSelected, setDinnerSelected] = useState(false);
    const [eveningSnackSelected, setEveningSnackSelected] = useState(false);

    function handleBreakfastSelection() {
        setBreakfastSelected(!breakfastSelected);
        onSelectBreakfast(!breakfastSelected);
    }

    function handleLunchSelection() {
        setLunchSelected(!lunchSelected);
        onSelectLunch(!lunchSelected);
    }

    function handleAfternoonSnackSelection() {
        setAfternoonSnackSelected(!afternoonSnackSelected);
        onSelectAfternoonSnack(!afternoonSnackSelected);
    }

    function handleDinnerSelection() {
        setDinnerSelected(!dinnerSelected);
        onSelectDinner(!dinnerSelected);
    }

    function handleEveningSnackSelection() {
        setEveningSnackSelected(!eveningSnackSelected);
        onSelectEveningSnack(!eveningSnackSelected);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione suas opções do dia:</Text>

            <TouchableOpacity
                style={styles.optionContainer}
                onPress={handleBreakfastSelection}
            >
                <View style={styles.checkbox}>
                    {breakfastSelected && <View style={styles.checkedBox} />}
                </View>
                <Text style={styles.optionText}>Café da Manhã</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.optionContainer}
                onPress={handleLunchSelection}
            >
                <View style={styles.checkbox}>
                    {lunchSelected && <View style={styles.checkedBox} />}
                </View>
                <Text style={styles.optionText}>Almoço</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.optionContainer}
                onPress={handleAfternoonSnackSelection}
            >
                <View style={styles.checkbox}>
                    {afternoonSnackSelected && <View style={styles.checkedBox} />}
                </View>
                <Text style={styles.optionText}>Lanche da Tarde</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.optionContainer}
                onPress={handleDinnerSelection}
            >
                <View style={styles.checkbox}>
                    {dinnerSelected && <View style={styles.checkedBox} />}
                </View>
                <Text style={styles.optionText}>Janta</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.optionContainer}
                onPress={handleEveningSnackSelection}
            >
                <View style={styles.checkbox}>
                    {eveningSnackSelected && <View style={styles.checkedBox} />}
                </View>
                <Text style={styles.optionText}>Lanche da Noite</Text>
            </TouchableOpacity>
        </View>
    );
}