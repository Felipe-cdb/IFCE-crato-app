import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FILTROS from "../../base/FILTROS";
import { Item } from "../../base/Types";
import styles from "./styles";

interface ComunicadoProps {
    item: Item;
    exibir: Function;
    isGestorDeMural: boolean;
}

function Comunicado({ item, exibir, isGestorDeMural }: ComunicadoProps) {
    const cor = FILTROS.filter(obj => obj.nome === item.category)[0].cor;
    
    const [showMore, setShowMore] = useState(false);
    const [numLines, setNumLines] = useState<number | undefined>(undefined);
    
    useEffect(() => {
        if(item.img || item.referenceLink?.length) setShowMore(true);
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

    return(
        <Pressable
            style={[styles.comunicadoContainer, {backgroundColor: cor}]}
            onLongPress={() => {
                Alert.alert(
                    '',
                    "Deseja excluir o comunicado?",
                    [
                        {
                            text: "Não",
                            style: "cancel"
                          },
                          { 
                            text: "Sim", 
                            // onPress: () => Alert.alert("OK Clicado") 
                          }
                    ]
                )
            }}
        >
            {isGestorDeMural &&
                (<TouchableOpacity
                    style={styles.apagarComunicado}
                >
                    <Icon name="close" style={styles.apagarIcon} color="#000" />
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
                        <Icon name="add-circle-outline" style={styles.iconMais}/>
                        <Text style={styles.maisText}>Saiba mais</Text>
                    </TouchableOpacity>)
                }
                <Text style={[styles.textComunicado, styles.date]}>{item.date}</Text>
            </View>
            
        </Pressable>
    );
}

export default Comunicado;