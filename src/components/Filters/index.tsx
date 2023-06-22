import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { constantCategories, constantColors } from "../../base/constants"

import styles from "./styles";

type FiltersProps = {
    item: string,
    selectedCategories: string[]
    setSelectedCategories: (value: string[]) => any
}

function Filtros({ item, setSelectedCategories, selectedCategories }: FiltersProps) {

    const [ativo, setAtivo] = useState(false);
    const [bgc, setBgc] = useState<string>();

    useEffect(() => {
        if (ativo) {
            setBgc(constantColors[constantCategories[item]]);
            return;
        }

        if (!ativo) {
            setBgc(undefined);
            return;
        }
    }, [ativo])

    const handlePress = (value: string) => {
        setAtivo(!ativo)

        const alreadyExists = selectedCategories.find((category) => category == constantCategories[value])

        if (!alreadyExists) {
            setSelectedCategories([...selectedCategories, constantCategories[value]])
        } else {
            setSelectedCategories(selectedCategories.filter((item) => item != constantCategories[value]))
        }
    }

    return (
        <TouchableOpacity onPress={() => handlePress(item)} style={[
            styles.btnFiltro,
            {
                backgroundColor: bgc,
                borderColor: constantColors[constantCategories[item]],
                borderWidth: 3,
            }
        ]}>
            <Text style={styles.labelFiltro}>{item}</Text>
        </TouchableOpacity>
    )
};

export default Filtros;
