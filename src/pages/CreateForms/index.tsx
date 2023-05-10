import React, { useContext, useState } from 'react';
import { View, Text, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal  from 'react-native-modal-datetime-picker';

import Menu from "../../components/Menu";

import styles from "./styles";
import { Button, Button as ButtonComponent } from '../../components/Button';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RFValue } from 'react-native-responsive-fontsize';
import { defaultStyleProperties } from '../../base/styles';
import Tooltip from '../../components/Tooltip';
import { addDays, addHours, format, subDays } from 'date-fns';
import { getFormatedDate } from '../../helpers'
import { AuthContext } from '../../context/auth';
import { api } from '../../config';
import { RefectoryContext } from '../../context/refectory.context';

type Form = {
    vigencyDate: string,
    startAnswerDate: string,
    keyName: string,
}

function CreateForms() {
    const [formsToCreate, setFormsToCreate] = useState<Form[]>([{
        vigencyDate: addDays(getFormatedDate(new Date()), 1).valueOf().toString(),
        startAnswerDate: getFormatedDate(new Date()).toString(),
        keyName: 'key-0'
    }]);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    
    const { aviso } = useContext(AuthContext)
    const { refectory } = useContext(RefectoryContext)

    const navigation = useNavigation<DrawerNavigationProp<any>>();

    const handleNewFormDates = () => {
        setFormsToCreate([...formsToCreate, {
            keyName: `key-${formsToCreate.length}`,
            vigencyDate: addDays(Number(formsToCreate[formsToCreate.length - 1]?.vigencyDate), 1).valueOf().toString(),
            startAnswerDate: addDays(Number(formsToCreate[formsToCreate.length - 1]?.startAnswerDate), 1).valueOf().toString(),
        }])
    }

    const handleSave = async () => {
        const serializedForms = formsToCreate.map((item) => (
            {
                vigencyDate: parseInt(item.vigencyDate)
            }
        ))
        try {
            await api.post('refectory/create', { vigencyDates: serializedForms, menuUrl: refectory?.menuUrl || "" })
            aviso('Formulários adicionados com sucesso', 'success')
            navigation.goBack()
        } catch (error) {
            aviso('Falha ao criar formulários', 'danger')
        }
    }

    const handleRemoveForm = () => {
        setFormsToCreate(formsToCreate.slice(0, -1))
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        setFormsToCreate([{
            keyName: `key-${formsToCreate.length}`,
            vigencyDate: date.valueOf().toString(),
            startAnswerDate: subDays(date, 1).valueOf().toString(),
        }])
        hideDatePicker();
    };

    return (
        <View style={styles.container}>
            <Menu />
            <View style={styles.titlePageContainer} >
                <Text style={styles.titlePage}>Novo Formulário</Text>
                <Tooltip tooltipText='O período de abertura e encerramento para respostas do formulário é atribuída automaticamente a depender da data de referência durante criação.'>
                    <Icon size={20} name="information-outline" />
                </Tooltip>
            </View>

            <View style={{
                flex: 1,
            }}>
                <ScrollView style={styles.inputContainer}>
                    {formsToCreate.map((item, index) => (
                        <View key={index} style={styles.dateContainer}>
                            <View>
                                <View style={{
                                    alignItems: 'center', justifyContent: 'space-between',
                                    flexDirection: 'row', marginVertical: 8 }}>
                                    <Text style={styles.subtitle} >Data de referência </Text>
                                    {formsToCreate.length > 1 && formsToCreate.length - 1 === index ? <Icon onPress={handleRemoveForm} size={RFValue(20)} name='close' /> : ''}
                                </View>
                                <Button
                                    typeButton='extraButton'
                                    onPress={showDatePicker}
                                    disabled={index>0}
                                    customStyle={{
                                        opacity: index>0 ? 0.7 : 1
                                    }}
                                >
                                    <Text style={{
                                        color: '#FFF',
                                        fontSize: 18,
                                        fontWeight: 'bold'
                                    }}>{format(Number(item.vigencyDate), 'dd/MM/yyyy')}</Text>
                                </Button>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                            </View>

                            <View style={styles.dateIntervalContainer}>
                                <Text style={styles.dateIntervalText}>
                                    Período
                                </Text>
                                <Text style={{ fontSize: 16 }} > <Text style={{ fontWeight: 'bold' }}>De</Text> {format(Number(item.startAnswerDate), 'dd/MM/yyyy')} às 00:00 </Text>
                                <Text style={{ fontSize: 16 }} > <Text style={{ fontWeight: 'bold' }}>Até</Text> {format(Number(item.startAnswerDate), 'dd/MM/yyyy')} às 19:00 </Text>

                            </View>
                        </View>

                    ))}

                    <View style={styles.iconContainer}>
                        <Icon onPress={handleNewFormDates} color={defaultStyleProperties.greenColor} size={30} name='plus-box-multiple-outline' />
                    </View>
                </ScrollView>

                <View style={styles.actionButtonContainer}>
                    <ButtonComponent typeButton='backButton' onPress={() => navigation.navigate('Formulários do Refeitório')} >
                        <Text style={styles.btnText}>Voltar</Text>
                    </ButtonComponent>

                    <ButtonComponent onPress={handleSave} typeButton='mainButton'>
                        <Text style={styles.btnText}>
                            Salvar
                        </Text>
                    </ButtonComponent>

                </View>
            </View>
        </View>
    )
}

export default CreateForms;