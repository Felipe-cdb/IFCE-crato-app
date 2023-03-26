import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { constantCategories } from "../../base/constants";
import { Filters as FiltersType } from '../../base/Types'

import styles from "./styles";

type FiltersProps = {
    item: FiltersType
    selectedCategories: string[]
    setSelectedCategories: (value: string[]) => any
}

function Filtros({ item, setSelectedCategories, selectedCategories }: FiltersProps) {

    const [ativo, setAtivo] = useState(false);
    const [bgc, setBgc] = useState({});

    useEffect(() => {
        if (ativo) {
            setBgc({ backgroundColor: item.cor });
            return;
        }

        if (!ativo) {
            setBgc({});
            return;
        }
    }, [ativo])

    const handlePress = (value: string) => {
        setAtivo(!ativo)

        const formatedCategory = formatCategories(value)
        const alreadyExists = selectedCategories.find((item) => item == formatedCategory)
        
        if(!alreadyExists) {
            setSelectedCategories([...selectedCategories, formatedCategory])
        } else {
            setSelectedCategories(selectedCategories.filter((item) => item != formatedCategory))
        }
    }

    const formatCategories = (category: string): string => {
        return constantCategories[category]
    }

    return (
        <TouchableOpacity onPress={() => handlePress(item.nome)} style={[styles.btnFiltro, bgc]}>
            <Text style={styles.labelFiltro}>{item.nome}</Text>
        </TouchableOpacity>
    )
};

export default Filtros;
