import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import Menu from "../../components/Menu";

import styles from "./styles";
import { Button as ButtonComponent } from '../../components/Button';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RFValue } from 'react-native-responsive-fontsize';
import { defaultStyleProperties } from '../../base/styles';
import Tooltip from '../../components/Tooltip';
import { addDays, addHours, format } from 'date-fns';

type Form = {
    vigencyDate: number
    startAnswerDate: number
}

function CreateForms() {
    const [text, onChangeText] = React.useState('');
    const [ formsToCreate, setFormsToCreate ] = React.useState<Form[]>([{
        vigencyDate: addDays(new Date().valueOf(), 1).valueOf(),
        startAnswerDate: new Date().valueOf()
    }]);
  
    const navigation = useNavigation<DrawerNavigationProp<any>>();

    return (
        <View style={styles.container}>
            <Menu />
            <View style={styles.titlePageContainer} >
                <Text style={styles.titlePage}>Dados do Formulário</Text>
                <Tooltip tooltipText='O período de abertura e encerramento para respostas do formulário é atribuída automaticamente a depender da data de referência durante criação.'>
                    <Icon size={20} name="information-outline"/>
                </Tooltip>
            </View>

            <ScrollView style={styles.inputContainer}>
                <View style={styles.dateContainer}>
                    <View>
                        <Text style={styles.subtitle} >Data de referência </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Selecione a data'
                            onChangeText={onChangeText}
                            value={text}
                        />
                    </View>

                    <View style={styles.dateIntervalContainer}>
                        <Text style={styles.dateIntervalText}>
                            Período
                        </Text>
                        <Text style={{fontSize: 16}} > <Text style={{fontWeight: 'bold'}}>De</Text> 27/11/2023 às 00:00 </Text>
                        <Text style={{fontSize: 16}} > <Text style={{fontWeight: 'bold'}}>Até</Text> 27/11/2023 às 19:00</Text>

                    </View>
                </View>

                <View style={styles.iconContainer}>
                    <Icon color={defaultStyleProperties.greenColor} size={30} name='plus-box-multiple-outline'/>
                </View>
            </ScrollView>
            
            <View style={styles.actionButtonContainer}>
                <ButtonComponent typeButton='backButton' onPress={() => navigation.navigate('Mural')} >
                <Text >Voltar</Text>
                </ButtonComponent>

                <ButtonComponent typeButton='mainButton'>
                    <Text>
                        Salvar
                    </Text>
                </ButtonComponent>

            </View>
        </View>
    )
}

export default CreateForms;