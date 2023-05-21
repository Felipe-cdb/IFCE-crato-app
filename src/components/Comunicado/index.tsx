import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';
import { constantColors } from "../../base/constants";
import { Item as ItemType } from "../../base/Types";
import styles from "./styles";

interface ComunicadoProps {
    item: ItemType;
    exibir: Function;
    isGestorDeMural?: boolean;
    setDeletion?: (id: string) => void;
}

function Comunicado({ item, exibir, isGestorDeMural, setDeletion }: ComunicadoProps) {
    const [showMore, setShowMore] = useState(false);
    const [numLines, setNumLines] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (item.resource || item.referenceLinks?.length) setShowMore(true);
    }, [])

    const handleTextLayout = ({ nativeEvent }: any) => {
        if (nativeEvent.lines.length > 5) {
            setNumLines(4)
            setShowMore(true);
        }
    };

    const maisInfo = () => {
        exibir({
            exibir: true,
            item: item
        })
    }

    return (
        <>
            <View style={[styles.comunicadoContainer, { backgroundColor: constantColors[item.category] }]}>
                {(isGestorDeMural && setDeletion) &&
                    (<TouchableOpacity
                        style={styles.apagarComunicado}
                        onPress={() => setDeletion(item.id)}
                    >
                        <Icon name="close" style={styles.apagarIcon} />
                    </TouchableOpacity>)
                }
                <View style={styles.textContent}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text
                        style={styles.textComunicado}
                        numberOfLines={numLines}
                        onTextLayout={handleTextLayout}
                    >{item.contents}</Text>
                </View>
                <View style={styles.footerCard}>
                    {showMore &&
                        (<TouchableOpacity style={styles.btnMais} onPress={() => maisInfo()}>
                            <Icon name="add-circle-outline" style={styles.iconMais} />
                            <Text style={styles.maisText}>Saiba mais</Text>
                        </TouchableOpacity>)
                    }
                    <Text style={[styles.textComunicado, styles.date]}>{format(new Date(item.createdAt), 'dd/MM/yyyy')}</Text>
                </View>

            </View>
        </>
    );
}

export default Comunicado;