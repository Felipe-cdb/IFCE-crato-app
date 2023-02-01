import React, { useState, useEffect } from "react";
import Modal from 'react-native-modal';
import { View, Text, Pressable } from 'react-native';

import styles from "./styles";

type BoxProps = {
    visivel: boolean;
    menosInformacoes: () => void;
}

function BoxDialog({ visivel, menosInformacoes }: BoxProps) {
    
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
                                Desja excluir o comunicado?
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
                                onPress={() => menosInformacoes()}
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