import React, { useState, useContext, useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, Image, Platform } from "react-native";
import FormData from 'form-data';
import { manipulateAsync } from 'expo-image-manipulator'
import * as ImagePicker from 'expo-image-picker';

import Menu from "../../components/Menu";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { InputGroup } from "../../components/InputGroup";
import { Button } from "../../components/Button";
import styles from "./styles";
import { AuthContext } from "../../context/auth";
import { api } from "../../config";
import UpdatePass from "../../components/UpdatePass";

interface ISelectedImage {
    uri: string,
    name?: string,
    type: string,
}

function EditProfile(){

    const [updatePass, setUpadetePass] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedImage, setSelectedImage] = useState<ISelectedImage | null>(null);
    const { user, aviso, setScreenLoading, userReload } = useContext(AuthContext);
    const [imageUri, setImageUri] = useState(user.avatarUrl);

    const handleUpload = async () => {
        try {
          const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
          if (!granted) return;
    
          const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
          });
    
          if (result.canceled) {
              return;
          }
    
          const manipulatedImage = await manipulateAsync(
            result.assets[0].uri,
            [{ resize: { width: 800 } }],
            { compress: 0.5 }
          );
    
          const localUri = manipulatedImage.uri;
          const filename = localUri.split('/').pop();
          const match = /\.(\w+)$/.exec(filename as string);
          const type = match ? `image/${match[1]}` : `image`;
          setSelectedImage({
            uri:  Platform.OS === 'ios' ? localUri.replace('file://', '') : localUri,
            name: filename,
            type
          });
          setImageUri(localUri);
        } catch (error) {
          aviso('Error ao anexar imagem', 'danger');
        }
    };

    const handleUpdateAccount = async () => {
        if(!selectedImage?.uri && !name.trim() && !phone.trim()){
            aviso( 'Para solicitar alteração é necessário modificar algum dos campos.', 'warning');
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
            // userReload();
            setName('');
            setPhone('');
            aviso("Dados autualizados com sucesso", "success");
        } catch (error: any) {
            console.log(error)
            setScreenLoading(false);
            if (error.response){
            if (error.response.data.message === "Duplicate Email entered") {
                aviso("Usuário já cadastrado", "warning");
            } else if (error.response.data.message === "phoneNumber must be a valid phone number") {
                aviso("Número de telefone inválido", "warning");
            } else {
                console.log(error.response)
                aviso("Ocorreu um erro inesperado!", "warning");
            }

            }else {
            aviso("Ocorreu um erro inesperado!", "warning");
            }
        }
    }

    return(<>
        <Menu />
        <UpdatePass
            close={() => setUpadetePass(false)}
            visivel={updatePass}
        />
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity
                    style={styles.contenteImageProfile}
                    onPress={handleUpload}
                >{
                    imageUri ?
                    <Image source={{uri: imageUri}}  style={styles.imageProfile}/> :
                    <Icon name="account" style={styles.iconProfile}/>
                }</TouchableOpacity>

                <InputGroup
                    atualiza={setName}
                    label="Nome"
                    required={false}
                    value={name}
                />
                
                <InputGroup
                    atualiza={setPhone}
                    label="Celular"
                    required={false}
                    value={phone}
                />

                <Button
                    typeButton="extraButton"
                    style={styles.newPassBtn}
                    onPress={() => setUpadetePass(true)}
                >
                    <View style={styles.containerBtnPass}>
                        <Text style={styles.textResetPass}>Redefinir Senha</Text>
                        
                        <Icon name="lock-reset" style={styles.iconResetPass}/>
                    </View>
                </Button>
            </View>

            <View style={styles.footer}>
                <Button typeButton="backButton">
                    <Text style={styles.textBtnCacel}>Cancelar</Text>
                </Button>

                <Button typeButton="mainButton" onPress={handleUpdateAccount}>
                    <Text style={styles.textBtnsave}>Salvar</Text>
                </Button>
            </View>
        </SafeAreaView>
    </>)
}

export default EditProfile;