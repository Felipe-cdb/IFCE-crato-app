import React, { useState, useContext, useEffect } from "react";
import {
    Text,
    View,
} from "react-native";
import FormData from 'form-data';
import { useFocusEffect } from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Menu from "../../components/Menu";
import { InputGroup } from "../../components/InputGroup";
import { Button } from "../../components/Button";
import styles from "./styles";
import { AuthContext } from "../../context/auth";
import { api } from "../../config";
import UpdatePass from "../../components/UpdatePass";
import { formatPhoneNumber } from "ifce-crato-app/src/helpers";
import { RFValue } from "react-native-responsive-fontsize";
import ImageInput from "ifce-crato-app/src/components/ImageInput";

interface ISelectedImage {
    uri: string,
    name?: string,
    type: string,
}

function EditProfile() {

    const [updatePass, setUpadetePass] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedImage, setSelectedImage] = useState<ISelectedImage | null>(null);
    const { user, aviso, setScreenLoading, userReload } = useContext(AuthContext);
    const [imageUri, setImageUri] = useState(user.avatarUrl);
    const [canSave, setCanSave] = useState(false);

    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        setName(user.name);
        setPhone(formatPhoneNumber(user.phoneNumber || ''));
    }, [user])

    useEffect(() => {
        if (
            (imageUri !== user.avatarUrl)
            || (name.trim().length && name !== user.name) ||
            (phone.trim().length && phone !== formatPhoneNumber(user.phoneNumber || ''))
        ) {
            setCanSave(false);
        } else {
            setCanSave(true)
        }

    }, [name, phone, imageUri])

    const handleUpdateAccount = async () => {
        setSubmit(true);
        if (!selectedImage?.uri && !name.trim() && !phone.trim()) {
            aviso('Para solicitar alteração é necessário modificar algum dos campos.', 'warning', RFValue(64));
            return;
        }

        const data = new FormData();

        if (name.trim()) {
            data.append('name', name);
        }
        if (phone.trim()) {
            data.append('phoneNumber', phone);
        }
        if (selectedImage) {
            data.append('file', selectedImage)
        }

        try {
            setScreenLoading(true);
            const res = await api.patch('users', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setScreenLoading(false);
            userReload();
            setName('');
            setPhone('');
            aviso("Dados autualizados com sucesso", "success", RFValue(64));
        } catch (error: any) {
            console.log(error)
            setScreenLoading(false);
            if (error.response) {
                if (error.response.data.message === "Duplicate Email entered") {
                    aviso("Usuário já cadastrado", "warning", RFValue(64));
                } else if (error.response.data.message === "phoneNumber must be a valid phone number") {
                    aviso("Número de telefone inválido", "warning", RFValue(64));
                } else {
                    console.log(error.response)
                    aviso("Ocorreu um erro inesperado!", "warning", RFValue(64));
                }

            } else {
                aviso("Ocorreu um erro inesperado!", "warning", RFValue(64));
            }
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            setName(user.name);
            setSelectedImage(null);
            setPhone(formatPhoneNumber(user.phoneNumber || ''));
            setImageUri(user.avatarUrl);
        }, [])
    )

    return (<>
        <Menu />
        <View style={styles.container}>
            <View style={styles.content}>
                <ImageInput
                    imageUri={imageUri}
                    setImageUri={setImageUri}
                    setSelectedImage={setSelectedImage}
                />

                <InputGroup
                    atualiza={setName}
                    label="Nome Completo"
                    required={true}
                    value={name}
                    submit={submit}
                    errorMessage={{
                        valueIsValid: (value) => value.trim().length>4,
                        messageErro: "Insira um nome válido"
                    }}
                />

                <InputGroup
                    atualiza={(v) => {
                        setPhone(formatPhoneNumber(v));
                    }}
                    label="Celular"
                    required={false}
                    value={phone}
                    maxLength={15}
                    keyboardType="number-pad"
                    placeholder="(XX) XXXXX-XXXX"
                    errorMessage={{
                        valueIsValid: (value) => value.length === 15,
                        messageErro: "Formato de telefone incorreto!"
                    }}
                    submit={submit}
                />

                <View style={styles.newPassBtn}>
                    <Button
                        typeButton="extraButton"
                        style={styles.newPassBtn}
                        onPress={() => setUpadetePass(true)}
                    >
                        <View style={styles.containerBtnPass}>
                            <Text style={styles.textResetPass}>Redefinir Senha</Text>

                            <Icon name="lock-reset" style={styles.iconResetPass} />
                        </View>
                    </Button>
                </View>
            </View>

            <View style={styles.footer}>
                <Button
                    typeButton="mainButton"
                    onPress={handleUpdateAccount}
                    disabled={canSave}
                >
                    <Text style={styles.footerBtn}>Salvar</Text>
                </Button>
            </View>
        </View>
        <UpdatePass
            close={() => setUpadetePass(false)}
            visivel={updatePass}
        />
    </>)
}

export default EditProfile;