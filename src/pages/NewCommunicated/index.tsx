import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity,
  KeyboardAvoidingView,Platform, ScrollView } from 'react-native';
import { launchImageLibraryAsync, MediaTypeOptions,
  requestMediaLibraryPermissionsAsync, ImagePickerResult } from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import Menu from '../../components/Menu';
import { InputGroup, SelectGroup } from '../../components/InputGroup';
import { Item } from '../../base/Types';

export default function NewCommunicated() {

  const [comunicado, setComunicado] = useState({} as Omit<Item, "id">);
  const [link, setLink] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const setAtualizarCategoria = (categoria: string) => {
    setComunicado(prevState => {
      return {...prevState, category: categoria}
    });
  }

  const setAtualizarTitulo = (titulo: string) => {
    setComunicado(prevState => {
      return {...prevState, title: titulo}
    });
  }

  const setAtualizarConteudo = (conteudo: string) => {
    setComunicado(prevState => {
      return {...prevState, contents: conteudo}
    });
  }

  const setAdicionarLink = () => {

    if (!link.trim()) return;

    let links: string[] = [];
    if (comunicado.referenceLink?.length) {
      links.push(...comunicado.referenceLink);
      links.push(link);
    } else {
      links.push(link)
    }
    
    setComunicado(prevState => {
      return {...prevState, referenceLink: links}
    });

    setLink('')
  }

  const pickImage = async () => {
    try {
      const { granted } = await requestMediaLibraryPermissionsAsync()
      if (!granted) return
      const result: ImagePickerResult = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true,
        aspect: [4, 3],
        base64: true,
      });
      if (!result.canceled) {
        setSelectedImage(result.uri || null);
      }
    } catch (error) {
      console.log('Error picking image', error);
    }
  };

  const criar = () => {
    console.log(comunicado)
  }

  return (

    <>
      <Menu />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
      >
        <ScrollView>
          <View style={styles.container}>

            <Text style={styles.title}>Novo Comunicado</Text>

            <View style={styles.content}>

              <SelectGroup
                label='Categoria'
                lista={[
                  { label: "Aviso", value: "Aviso" },
                  { label: "Evento", value: "Evento" },
                  { label: "Noicia", value: "Noicia" },
                  { label: "Palestra", value: "Palestra" }
                ]}
                required={true}
                atualiza={setAtualizarCategoria}
              />

              <InputGroup
                label='Titulo'
                value={comunicado.title}
                required={true}
                atualiza={setAtualizarTitulo}
              />

              <View>
                <Text style={styles.clipTxt}>Anexar imagem</Text>
                <TouchableOpacity style={styles.clipBtn}>
                {selectedImage ? (
                  <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />
                ) : (
                  <Icon style={styles.clip} name="paperclip" color="#000"/>
                )}
                </TouchableOpacity>
              </View>

              <InputGroup
                label="Conteúdo"
                value={comunicado.contents}
                atualiza={setAtualizarConteudo}
                required={true}
                multiline={true}
                numberLines={5}
              />

              <View style={styles.containeLink}>
                <View style={styles.inputLink}>
                  <InputGroup
                    label='Adicionar link de referência'
                    value={link}
                    atualiza={setLink}
                    required={false}
                  />
                </View>

                <TouchableOpacity
                  style={styles.btnPlus}
                  onPress={setAdicionarLink}
                >
                  <Icon style={styles.plus} name='plus-thick' color="#fff"/>
                </TouchableOpacity>
              </View>


              <View>
                {comunicado.referenceLink?.map((l, i) => (<Text key={i}>{l}</Text>))}
              </View>
              
            </View>

          <View style={styles.butnGroup}>
            <TouchableOpacity onPress={() => console.log('Voltar')} style={styles.butnCancelar}>
              <Text style={styles.textBtn}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => criar()} style={styles.butnCriar}>
              <Text style={styles.textBtn}>Criar</Text>
            </TouchableOpacity>
          </View>

          </View>

        </ScrollView>
        
      </KeyboardAvoidingView>
    </>

  );
}