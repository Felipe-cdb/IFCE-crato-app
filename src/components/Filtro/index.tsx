import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { FiltersType } from '../../base/Types'

import styles from "./styles";

type FiltersProps = {
    item: FiltersType
}

function Filtros({ item }: FiltersProps) {

    const [ativo, setAtivo] = useState(false);
    const [bgc, setBgc] = useState({});

    useEffect(() => {
        if (ativo) {
            setBgc({backgroundColor: item.cor});
            return;
        }

        if (!ativo) {
            setBgc({});
            return;
        }
    }, [ativo])

    return(
        <TouchableOpacity onPress={() => setAtivo(!ativo)} style={[styles.btnFiltro, bgc]}>
            <Text style={styles.labelFiltro}>{item.nome}</Text>
        </TouchableOpacity>
    )
};

export default Filtros;
