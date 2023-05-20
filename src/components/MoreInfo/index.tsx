import { Text, View, ScrollView, Pressable, Linking, TouchableOpacity, Image } from "react-native";
import Modal from 'react-native-modal';
import { format, parseISO } from "date-fns";
import { Item as ItemType } from "../../base/Types";

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
            alert('Não foi possível abrir a URL.'+error)
        }

    }

    const menosInformacoes = () => {
        setVisivel({ exibir: false, item: null })
    }

    return (
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
                <View style={[styles.contentModalInfo, { backgroundColor: bgc }]}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={styles.titleAndImage}>
                            <Text style={styles.titleModal}>{item.title}</Text>
                            {item.resource && (
                                <Image style={styles.imageModal} source={{ uri: item.resource.secure_url }} />
                            )}
                        </View>

                        <View>
                            <Text style={styles.contentsInfo}>{item.contents}</Text>
                            {item.referenceLinks &&
                                <View style={styles.listaLinks}>
                                    {item.referenceLinks.map((link: string, index: number) => (
                                        <TouchableOpacity key={index} onPress={() => abrir(link)}>
                                            <Text style={styles.textLink}>{link}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            }
                        </View>

                        <View style={styles.footerModal}>
                            <Text style={styles.dataModal}>{format(parseISO(item.createdAt), 'dd/MM/yyyy')}</Text>

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