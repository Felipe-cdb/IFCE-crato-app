import React, { useContext } from "react";
import Modal from 'react-native-modal';
import { View, Text, Pressable } from 'react-native';
import { api } from "../../config";
import { AuthContext } from "../../context/auth";

import styles from "./styles";

type BoxProps = {
    visivel: boolean;
    menosInformacoes: () => void;
    communiqueId: string;
}

function BoxDialog({ visivel, menosInformacoes, communiqueId }: BoxProps) {
    
    const { aviso } = useContext(AuthContext);

    const handleDelete = async () =>{
        try {
            await api.delete(`communique/${communiqueId}`);
            aviso('Comunicado removido com sucesso', 'success');
        } catch (error) {
            console.log(error);
            aviso('Falha na exclusão do comunicado', 'danger');
        }

        menosInformacoes();

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
                    <View style={styles.contentModalInfo}>

                        <View>
                            <Text style={styles.contentsInfo}>
                                Confirmar exclusão de comunicado?
                            </Text>
                        </View>

                        <View style={styles.containerBtn}>

                            <Pressable
                                style={styles.btnCancel}
                                onPress={() => menosInformacoes()}
                            >
                                <Text style={styles.textBtn}>
                                    Não
                                </Text>
                            </Pressable>

                            <Pressable
                                style={styles.btnOk}
                                onPress={handleDelete}
                            >
                                <Text style={styles.textBtn}>
                                    Sim
                                </Text>
                            </Pressable>
                        </View>
                    </View>
            </View>
            
        </Modal>
    );
}

export default BoxDialog;