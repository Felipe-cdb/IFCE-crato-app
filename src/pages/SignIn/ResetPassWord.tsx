import React, { useState, useContext } from "react";
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { AuthContext } from "../../context/auth";
import { InputGroup } from "../../components/InputGroup";
import CodeInput from "../../components/CodeInput";
import styles from "./styles";
import { api } from "../../config";
import { Button } from "../../components/Button";
import Tooltip from "../../components/Tooltip";

interface IResetPassWord {
    newPass: string,
    confirmeNewPass: string,
}

const ResetPassWord = ({route}: any) => {

    const email = route.params!.email;
    const [code, setCode] = useState<string>('');
    const [formResetPass, setFormResetPass] = useState({} as IResetPassWord);
    const { aviso, changeUserValues, setLoggedUser, setScreenLoading } = useContext(AuthContext);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const handleChangeNewPass = (value: string) => {
        setFormResetPass({...formResetPass, newPass: value});
    }

    const handleChangeConfirmeNewPass = (value: string) => {
        setFormResetPass({...formResetPass, confirmeNewPass: value});
    }

    function maskEmail(email: string) {
        const atIndex = email.indexOf('@');
        const domain = email.slice(atIndex + 1);
        const maskedUsername = email.slice(0, 2) + '*'.repeat(atIndex - 2);
        const maskedDomain = domain.slice(0, 1) + '*'.repeat(domain.length - 5) + domain.slice(-3);
        return maskedUsername + '@' + maskedDomain;
    }

    const handleCodeNewPass = async () => {
        try {
            await api.post('/auth/forgot-password', {email});
            aviso("Email de recuperação de senha enviado com sucesso", 'success');
            return;
        } catch (error: any) {
            aviso("Ocorreu um erro inesperado, tente mais tarde!", 'danger');
        }
    }

    const handlePassword = async () => {
        if (!code.trim().length || !formResetPass.newPass.trim() || !formResetPass.confirmeNewPass.trim()) {
            aviso('Preencha todos os campos corretamente', 'warning');
            return;
        }

        if (formResetPass.newPass != formResetPass.confirmeNewPass) {
            aviso('As senhas fornecidas são diferentes!', 'warning');
            return;
        }
        
        if (formResetPass.newPass.length < 8){
            aviso('A senha deve ter no minimo 8 caracteres!', 'warning');
            return;
        }

        setScreenLoading(true);
        try {
            const userResponse = await api.patch('/auth/reset-password', {
                code, newPassword: formResetPass.newPass
            });
            await changeUserValues(userResponse.data);
            setLoggedUser();
            aviso("Senha alterada com sucesso", 'success');
            setScreenLoading(false);
            return;
        } catch (error: any) {
            setScreenLoading(false);
            if (error?.response.data.message == 'Invalid code') {
                aviso("Código inválido!", 'danger');
                return;
            }
            aviso("Ocorreu um erro inesperado, tente mais tarde!", 'danger');
        }
    }
    return(
        <View style={[styles.container, {paddingHorizontal: RFValue(16)}]}>
            <View style={styles.containerBack}>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Icon name="keyboard-return" style={styles.iconBack}/>
                </TouchableOpacity>
            </View>

            <ScrollView
                contentContainerStyle={styles.contentResentMail}
                keyboardShouldPersistTaps={'handled'}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <View style={styles.containerTitle}>
                        <Text style={styles.titleValidation}>Redefinição de senha</Text>
                        <Tooltip
                            tooltipText='Caso não encontre o email na caixa principal, verifique em SPANS.'
                        >
                            <Icon style={styles.iconInformations} name="information-outline"/>
                        </Tooltip>
                    </View>
                    <View style={styles.containerCodeValidation}>
                        <Text style={styles.codeInformtions}>Informe abaixo o código enviado para: {maskEmail(email)}</Text>
                        <CodeInput
                            code={code}
                            setCode={setCode}
                        />

                        <TouchableOpacity style={styles.btnNewCode} onPress={handleCodeNewPass}>
                            <Text style={styles.textBtnCode}>Reenvie um novo código</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.passWordContainer}>
                        <InputGroup
                            label="Nova senha"
                            value={formResetPass.newPass}
                            required={false}
                            atualiza={handleChangeNewPass}
                            pass={true}
                        />

                        <InputGroup
                            label="Confirmar nova senha"
                            value={formResetPass.confirmeNewPass}
                            required={false}
                            atualiza={handleChangeConfirmeNewPass}
                            pass={true}
                        />
                    </View>
                </View>

                <Button typeButton="mainButton" onPress={handlePassword}>
                    <Text style={styles.btnText}>Atualizar senha</Text>
                </Button>
            </ScrollView>
        </View>
    )
}

export default ResetPassWord;