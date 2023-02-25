import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

interface OpcoesDesejadaCardapioProps {
    onSelectCafe: (isSelected: boolean) => void;
    onSelectAlmoco: (isSelected: boolean) => void;
    onSelectLancheTarde: (isSelected: boolean) => void;
    onSelectJanta: (isSelected: boolean) => void;
    onSelectLancheNoite: (isSelected: boolean) => void;
}

export function OpcoesDesejadaCardapio({
    onSelectCafe,
    onSelectAlmoco,
    onSelectLancheTarde,
    onSelectJanta,
    onSelectLancheNoite,
}: OpcoesDesejadaCardapioProps) {
    const [cafeSelected, setCafeSelected] = useState(false);
    const [AlmocoSelected, setAlmocoSelected] = useState(false);
    const [lancheTardeSelected, setLancheTardeSelected] = useState(false);
    const [jantaSelected, setJantaSelected] = useState(false);
    const [lancheNoiteSelected, setLancheNoiteSelected] = useState(false);

    function handleCafeSelection() {
        setCafeSelected(!cafeSelected);
        onSelectCafe(!cafeSelected);
    }

    function handleAlmocoSelection() {
        setAlmocoSelected(!AlmocoSelected);
        onSelectAlmoco(!AlmocoSelected);
    }

    function handleLancheTardeSelection() {
        setLancheTardeSelected(!lancheTardeSelected);
        onSelectLancheTarde(!lancheTardeSelected);
    }

    function handleJantaSelection() {
        setJantaSelected(!jantaSelected);
        onSelectJanta(!jantaSelected);
    }

    function handleLancheNoiteSelection() {
        setLancheNoiteSelected(!lancheNoiteSelected);
        onSelectLancheNoite(!lancheNoiteSelected);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione suas opções do dia:</Text>

            <TouchableOpacity
                style={styles.optionContainer}
                onPress={handleCafeSelection}
            >
                <View style={styles.checkbox}>
                    {cafeSelected && <View style={styles.checkedBox} />}
                </View>
                <Text style={styles.optionText}>Café da Manhã</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.optionContainer}
                onPress={handleAlmocoSelection}
            >
                <View style={styles.checkbox}>
                    {AlmocoSelected && <View style={styles.checkedBox} />}
                </View>
                <Text style={styles.optionText}>Almoço</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.optionContainer}
                onPress={handleLancheTardeSelection}
            >
                <View style={styles.checkbox}>
                    {lancheTardeSelected && <View style={styles.checkedBox} />}
                </View>
                <Text style={styles.optionText}>Lanche da Tarde</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.optionContainer}
                onPress={handleJantaSelection}
            >
                <View style={styles.checkbox}>
                    {jantaSelected && <View style={styles.checkedBox} />}
                </View>
                <Text style={styles.optionText}>Janta</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.optionContainer}
                onPress={handleLancheNoiteSelection}
            >
                <View style={styles.checkbox}>
                    {lancheNoiteSelected && <View style={styles.checkedBox} />}
                </View>
                <Text style={styles.optionText}>Lanche da Noite</Text>
            </TouchableOpacity>
        </View>
    );
}