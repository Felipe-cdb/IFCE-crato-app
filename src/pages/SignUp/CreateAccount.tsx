import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text
} from "react-native";

import styles from "./styles";
import LogoIF from "../../components/LogoIF";
import ImageInput, { ISelectedImage } from "../../components/ImageInput";
import { InputGroup } from "../../components/InputGroup";
import { Button } from "../../components/Button";
import VALIDATION from "./Validations";
import { CourseType, UserTypes } from "../../base/Enums";
import { SelectGroup } from "../../components/SelectGroup";
import { courseConstants } from "ifce-crato-app/src/base/constants";

export default function CreateAccount() {

  const [selectedImage, setSelectedImage] = useState<ISelectedImage | null>(null);
  const [imageUri, setImageUri] = useState<string>();

  const [allFieldsAreValid, setAllFieldsAreValid] = useState(true);
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<UserTypes>(UserTypes.STUDENT);
  const [registration, setRegistration] = useState<string>("");
  const [course, setCourse] = useState<CourseType|null>(null);

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
              imageUri={imageUri}
              setImageUri={setImageUri}
              setSelectedImage={setSelectedImage}
              size={96}
            />

            <View style={styles.formGroup}>
              <View style={styles.inputGroupAll}>
                <InputGroup
                  label="Nome"
                  value={name}
                  required={true}
                  atualiza={setName}
                  errorMessage={{
                    valueIsValid: VALIDATION.NAME,
                    messageErro: "Nome inválido!",
                    setIsValid: setAllFieldsAreValid
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
                  atualiza={setRegistration}
                  keyboardType="numeric"
                  errorMessage={{
                    valueIsValid: type === UserTypes.STUDENT ? VALIDATION.MATRICULA : VALIDATION.SIAP,
                    messageErro: type === UserTypes.STUDENT ? "Matrícula inválida!" : "SIAP inválido!",
                    setIsValid: setAllFieldsAreValid
                  }}
                />

                <SelectGroup
                  label="Cursos"
                  value={course}
                  lista={
                    [{ label: "NENHUM", value: null },
                    ...Object.keys(CourseType).map((key) => {
                      return { label: courseConstants[key], value: key }
                    })]
                  }
                  enable={type === UserTypes.STUDENT}
                  atualiza={setType}
                  valid={!!course}
                  messageErro="Selecione um curso"
                />


              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  </>)
}