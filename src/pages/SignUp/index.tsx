import React, { useEffect, useState, useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import FlashMessage, { showMessage, MessageType } from 'react-native-flash-message';

import { AuthContext } from '../../context/auth';
import { InputGroup, SelectGroup} from '../../components/InputGroup';
import { ICheckRegister } from '../../base/Interfaces';
import LogoIF from '../../components/LogoIF';
import styles from './styles';

export default function SingUp() {

  const [ativa, setAtiva] = useState(true);
  const [user, setUser] = useState<ICheckRegister>({} as ICheckRegister);
  const { aviso,signUp } = useContext(AuthContext);
  const navigation = useNavigation<DrawerNavigationProp<any>>()

  const cadastrar = () => {
    if ((!user.name?.trim() || !user.type?.trim() || !user.email?.trim() || !user.password?.trim() || !user.confirmPassword.trim())
      || (user.type == 'Aluno' || user.type == 'Servidor') && !user.identification?.trim())
      {
        aviso('Preencha todos os campos com *', 'danger');
        return;
      }
    
    if (user.password != user.confirmPassword) {
      aviso('A senha e senha de confirmação não são as mesmas!', 'warning');
      return;
    }

    signUp(user);
  }

  const setNome = (nome: string) => {
    setUser(prevState => {
      return {...prevState, name: nome}
    })
  }
  
  const setCargo = (cargo: string) => {
    setUser(prevState => {
      return {...prevState, type: cargo}
    })
  }
  
  const setIdentificacao = (identificacao: string) => {
    setUser(prevState => {
      return {...prevState, identification: identificacao}
    })
  }

  const setEmail = (email: string) => {
    setUser(prevState => {
      return {...prevState, email: email}
    })
  }
  
  const setCelular = (celular: string) => {
    setUser(prevState => {
      return {...prevState, phone: celular}
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
    
  

  useEffect(() => {
    setAtiva(!(user.type === 'Externo'))
  }, [user.type])

  return (

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled style={styles.container}
      >
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.content}>
            <LogoIF />
            
            <View style={styles.form}>
              <Text style={styles.titleForm}>Cadastro</Text>
              <View style={styles.formGroup}>
                <View style={styles.inputGroupAll}>
                  <InputGroup
                    label="Nome"
                    value={user.name}
                    required={true}
                    atualiza={setNome}/>
                  <SelectGroup label="Cargo" lista={[
                      { label: "Aluno", value: "Aluno" },
                      { label: "Servidor", value: "Servidor" },
                      { label: "Externo", value: "Externo" },
                    ]}
                    required={true}
                    atualiza={setCargo}
                  />
                  <InputGroup
                    label="Matrícula/SIAPE"
                    value={user.identification || ''}
                    editavel={ativa}
                    required={true}
                    atualiza={setIdentificacao}/>
                  <InputGroup
                    label="Email"
                    value={user.email}
                    required={true}
                    atualiza={setEmail}/>
                  <InputGroup
                    label="Celular"
                    value={user.phone || ''}
                    atualiza={setCelular}
                    required={false}
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
                  <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.butnCancelar}>
                    <Text style={styles.textBtn}>Cancelar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => cadastrar()} style={styles.butnCadastrar}>
                    <Text style={styles.textBtn}>Cadastrar</Text>
                  </TouchableOpacity>       
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
  );
}