import react, { useState } from "react";
import { Text, View, ScrollView, Pressable, Linking, TouchableOpacity, Image } from "react-native";
import Modal from 'react-native-modal';
import { ItemType } from "../../base/Types";

import styles from "./styles";

interface IInfoProps {
    item: ItemType;
    bgc: string;
    visivel: boolean;
    setVisivel: Function;
}

function MaisInfo({ item, bgc, visivel, setVisivel }: IInfoProps) {

    const abrir = async (link: string) => {
        try {
            await Linking.openURL(link);
        } catch (error) {
            alert('Não foi possível abrir a RRL.'+error)
        }

    }

    const menosInformacoes = () => {
        setVisivel({exibir: false, item: null})
    }

    return(
        <Modal
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            isVisible={visivel}
            backdropOpacity={0.8}
            onBackButtonPress={menosInformacoes}
            onBackdropPress={menosInformacoes}
            statusBarTranslucent={true}
        >
            <View style={styles.viewModal}>
                    <View style={[styles.contentModalInfo, {backgroundColor: bgc}]}>
                        <ScrollView showsVerticalScrollIndicator={false}>

                            <View style={styles.titleAndImage}>
                                <Text style={styles.titleModal}>{item.title}</Text>
                                {item.img && (
                                    <Image style={styles.imageModal} source={{uri: item.img}}/>
                                )}
                            </View>

                            <View>
                                <Text style={styles.contentsInfo}>{item.contents}</Text>
                                {item.referenceLink &&
                                        <View style={styles.listaLinks}>
                                            {item.referenceLink.map((link, index) => (
                                                <TouchableOpacity key={index} onPress={() => abrir(link)}>
                                                    <Text style={styles.textLink}>{link}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                }
                            </View>

                            <View style={styles.footerModal}>
                                <Text style={styles.dataModal}>{item.date}</Text>

                                <View style={styles.containerBtnOk}>
                                    <Pressable style={styles.btnOk} onPress={() => menosInformacoes()}>
                                        <Text>OK</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
            </View>
            
        </Modal>
    )
}

export default MaisInfo;