import React, { useContext } from "react";
import Modal from 'react-native-modal';
import { View, Text, Pressable, TextInput, ActivityIndicator } from 'react-native';
import { api } from "../../config";
import { defaultStyleProperties } from '../../base/styles'
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { InputGroup } from "../InputGroup";

import { RefectoryContext } from '../../context/refectory.context';
import { AuthContext } from "../../context/auth";
import ButtonLoading from "../ButtonLoading";

type BoxProps = {
    isVisible: boolean;
    setVisible: () => void;
    action: 'update' | 'create';
}

function MenuFormUrlModal({ isVisible, setVisible, action }: BoxProps) {
    
    const [menuUrl, setMenuUrl] = React.useState<string>('')
    const [loading, setLoading] = React.useState<boolean>(false)

    const { aviso } = useContext(AuthContext);
    const { refectory, setRefectoryStoraged } = useContext(RefectoryContext);

    const handleUpdateMenuUrl = async () => {
        setLoading(true)
        try {
            await api.put('refectory/menu-url', { menuUrl });
            aviso('Link para cardápio atualizado com sucesso', 'success');
            
            if (refectory) {
                await setRefectoryStoraged({ ...refectory, menuUrl })
            }
            
            clearInputs()
            setLoading(false)
            setVisible();
        } catch (error: any) {
            setLoading(false)
            console.log(error.response);
            aviso('Falha ao atualizar link para cardápio', 'danger');
        }
    }

    const handleMenuUrl = (v: string) => {
        setMenuUrl(v)
    }

    const clearInputs = () => {
        setMenuUrl('')
    }
    
    return(
        <Modal
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            isVisible={isVisible}
            backdropOpacity={0.8}
            onBackButtonPress={setVisible}
            onBackdropPress={setVisible}
            statusBarTranslucent={true}
        >
            <View style={styles.viewModal}>
                    <View style={styles.contentModalInfo}>
                        <Icon style={styles.closeIcon} onPress={setVisible} name="close"/>
                        <View style={{ width: '100%' }}>
                            <Text style={styles.contentsInfo}>
                                Cardápio
                            </Text>
                            <InputGroup 
                                atualiza={(v) => handleMenuUrl(v)}
                                required={true}
                                label={'Anexe o link da planila aqui'}
                                multiline={false}
                                value={menuUrl}
                                heigth={40}
                                textContentType="URL"
                                borderWidth={1}
                            />
                        </View>

                        <View style={styles.containerBtn}>
                            <Pressable
                                style={styles.btnOk}
                                onPress={handleUpdateMenuUrl}
                            >
                                <Text style={styles.textBtn}>
                                    { loading ? 
                                    <ButtonLoading size={'small'} color={defaultStyleProperties.blueColor}/>
                                    : 
                                    'Salvar'
                                    }
                                </Text>
                            </Pressable>
                        </View>
                    </View>
            </View>
            
        </Modal>
    );
}

export default MenuFormUrlModal;