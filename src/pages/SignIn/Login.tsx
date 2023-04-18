import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,
    KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/MaterialIcons';

import { AuthContext } from '../../context/auth';
import LogoIF from '../../components/LogoIF';
import styles from './styles'
import ScreenLoad from '../../components/ScreenLoad';
import { Button } from '../../components/Button';

export default function Login() {

  const { signIn, aviso } = useContext(AuthContext);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [visible, setVisible] = useState(true);
  // const [resetEmail, setResetEmail] = useState(false);   
  const [loading, setLoading] = useState<boolean>(false);


  // const handleResetSenha = () => {
  //   if (!email.trim()) {
  //     aviso("Insira um email válido", 'warning')
  //     return;
  //   }

  //   try {
  //     setResetEmail(true);
  //     aviso("Email de recuperação de senha enviado com sucesso", 'success');
  //     return;

  //   } catch (error) {
  //     aviso("Ocorreu um erro inesperado, tente mais tarde!", 'success');
  //   }
  // }

  const entrar = async () => {
    setLoading(true)
    await signIn({email, password: senha});
    setLoading(false)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled style={styles.container}
    >

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
      >
        <ScreenLoad visivel={loading}/>
        <LogoIF/>
        
        <Text style={styles.titleForm}>IFCE Crato Aluno</Text>
          
        <View style={styles.contenteForm}>
          <View style={styles.contntInpuPass}>
            <TextInput
              style={styles.inputLog}
              value={email}
              onChangeText={setEmail}
              keyboardType='email-address'
              textContentType='emailAddress'
              autoCapitalize='none'
              autoComplete='email'
              placeholder='Email'
            />
          </View>
        <View style={styles.contntInpuPass}>
            <TextInput
              style={styles.inputLog}
              value={senha}
              secureTextEntry={visible}
              textContentType='password'
              autoCapitalize='none'
              onChangeText={setSenha}
              placeholder='Senha'
            />
            <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.viewPass}>
              {
                visible ? <Icon name="visibility" style={styles.iconEye} color="#000" />
                : <Icon name="visibility-off" style={styles.iconEye} color="#000" />
              }
            </TouchableOpacity>
        </View>

        {/* <TouchableOpacity onPress={() => handleResetSenha()}>
            <Text style={styles.textLink}>Esqueceu a senha?</Text>
        </TouchableOpacity> */}
        </View>

        <View style={styles.btnGroup}>
          <Button
            typeButton='mainButton'
            onPress={() => entrar()}
          >
            <Text style={[styles.textBtn, {color: '#fff'}]}>Entrar</Text>
          </Button>

          <TouchableOpacity style={{marginTop: 16}} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={[styles.textLink, styles.textBtn]}>Ainda não é Cadastrado?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}