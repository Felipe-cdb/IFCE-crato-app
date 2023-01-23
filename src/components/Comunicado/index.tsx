import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FILTROS from "../../base/FILTROS";
import { ItemType } from "../../Types";
import styles from "./styles";

interface ComunicadoProps {
    item: ItemType;
    exibir: Function;
    isGestorDeMural: boolean;
}

function Comunicado({ item, exibir, isGestorDeMural }: ComunicadoProps) {
    const cor = FILTROS.filter(obj => obj.nome === item.category)[0].cor;
    
    const [showMore, setShowMore] = useState(false);
    const [numLines, setNumLines] = useState<number | undefined>(undefined);
    
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

    return(
        <View style={[styles.comunicadoContainer, {backgroundColor: cor}]}>
            {isGestorDeMural &&
                (<TouchableOpacity style={styles.apagarComunicado}>
                    <Icon name="window-close" style={styles.apagarIcon} color="#000" />
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
                        <Image style={styles.imageMais} source={require('./../../assets/images/mais.png')}/>
                        <Text style={styles.maisText}>Saiba mais</Text>
                    </TouchableOpacity>)
                }
                <Text style={[styles.textComunicado, styles.date]}>{item.date}</Text>
            </View>
            
        </View>
    );
}

export default Comunicado;