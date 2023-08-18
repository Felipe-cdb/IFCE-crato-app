import React, { useState, useEffect, useContext } from "react";
import { View, TouchableOpacity, Text, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import styles from "./styles";
import CodeInput from "../../components/CodeInput";
import { AuthContext } from "../../context/auth";
import Tooltip from "../../components/Tooltip/index";
import { maskEmail } from "../../helpers";

const ValidationCode = ({ route }: any) => {

    const email = route.params?.email;
    const [code, setCode] = useState<string>('');
    const [codeValid, setCodeValid] = useState(true);
    const navigation = useNavigation<StackNavigationProp<any>>();
    const { confirmCode, resendCode } = useContext(AuthContext);

    const errorInCode = () => {
        setCode('');
        setCodeValid(false);
    }
    
    useEffect(() => {
        function completeCode() {
            if (code.trim().length < 4) return;

            confirmCode(email, code, errorInCode);
            return;
        }

        completeCode();
    }, [code]);

    useFocusEffect(
        React.useCallback(() => {
            setCode('');
        }, [])
    )

    const handleCreateNewPass = () => {
        resendCode(email, 'Um novo código foi enviado para seu email, verifique sua caixa de emails')
    };

    return (
        <View style={[styles.container]}>
            <View style={styles.containerBack}>
                <TouchableOpacity onPress={() => navigation.navigate('create')}>
                    <Icon name="keyboard-return" style={styles.iconBack} />
                </TouchableOpacity>
            </View>

            <View style={styles.contentValidation}>
                <View style={styles.titleValidationContainer}>
                    <Text style={styles.titleValidation}>Verificação de E-mail</Text>
                    <Tooltip
                        tooltipText='Caso não encontre o email na caixa principal, verifique em SPAMS.'
                    >
                        <Icon style={styles.iconInformation} name="information-outline" />
                    </Tooltip>
                </View>

                <View style={styles.infosValidation}>
                    <Text style={styles.infoText}>Um código de 4 dígitos foi enviado para:</Text>
                    <Text style={styles.infoMail}>{maskEmail(email)}</Text>
                </View>

                <View style={styles.contentCode}>
                    <Text style={styles.infoText}>Por favor, insira esse código a seguir</Text>

                    <View style={styles.optionsCode}>
                        <CodeInput
                            setCode={setCode}
                            code={code}
                            valid={{
                                isValid: codeValid,
                                message: "Código iválido!"
                            }}
                        />

                        <TouchableOpacity style={styles.btnNewCode} onPress={handleCreateNewPass}>
                            <Text style={styles.textBtnCode}>Reenvie um novo código</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default ValidationCode;