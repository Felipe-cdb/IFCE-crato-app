import React, { useEffect, useState, useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity,
  KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { AuthContext } from '../../context/auth';
import { InputGroup, SelectGroup} from '../../components/InputGroup';
import { ICheckRegister } from '../../base/Interfaces';
import LogoIF from '../../components/LogoIF';
import styles from './styles';
import { UserTypes } from '../../base/Enums';
import ScreenLoad from '../../components/ScreenLoad';

export default function SingUp() {

  const [ativa, setAtiva] = useState(true);
  const [user, setUser] = useState<ICheckRegister>({type: UserTypes.STD} as ICheckRegister);
  const [load, setLoad] = useState<boolean>(false);

  const { signUp } = useContext(AuthContext);
  const navigation = useNavigation<DrawerNavigationProp<any>>()

  const cadastrar = () => {
    setLoad(true);
    signUp(user, setLoad);
  }

  const setNome = (nome: string) => {
    setUser(prevState => {
      return {...prevState, name: nome}
    })
  }
  
  const setCargo = (cargo: UserTypes) => {
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
    
  useEffect(() => {
    setAtiva(!(user.type === UserTypes.EXT))
  }, [user.type]);

  return (

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled style={styles.container}
      >
        <ScrollView style={styles.scrollContainer} keyboardShouldPersistTaps={'handled'}>
          <View style={styles.content}>
            <LogoIF />

            <ScreenLoad visivel={load}/>
            <View style={styles.form}>
              <Text style={styles.titleForm}>Cadastro</Text>
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
                      { label: "Externo", value: UserTypes.EXT },
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
                    value={user.phoneNumber}
                    atualiza={setCelular}
                    required={true}
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