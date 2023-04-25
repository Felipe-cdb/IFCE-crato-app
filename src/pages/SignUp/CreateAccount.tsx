import React, { useState, useContext, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity,
  KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { AuthContext } from '../../context/auth';
import { InputGroup, SelectGroup} from '../../components/InputGroup';
import { ICheckRegister } from '../../base/Interfaces';
import LogoIF from '../../components/LogoIF';
import styles from './styles';
import { UserTypes } from '../../base/Enums';
import { Button } from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as ImagePicker from 'expo-image-picker';
import { api } from '../../config';
import FormData from 'form-data';
import { manipulateAsync } from 'expo-image-manipulator'

interface ISelectedImage {
  uri: string,
  name?: string,
  type: string,
}

export default function CreateAccount() {

  const [selectedImage, setSelectedImage] = useState<ISelectedImage | null>(null);
  const [user, setUser] = useState<ICheckRegister>({type: UserTypes.STD} as ICheckRegister);

  const { aviso, setScreenLoading } = useContext(AuthContext);
  const navigation = useNavigation<DrawerNavigationProp<any>>()

  useFocusEffect(
    useCallback(() => {
      setUser({type: UserTypes.STD} as ICheckRegister);
      setSelectedImage(null)
    }, [])
  )

  const setNome = (nome: string) => {
    setUser(prevState => {
      return {...prevState, name: nome}
    })
  }
  
  const setCargo = (cargo: UserTypes) => {
    setUser(prevState => {
      return {...prevState, type: cargo, registration: '', siap: ''}
    })
  }
  
  const setIdentificacao = (identificacao: string) => {
    const constantKey = {
      [UserTypes.EMP]: 'siap',
      [UserTypes.STD]: 'registration'
    }
    setUser(prevState => {
      return {...prevState, [constantKey[user.type]]: identificacao}
    })
  }

  const setEmail = (email: string) => {
    setUser(prevState => {
      return {...prevState, email: email}
    })
  }
  
  const setCelular = (celular: string) => {
    setUser(prevState => {
      return {...prevState, phoneNumber: celular}
    })
  }
  
  const setSenha = (senha: string) => {
    setUser(prevState => {
      return {...prevState, password: senha}
    })
  }

  const setConfirmeSenha = (confirmeSenha: string) => {
    setUser(prevState => {
      return {...prevState, confirmPassword: confirmeSenha}
    })
  }


  const handleUpload = async () => {
    try {
      const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (!granted) return;

      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
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
      })
    } catch (error) {
      aviso('Error ao anexar imagem', 'danger');
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null)
  }

  const handleCreateAccount = async () => {
    const data = new FormData();
    if ((!user.name?.trim() || !user.type?.trim() || !user.email?.trim() || !user.password?.trim()
        || !user.confirmPassword.trim())
        || (user.type == UserTypes.STD ) && !(user.registration ?? '').trim()
        || (user.type == UserTypes.EMP) && !(user.siap ?? '').trim())
        {
            aviso('Preencha todos os campos com *', 'danger');
            return; 
        }
        
        if (user.password != user.confirmPassword) {
            aviso('A senha e senha de confirmação não são as mesmas!', 'warning');
            return;
        }
        
        if (user.password.length < 8){
            aviso('A senha deve ter no minimo 8 caracteres!', 'warning');
            return;
        }

        data.append('name', user.name)
        data.append('email', user.email)
        data.append('password', user.password)
        data.append('type', user.type)
        if (user.phoneNumber) {
          data.append('phoneNumber', user.phoneNumber)
        }
        if (user.type == UserTypes.EMP && user.siap) {
          data.append('siap', user.siap)
        }
        if (user.type == UserTypes.STD && user.registration) {
          data.append('registration', user.registration)
        }
        if (selectedImage) {
          data.append('file', selectedImage)
        }

        try {
            setScreenLoading(true);
            await api.post('/auth/signup', data, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            setScreenLoading(false);
            navigation.navigate('validation', {email: user.email});
            aviso("Só falta confirmar seu email!", "success");
        } catch (error: any) {
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

  return (

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled style={styles.container}
      >
        <ScrollView style={styles.scrollContainer} keyboardShouldPersistTaps={'handled'}>
          <View style={styles.content}>
            <LogoIF />

            <View style={styles.form}>
              <Text style={styles.titleForm}>Cadastro</Text>
              
              <View>
              <View style={styles.optionsImage}>
                {selectedImage ? (
                  <View style={styles.image}>
                    <TouchableOpacity onPress={handleRemoveImage} style={styles.imageTrash}>
                      <Icon name='trash-can-outline' color={'#000'} style={styles.iconTrash}/>
                    </TouchableOpacity>
                    <Image
                      source={{ uri: selectedImage.uri }}
                      style={styles.imagePreview} />
                  </View>
                ) : 
                  <TouchableOpacity onPress={handleUpload} style={styles.profileImageContainer}>
                    <Icon style={styles.profileIcon} name="account" color="#000"/>
                  </TouchableOpacity>
                }
              </View>
            </View>

              <View style={styles.formGroup}>
                <View style={styles.inputGroupAll}>
                  <InputGroup
                    label="Nome"
                    value={user.name}
                    required={true}
                    atualiza={setNome}/>
                  <SelectGroup label="Nível de Acesso" lista={[
                      { label: "Aluno", value: UserTypes.STD },
                      { label: "Servidor", value: UserTypes.EMP },
                    ]}
                    required={true}
                    atualiza={setCargo}
                  />
                  <InputGroup
                    label="Matrícula/SIAPE"
                    value={(user.type === UserTypes.EMP ? user.siap : user.registration) || ''}
                    required={true}
                    atualiza={setIdentificacao}
                    keyboardType='number-pad'
                  />
                  <InputGroup
                    label="Email"
                    value={user.email}
                    required={true}
                    atualiza={setEmail}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    multiline={true}
                    />
                  <InputGroup
                    label="Celular"
                    value={user.phoneNumber || ''}
                    atualiza={setCelular}
                    required={false}
                    keyboardType='number-pad'
                  />
                  <InputGroup
                    label="Senha"
                    value={user.password}
                    pass={true}
                    required={true}
                    atualiza={setSenha}/>
                  <InputGroup
                    label="Confirmar Senha"
                    value={user.confirmPassword}
                    pass={true}
                    required={true}
                    atualiza={setConfirmeSenha}/>
                </View>

                <View style={styles.butnGroup}>
                  <Button
                    typeButton='backButton'
                    onPress={() => navigation.navigate('Login')}
                  >
                    <Text style={styles.textBtn}>Cancelar</Text>
                  </Button>

                  <Button
                    typeButton='mainButton'
                    onPress={handleCreateAccount}
                  >
                    <Text style={styles.textBtn}>Cadastrar</Text>
                  </Button>       
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
  );
}