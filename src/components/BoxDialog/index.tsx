import React, { useContext } from "react";
import Modal from 'react-native-modal';
import { View, Text, Pressable } from 'react-native';
import { api } from "../../config";
import { AuthContext } from "../../context/auth";

import styles from "./styles";
import { Button } from "../Button";
import { RFValue } from "react-native-responsive-fontsize";

type BoxProps = {
    visible: boolean;
    lessInfo: () => void;
    deleteId: string;
    refreshing: () => void;
    typeDeletion: 'communique' | 'form_refectory'
}

function BoxDialog({ visible, lessInfo, deleteId, refreshing, typeDeletion }: BoxProps) {
    
    const { aviso } = useContext(AuthContext);

    const handleDelete = async () =>{
        if (typeDeletion == 'communique'){
            try {
                await api.delete(`communique/${deleteId}`);
                aviso('Comunicado removido com sucesso', 'success', RFValue(64));
                refreshing();
            } catch (error) {
                aviso('Falha na exclusão do comunicado', 'danger', RFValue(64));
            }
        } else if (typeDeletion == 'form_refectory'){
            try {
                await api.delete(`refectory/${deleteId}`);
                aviso('Formulário removido com sucesso', 'success', RFValue(64));
                refreshing();
            } catch (error) {
                console.log(error);
                aviso('Falha na exclusão do comunicado', 'danger', RFValue(64));
            }
        }

        lessInfo();

    }
    
    return(
        <Modal
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            isVisible={visible}
            backdropOpacity={0.8}
            onBackButtonPress={lessInfo}
            onBackdropPress={lessInfo}
            statusBarTranslucent={true}
        >
            <View style={styles.viewModal}>
                    <View style={styles.contentModalInfo}>

                        <View>
                            <Text style={styles.contentsInfo}>
                                Excluir {
                                    typeDeletion == 'communique' ?
                                    'comunicado' : 'formulário'
                                }?
                            </Text>
                        </View>

                        <View style={styles.containerBtn}>

                            <Button
                                typeButton="backButton"
                                onPress={() => lessInfo()}
                            >
                                <Text style={styles.textBtn}>
                                    Cancelar
                                </Text>
                            </Button>

                            <Button
                                typeButton="mainButton"
                                onPress={handleDelete}
                            >
                                <Text style={styles.textBtn}>
                                    Confirmar
                                </Text>
                            </Button>
                        </View>
                    </View>
            </View>
            
        </Modal>
    );
}

export default BoxDialog;