import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView,
  Platform, ScrollView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import Menu from '../../components/Menu';
import { InputGroup, SelectGroup } from '../../components/InputGroup';
import LinkList from '../../components/LinkList';
import { Item } from '../../base/Types';

export default function NewCommunicated() {

  const [comunicado, setComunicado] = useState({} as Omit<Item, "id">);
  const [link, setLink] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  
  useFocusEffect(
    React.useCallback(() => {
      setComunicado({} as Omit<Item, "id">);
      setLink('');
      setSelectedImage(null);
      // return () => {};
    }, [])
  );

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
      links.push(link.replace(/\s/g, ""));
    } else {
      links.push(link.replace(/\s/g, ""))
    }
    
    setComunicado(prevState => {
      return {...prevState, referenceLink: links}
    });
    
    setLink('');
  }

  const setRemoverLink = (indexRemover: number) => {
    if (!comunicado.referenceLink?.length) return;
  
    if (indexRemover === -1) return;
  
    const newLinks = [...comunicado.referenceLink];
    newLinks.splice(indexRemover, 1);
  
    setComunicado({ ...comunicado, referenceLink: newLinks });
  }

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });
      if (!result.canceled && result.assets.length > 0) {
        setSelectedImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log('Error picking image', error);
    }
  };

  const setRemoveImage = () => {
    setSelectedImage(null)
  }

  const criar = () => {
    console.log(comunicado)
  }

  return (

    <View style={styles.container}>
      <Menu />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled style={{flex: 1}}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps={'handled'}
        >
            <Text style={styles.title}>Novo Comunicado</Text>

            <View style={styles.form}>
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
                <View style={styles.optionsImage}>
                  {selectedImage ? (
                    <View style={styles.image}>
                      <TouchableOpacity onPress={setRemoveImage} style={styles.imageTrash}>
                        <Icon name='trash-can-outline' color={'#000'} style={styles.iconTrash}/>
                      </TouchableOpacity>
                      <Image
                        source={{ uri: selectedImage }}
                        style={styles.imagePreview} />
                    </View>
                  ) : 
                    <TouchableOpacity onPress={pickImage} style={styles.clipContainer}>
                      <Icon style={styles.clipIcon} name="paperclip" color="#000"/>
                    </TouchableOpacity>
                  }
                </View>
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
                {comunicado.referenceLink?.map((l, i) => (
                  <LinkList link={l} indexLink={i} key={i} removeLink={setRemoverLink}/>
                ))}
              </View>
              
            </View>
        </ScrollView>
        <View style={styles.butnGroup}>
          <TouchableOpacity onPress={() => console.log('Voltar')} style={styles.butnCancelar}>
            <Text style={styles.textBtn}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => criar()} style={styles.butnCriar}>
            <Text style={styles.textBtn}>Criar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

        
    </View>

  );
}