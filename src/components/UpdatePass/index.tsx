import React, { useContext, useState, useEffect } from "react";
import Modal from 'react-native-modal';
import { View, Text, Keyboard, Dimensions } from 'react-native';

import { api } from "../../config";
import { AuthContext } from "../../context/auth";

import styles from "./styles";
import { Button } from "../Button";
import { InputGroup } from "../InputGroup";
import VALIDATION from "ifce-crato-app/src/pages/SignUp/Validations";
import { RFValue } from "react-native-responsive-fontsize";

type BoxProps = {
    visivel: boolean;
    close: () => void;
}

function UpdatePass({ visivel, close }: BoxProps) {

    const [currentPass, setCurrentPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmNewPass, setConfirmNewPass] = useState('');
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [canSave, setCanSave] = useState(false);
    const [formHasBeenSent, setFormHasBeenSent] = useState(false);

    const { aviso, setScreenLoading } = useContext(AuthContext);
    const [errorsModal, setErrorsModal] = useState({
        show: false,
        errors: [] as Array<string>
    });

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

    const handleClose = () => {
        setCurrentPass('');
        setNewPass('');
        setConfirmNewPass('');
        setCanSave(false);
        setErrorsModal({
            show: false,
            errors: []
        });

        close();
    }

    useEffect(() => {
        if (
            currentPass.trim().length &&
            newPass.trim().length &&
            confirmNewPass.trim().length
        ) {
            setCanSave(true)
        } else {
            setCanSave(false)
        }
    }, [currentPass, newPass, confirmNewPass])

    const verifyErrors = (): string[] => {
        const errors = [];

        if (!VALIDATION.PASSWORD(currentPass)) errors.push("Senha Atual");
        if (!VALIDATION.PASSWORD(newPass)) errors.push("Nova Senha");
        if (confirmNewPass !== newPass && !!confirmNewPass.length) errors.push("Confirmação de Senha");

        return errors;
    }

    const alertMessage = (error: string | string[]) => {
        setTimeout(() => {
            setErrorsModal({
                show: false,
                errors: []
            });
        }, 2500)
        setErrorsModal({
            show: true,
            errors: Array.isArray(error) ? error : [error]
        });
    }

    const handleUpdatePass = async () => {
        setFormHasBeenSent(true);
        const errors = verifyErrors();
        if (errors.length) return alertMessage(errors)

        try {
            setScreenLoading(true);
            await api.patch('users/update-password', {
                currentPassword: currentPass,
                newPassword: newPass
            })
            setScreenLoading(false);
            close();
            aviso('Senha alterada com sucesso', 'success', RFValue(65));
        } catch (error: any) {
            setScreenLoading(false);
            if (error.response) {
                if (error.response.data.message === 'Invalid current password') {
                    alertMessage('A senha atual está incorreta');
                } else {
                    close();
                    aviso('Houve um contratempo, tente novamente mais tarde.', 'danger', RFValue(65))
                }
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
            onBackButtonPress={handleClose}
            statusBarTranslucent={true}

            style={{ paddingBottom: keyboardHeight - 56 }}
        >
            <View style={styles.viewModal}>

                {
                    errorsModal.show &&
                    <View style={styles.errorMessage}>
                        <Text style={styles.titleError}>Verifique os seguintes campos:</Text>
                        {errorsModal.errors.map(labels => (
                            <Text style={styles.listErrors}>{labels}</Text>
                        ))}
                    </View>
                }

                <View style={styles.contentModalInfo}>
                    <InputGroup
                        label="Senha Atual"
                        value={currentPass}
                        type="pass"
                        required={true}
                        submit={formHasBeenSent}
                        atualiza={setCurrentPass}
                        errorMessage={{
                            valueIsValid: VALIDATION.PASSWORD,
                            messageErro: "A senha é composta por ao menos 8 caracteres!!"
                        }}
                    />

                    <InputGroup
                        label="Nova Senha"
                        value={newPass}
                        type="pass"
                        required={true}
                        submit={formHasBeenSent}
                        atualiza={setNewPass}
                        errorMessage={{
                            valueIsValid: VALIDATION.PASSWORD,
                            messageErro: "Nova senha deve ter no minimo 8 caracteres!"
                        }}
                    />

                    <InputGroup
                        label="Confirmar Senha"
                        value={confirmNewPass}
                        type="pass"
                        required={true}
                        submit={formHasBeenSent}
                        atualiza={setConfirmNewPass}
                        errorMessage={{
                            valueIsValid: (cp: string) => (cp === newPass && !!cp.length),
                            messageErro: (
                                confirmNewPass.length ?
                                    "As senhas não são iguais!" :
                                    "Confirmar senha!"
                            )
                        }}
                    />

                </View>

                <View style={styles.footer}>
                    <Button typeButton="backButton" onPress={handleClose}>
                        <Text style={styles.textBtn}>Cancelar</Text>
                    </Button>

                    <Button
                        disabled={!canSave}
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