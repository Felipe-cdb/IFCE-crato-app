import React, { useContext, useState, useEffect } from "react";
import Modal from 'react-native-modal';
import {
    View, Text, TextInput, TouchableOpacity,
    Keyboard, StyleProp, ViewStyle
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { api } from "../../config";
import { AuthContext } from "../../context/auth";

import styles from "./styles";
import { Button } from "../Button";

type BoxProps = {
    visivel: boolean;
    close: () => void;
}

type InputPassProp = {
    pass: string;
    setPass: React.Dispatch<React.SetStateAction<string>>;
    label: string;
}

const InpuPass = ({ pass, setPass, label }: InputPassProp) => {

    const [visible, setVisible] = useState(true);
    const [border, setBorder] = useState<StyleProp<ViewStyle>>({});

    const handletextInput = (value: string) => {
        setPass(value);
        if (!value.trim()) {
            setBorder({
                borderWidth: 1,
                borderColor: 'red'
            });
            return;
        }

        setBorder({});
    }

    return (
        <View style={{ marginTop: 24 }}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.contntInpuPass}>
                <TextInput
                    style={[styles.inputLog, border]}
                    value={pass}
                    secureTextEntry={visible}
                    textContentType='password'
                    autoCapitalize='none'
                    onChangeText={handletextInput}
                />
                <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.viewPass}>
                    {
                        visible ? <Icon name="visibility" style={styles.iconEye} />
                            : <Icon name="visibility-off" style={styles.iconEye} />
                    }
                </TouchableOpacity>
            </View>
        </View>
    );
}

function UpdatePass({ visivel, close }: BoxProps) {

    const [currentPass, setCurrentPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmNewPass, setConfirmNewPass] = useState('');
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const { aviso, setScreenLoading } = useContext(AuthContext);

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
            backdropOpacity={0.1}
            onBackButtonPress={close}
            statusBarTranslucent={true}
            style={{ paddingBottom: keyboardHeight - 56 }}
        >
            <View style={styles.viewModal}>
                <View style={styles.contentModalInfo}>

                    <InpuPass
                        pass={currentPass}
                        setPass={setCurrentPass}
                        label="Senha atual"
                    />

                    <InpuPass
                        pass={newPass}
                        setPass={setNewPass}
                        label="Nova senha"
                    />

                    <InpuPass
                        pass={confirmNewPass}
                        setPass={setConfirmNewPass}
                        label="Confirmar nova senha"
                    />

                </View>

                <View style={styles.footer}>
                    <Button typeButton="backButton" onPress={close}>
                        <Text style={styles.textBtn}>Cancelar</Text>
                    </Button>

                    <Button typeButton="mainButton" onPress={handleUpdatePass}>
                        <Text style={styles.textBtn}>Salvar</Text>
                    </Button>
                </View>
            </View>
        </Modal>
    );
}

export default UpdatePass;