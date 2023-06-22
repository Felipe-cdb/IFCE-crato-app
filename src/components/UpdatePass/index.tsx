import React, { useContext, useState, useEffect } from "react";
import Modal from 'react-native-modal';
import {
    View, Text, TextInput, TouchableOpacity,
    Keyboard, StyleProp, ViewStyle, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { api } from "../../config";
import { AuthContext } from "../../context/auth";

import styles from "./styles";
import { Button } from "../Button";
import { InputGroup } from "../InputGroup";

type BoxProps = {
    visivel: boolean;
    close: () => void;
}

type InputPassProp = {
    pass: string;
    setPass: React.Dispatch<React.SetStateAction<string>>;
    label: string;
}

function UpdatePass({ visivel, close }: BoxProps) {

    const [currentPass, setCurrentPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmNewPass, setConfirmNewPass] = useState('');
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const { aviso, setScreenLoading } = useContext(AuthContext);
    const [canSave, setCanSave] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            e => {
                setKeyboardHeight(e.endCoordinates.height);
            }
        );

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardHeight(0);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    useEffect(() => {
        if (newPass.trim().length>=8 && newPass.trim().length>0 &&
        currentPass.trim().length<=0 &&
        newPass === confirmNewPass && confirmNewPass.trim().length<=0){
            setCanSave(true)
        } else{
            setCanSave(false)
        }
    }, [currentPass, newPass, confirmNewPass])

    const handleUpdatePass = async () => {
        if (!currentPass.trim() || !newPass.trim() || !confirmNewPass.trim()) {
            aviso('Preencha todos os campos para prosseguir', 'warning');
            return;
        }

        if (newPass != confirmNewPass) {
            aviso('Nova senha e confirmar nova senha não são iguais', 'warning');
            return;
        }

        if (newPass.length < 8) {
            aviso('A senha deve ter no minimo 8 caracteres', 'warning');
            return;
        }

        try {
            setScreenLoading(true);
            await api.patch('users/update-password', {
                currentPassword: currentPass,
                newPassword: newPass
            })
            setScreenLoading(false);
            close();
            aviso('Senha alterada com sucesso', 'success');
        } catch (error: any) {
            setScreenLoading(false);
            console.log(error.response);
            if (error.response) {
                if (error.response.data.message === 'Invalid current password') {
                    aviso('A senha atual está incorreta', 'danger');
                }
            } else {
                aviso('Houve um contratempo, tente novamente mais tarde.', 'danger')
            }
        }
    }

    return (
        <Modal
            animationIn={"slideInDown"}
            animationOut={"slideOutDown"}
            animationInTiming={800}
            animationOutTiming={800}
            isVisible={visivel}
            backdropOpacity={0.5}
            deviceHeight={Dimensions.get('window').height + 40}
            onBackButtonPress={close}
            statusBarTranslucent={true}
            
            style={{ paddingBottom: keyboardHeight - 56 }}
        >
            <View style={styles.viewModal}>
                <View style={styles.contentModalInfo}>

                    <InputGroup
                        atualiza={setCurrentPass}
                        value={currentPass}
                        required={false}
                        label="Senha atual"
                        pass={true}
                    />

                    <InputGroup
                        value={newPass}
                        required={false}
                        atualiza={setNewPass}
                        label="Nova senha"
                        pass={true}
                        err={{
                            isInvalid: newPass.trim().length<8 && newPass.trim().length>0,
                            message: "Senha deve conter no minimo 8 caracteres"
                        }}
                    />

                    <InputGroup
                        value={confirmNewPass}
                        required={false}
                        atualiza={setConfirmNewPass}
                        label="Confirmar nova senha"
                        pass={true}
                        err={{
                            isInvalid: newPass !== confirmNewPass && confirmNewPass.trim().length>0,
                            message: "Senha deve conter no minimo 8 caracteres"
                        }}
                    />

                </View>

                <View style={styles.footer}>
                    <Button typeButton="backButton" onPress={close}>
                        <Text style={styles.textBtn}>Cancelar</Text>
                    </Button>

                    <Button
                        disabled={ canSave }
                        typeButton="mainButton"
                        onPress={handleUpdatePass}
                    >
                        <Text style={styles.textBtn}>Salvar</Text>
                    </Button>
                </View>
            </View>
        </Modal>
    );
}

export default UpdatePass;