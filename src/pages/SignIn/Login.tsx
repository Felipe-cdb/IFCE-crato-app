import React, { useContext, useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Platform, ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/MaterialIcons';

import { AuthContext } from '../../context/auth';
import LogoIF from '../../components/LogoIF';
import styles from './styles'
import ScreenLoad from '../../components/ScreenLoad';
import { Button } from '../../components/Button';
import { EmailRegex } from '../../base/Regexs';
import { api } from '../../config';

export default function Login() {

  const { signIn, aviso } = useContext(AuthContext);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState<boolean>(false);


  const handleResetSenha = async () => {
    if (!EmailRegex.test(email)) {
      aviso('Insira um email válido', 'warning');
      return;
    }

    try {
      await api.post('/auth/forgot-password', { email });
      navigation.navigate('resetPass', { email });
      aviso("Email de recuperação de senha enviado com sucesso", 'success');
      return;
    } catch (error: any) {
      if (error.response.data.message == 'User not found.') {
        aviso("Usuário não encontrado!", 'danger');
        return;
      }
      if (error.response.data.message == 'Pleace enter a correct email.') {
        aviso("Email inserido inválido!", 'danger');
        return;
      }
      aviso("Ocorreu um erro inesperado, tente mais tarde!", 'danger');
    }
  }

  const entrar = async () => {
    setLoading(true)
    await signIn({ email: email.toLowerCase(), password: senha });
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
        <ScreenLoad visivel={loading} />
        <LogoIF />

        <Text style={styles.titleForm}>IFCE Crato Aluno</Text>

        <View style={styles.contenteForm}>
          <View style={styles.contntInpuPass}>
            <TextInput
              style={styles.inputLog}
              value={email}
              placeholderTextColor='gray'
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
              placeholderTextColor='gray'
              value={senha}
              secureTextEntry={visible}
              textContentType='password'
              autoCapitalize='none'
              onChangeText={setSenha}
              placeholder='Senha'
            />
            <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.viewPass}>
              {
                visible ? <Icon name="visibility" style={styles.iconEye} />
                  : <Icon name="visibility-off" style={styles.iconEye} />
              }
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => handleResetSenha()}>
            <Text style={styles.textLink}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnGroup}>
          <Button
            typeButton='mainButton'
            onPress={() => entrar()}
          >
            <Text style={styles.textBtn}>Entrar</Text>
          </Button>

          <TouchableOpacity style={styles.sigUpBtn} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.textLink}>Ainda não é Cadastrado?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}