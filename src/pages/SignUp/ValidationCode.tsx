import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from "react-native-responsive-fontsize";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import CodeInput from "../../components/CodeInput";
import styles from "./styles";

const ValidationCode = () => {

    const [code, setCode] = useState<string>('');
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        if (code.includes('0')) {
            showMessage({
                message: 'O código de verificação inserido é inválido. Por favor, verifique o código enviado para o seu e-mail e tente novamente.',
                type: 'warning',
                autoHide: true,
                duration: 4000,
                floating: true,
                statusBarHeight: StatusBar.currentHeight,
                style: {
                    width: '90%',
                    marginVertical: '5%',
                    borderRadius: 8,
                    alignSelf: "center"
                }
            });

            setCode('');
        } else {
            console.log(code)
        }
    }, [code])

    const handleCreateNewPass = () => {
        showMessage({
            message: 'Um novo código foi enviado para seu e-mail, por favor verifique sua caixa de e-mail novamente.',
            type: 'none',
            autoHide: true,
            duration: 4000,
            floating: true,
            statusBarHeight: StatusBar.currentHeight,
            backgroundColor: '#FFF',
            color: '#000',
            style: {
                width: '90%',
                marginVertical: '5%',
                borderRadius: 8,
                alignSelf: "center"
            }
        });
    };

    function maskEmail(email: string) {
        const atIndex = email.indexOf('@');
        const domain = email.slice(atIndex + 1);
        const maskedUsername = email.slice(0, 2) + '*'.repeat(atIndex - 2);
        const maskedDomain = domain.slice(0, 1) + '*'.repeat(domain.length - 5) + domain.slice(-3);
        return maskedUsername + '@' + maskedDomain;
    }

    return(
        <View style={[styles.container, {paddingHorizontal: RFValue(16)}]}>
            <View style={styles.containerBack}>
                <TouchableOpacity onPress={() => navigation.navigate('create')}>
                    <Icon name="keyboard-return" style={styles.iconBack}/>
                </TouchableOpacity>
            </View>

            <View style={styles.contentValidation}>
                <Text style={styles.titleValidation}>Verificação de E-mail</Text>

                <View style={styles.infosValidation}>
                    <Text style={styles.infoText}>Um código de 4 dígitos foi enviado para:</Text>
                    <Text style={styles.infoMail}>{maskEmail("pa69731@gmail.com")}</Text>
                </View>

                <View style={styles.contentCode}>
                    <Text style={styles.infoText}>Por favor, insira esse código a seguir</Text>
                   
                    <View style={styles.optionsCode}>
                        <CodeInput onChange={setCode} valueCode={code}/>

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