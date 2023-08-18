import React, { useContext, useState, useCallback } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text
} from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import FormData from 'form-data';

import styles from "./styles";
import LogoIF from "../../components/LogoIF";
import ImageInput, { ISelectedImage } from "../../components/ImageInput";
import { InputGroup } from "../../components/InputGroup";
import { Button } from "../../components/Button";
import VALIDATION from "./Validations";
import { CourseType, UserTypes } from "../../base/Enums";
import { SelectGroup } from "../../components/SelectGroup";
import { courseConstants } from "../../base/constants";
import { capitalizeAfterSpace, formatPhoneNumber } from "../../helpers";
import { AuthContext } from "../../context/auth";
import { api } from "../../config";

export default function CreateAccount() {

  const { aviso, setScreenLoading } = useContext(AuthContext);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [formHasBeenSent, setFormHasBeenSent] = useState(false);
  const [courseIsValid, setCourseIsValid] = useState(true);
  
  const [imageUri, setImageUri] = React.useState<string>();
  const [selectedImage, setSelectedImage] = useState<ISelectedImage | null>(null);
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<UserTypes>(UserTypes.STUDENT);
  const [registration, setRegistration] = useState<string>("");
  const [course, setCourse] = useState<CourseType | null>();
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  useFocusEffect(
    useCallback(() => {
      setFormHasBeenSent(false);
      setCourseIsValid(true);
      setSelectedImage(null);
      setImageUri(undefined);
      setName('');
      setEmail('');
      setType(UserTypes.STUDENT);
      setRegistration('');
      setCourse(null);
      setPhoneNumber('');
      setPassword('');
      setConfirmPassword('');
    }, [])
  )

  const setCourseValue = (value: CourseType | null) => {
    setCourse(value);
    if (!value) {
      setCourseIsValid(false);
    } else {
      setCourseIsValid(true);
    }
  }

  const verifyErrors = (): string[] => {
    const errors = [];

    if (!VALIDATION.NAME(name)) errors.push("Nome Completo");

    if (
      (type === UserTypes.STUDENT && !VALIDATION.MATRICULA(registration)) ||
      (type !== UserTypes.STUDENT && !VALIDATION.SIAP(registration))
    ) errors.push("MAtrícula/SIAP");

    if (type === UserTypes.STUDENT && !course) {
      setCourseIsValid(false);
      errors.push("Curso")
    };

    if (!VALIDATION.EMAIL(email)) errors.push("Email");

    if (!VALIDATION.PHONE(phoneNumber)) errors.push("Celular");

    if (!VALIDATION.PASSWORD(password)) errors.push("Senha");

    if (confirmPassword !== password && !!confirmPassword.length) errors.push("Confirmação de Senha");

    return errors;
  }

  const submitForm = () => {
    setFormHasBeenSent(true);
    setTimeout(() => {
      setFormHasBeenSent(false);
    }, 1000);
  };

  const handleCreateAccount = async () => {
    
    /**
     * Atualizar o estado do formulário para enviado
     * e verificar todos os campos 
     */
    submitForm();
    const errors = verifyErrors();
    if(errors.length){
      return aviso(`Verifique os seguintes campos:\n${errors.join('\n')}`, 'danger');;
    }

    /**
     * Criar FormData para cadastrar usuario
     */
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('password', password);
    data.append('type', type);

    if(type===UserTypes.STUDENT) data.append('registration', registration);
    else data.append('siap', registration);

    if (phoneNumber.length) data.append('phoneNumber', phoneNumber);

    if (course) data.append('course', course);

    if (selectedImage) data.append('file', selectedImage);

    /**
     * Solicitar criação de usuário
     */
    try {
      setScreenLoading(true);
      await api.post('auth/signup', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setScreenLoading(false);
      navigation.navigate('validation', { email: email });
      aviso("Só falta confirmar seu email!", "success");
    } catch (error: any) {
      setScreenLoading(false);
      console.log(error.response)
      if (error.response) {
        if (error.response.data.message === "Duplicate Email entered") {
          aviso("Usuário já cadastrado", "warning");
        } else if (error.response.data.message === "phoneNumber must be a valid phone number") {
          aviso("Número de telefone inválido", "warning");
        } else {
          console.log(error.response)
          aviso("Ocorreu um erro inesperado!", "warning");
        }

      } else {
        aviso("Ocorreu um erro inesperado!", "warning");
      }
    }
  }

  return (<>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled style={styles.container}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
        keyboardShouldPersistTaps={'handled'}
      >
        <View style={styles.content}>
          <LogoIF />

          <View style={styles.form}>
            <Text style={styles.titleForm}>Cadastro</Text>

            <ImageInput
              setSelectedImage={setSelectedImage}
              size={96} imageUri={imageUri}
              setImageUri={setImageUri}
            />

            <View style={styles.formGroup}>
              <View style={styles.inputGroupAll}>
                <InputGroup
                  label="Nome Completo"
                  value={name}
                  required={true}
                  atualiza={(value) => setName(capitalizeAfterSpace(value))}
                  submit={formHasBeenSent}
                  errorMessage={{
                    valueIsValid: VALIDATION.NAME,
                    messageErro: "Nome inválido!",
                  }}
                />

                <SelectGroup
                  label="Nível de Acesso"
                  value={type}
                  lista={[
                    { label: "Aluno", value: UserTypes.STUDENT },
                    { label: "Servidor TAE", value: UserTypes.EMPLOYEETAE },
                    { label: "Servidor DOCENTE", value: UserTypes.EMPLOYEETEACHER },
                  ]}
                  atualiza={setType}
                />

                <InputGroup
                  label="Matrícula/SIAP"
                  value={registration}
                  required={true}
                  submit={formHasBeenSent}
                  atualiza={setRegistration}
                  keyboardType="numeric"
                  errorMessage={{
                    valueIsValid: type === UserTypes.STUDENT ? VALIDATION.MATRICULA : VALIDATION.SIAP,
                    messageErro: type === UserTypes.STUDENT ? "Matrícula inválida!" : "SIAP inválido!",
                    dependencies: [type]
                  }}
                />

                <SelectGroup
                  label="Curso"
                  value={course || null}
                  lista={
                    [{ label: "SELECIONAR CURSO", value: null },
                    ...Object.keys(CourseType).map((key) => {
                      return { label: courseConstants[key], value: key }
                    })]
                  }
                  enable={type === UserTypes.STUDENT}
                  atualiza={setCourseValue}
                  valid={type === UserTypes.STUDENT && courseIsValid}
                  messageErro="Selecione um curso!"
                />

                <InputGroup
                  label="Email"
                  value={email}
                  required={true}
                  submit={formHasBeenSent}
                  atualiza={(email) => setEmail(email.toLocaleLowerCase())}
                  autoCapitalize='none'
                  autoCorrect={false}
                  keyboardType='email-address'
                  type="email"
                  errorMessage={{
                    valueIsValid: VALIDATION.EMAIL,
                    messageErro: "Insira um email intitucional válido!"
                  }}
                />

                <InputGroup
                  label="Celular"
                  maxLength={15}
                  value={phoneNumber}
                  submit={formHasBeenSent}
                  atualiza={(v) => setPhoneNumber(formatPhoneNumber(v))}
                  required={false}
                  keyboardType='number-pad'
                  errorMessage={{
                    valueIsValid: VALIDATION.PHONE,
                    messageErro: "Formato inválido!"
                  }}
                />

                <InputGroup
                  label="Senha"
                  value={password}
                  type="pass"
                  required={true}
                  submit={formHasBeenSent}
                  atualiza={setPassword}
                  errorMessage={{
                    valueIsValid: VALIDATION.PASSWORD,
                    messageErro: "Senha deve ter no minimo 8 caracteres!"
                  }}
                />

                <InputGroup
                  label="Confirmar Senha"
                  value={confirmPassword}
                  type="pass"
                  required={true}
                  submit={formHasBeenSent}
                  atualiza={setConfirmPassword}
                  errorMessage={{
                    valueIsValid: (cp: string) => (cp === password && !!cp.length),
                    messageErro: (
                      confirmPassword.length ?
                        "As senhas não são iguais!" :
                        "Confirmar senha!"
                    )
                  }}
                />

              </View>

              <View style={styles.butnGroup}>
                <Button
                  typeButton='backButton'
                  onPress={() => navigation.goBack()}
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
  </>)
}