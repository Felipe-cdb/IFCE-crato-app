import React, { useContext, useState } from 'react';
import { View, Text, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useFocusEffect } from '@react-navigation/native';

import Menu from "../../components/Menu";
import styles from "./styles";
import { Button as ButtonComponent } from '../../components/Button';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RFValue } from 'react-native-responsive-fontsize';
import { defaultStyleProperties } from '../../base/styles';
import Tooltip from '../../components/Tooltip';
import { addDays, subDays } from 'date-fns';
import { AuthContext } from '../../context/auth';
import MenuFormUrlModal from '../../components/MenuFormUrlModal'
import { api } from '../../config';
import { RefectoryContext } from '../../context/refectory.context';
import { formatDate } from '../../helpers';

type Form = {
    vigencyDate: string
}

function CreateForms() {
    const [formsToCreate, setFormsToCreate] = useState<Form[]>([{
        vigencyDate: addDays(new Date(), 1).toISOString()
    }]);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [menuUrl, setMenuUrl] = React.useState<string>('')
    const [modalIsVisible, setModalIsVisible] = React.useState<boolean>(false)

    const { aviso, setScreenLoading } = useContext(AuthContext)
    const { refectory } = useContext(RefectoryContext)

    const navigation = useNavigation<DrawerNavigationProp<any>>();

    const handleNewFormDates = () => {
        setFormsToCreate([...formsToCreate, {
            vigencyDate: addDays(new Date(formsToCreate[formsToCreate.length - 1].vigencyDate), 1).toISOString(),
        }])
    }

    const handleSave = async () => {
        if (!refectory?.menuUrl && !menuUrl) {
            setModalIsVisible(true)
            return
        }

        setScreenLoading(true);
        try {
            await api.post('refectory/create', { vigencyDates: formsToCreate, menuUrl: refectory?.menuUrl || menuUrl })
            aviso('Formulários adicionados com sucesso', 'success', RFValue(64))
            navigation.goBack()
        } catch (error: any) {
            if (error.response) {
                if (error.response.data.message == "Some provided vigency date already exists") {
                    aviso('Data de vigência fornecida já existe', 'danger', RFValue(64));
                } else {
                    aviso('Falha ao criar formulários', 'danger', RFValue(64))
                }
            } else {
                aviso('Falha ao criar formulários', 'danger', RFValue(64))
            }
        }
        setScreenLoading(false);
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
            vigencyDate: date.toISOString(),
        }])
        hideDatePicker();
    };

    useFocusEffect(
        React.useCallback(() => {
            setFormsToCreate([{
                vigencyDate: addDays((new Date()), 1).toISOString(),
            }]);
        }, [])
    )

    return (
        <View style={styles.container}>
            <Menu />
            <MenuFormUrlModal
                isVisible={modalIsVisible}
                action='create'
                setVisible={() => setModalIsVisible(!modalIsVisible)}
                description='Precisamos de um link para o cardápio antes de continuar'
                setPropMenuUrl={setMenuUrl}
            />
            <View style={styles.titlePageContainer} >
                <Text style={styles.titlePage}>Novo Formulário</Text>
                <Tooltip tooltipText='O período de abertura e encerramento para respostas do formulário é atribuída automaticamente a depender da data de referência informada.'>
                    <Icon style={styles.iconInformation} name="information-outline" />
                </Tooltip>
            </View>

            <View style={styles.container}>
                <ScrollView style={styles.inputContainer}>
                    {formsToCreate.map((item, index) => (
                        <View key={index} style={styles.dateContainer}>
                            <View>
                                <View style={styles.HeadContainier}>
                                    <Text style={styles.subtitle} >Data de referência </Text>
                                    {formsToCreate.length > 1 && formsToCreate.length - 1 === index ? <Icon onPress={handleRemoveForm} style={styles.iconClosed} name='close' /> : ''}
                                </View>
                                <ButtonComponent
                                    typeButton='extraButton'
                                    onPress={showDatePicker}
                                    disabled={index > 0}
                                    customStyle={{
                                        opacity: index > 0 ? 0.7 : 1
                                    }}
                                >
                                    <Text style={styles.dateInput}>
                                        {formatDate(new Date(item.vigencyDate))}
                                    </Text>
                                </ButtonComponent>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    locale='pt_BR'
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                            </View>

                            <View style={styles.dateIntervalContainer}>
                                <Text style={styles.dateIntervalText}>
                                    Intervalo para respostas
                                </Text>
                                <Text style={styles.dateIntervalText}>
                                    <Text style={styles.boldText}>
                                        {formatDate(subDays(new Date(item.vigencyDate), 1))}
                                    </Text> entre 00:00 e 19:00 Horas
                                </Text>
                            </View>
                        </View>
                    ))}

                    <View style={styles.iconContainer}>
                        <Icon onPress={handleNewFormDates} style={styles.iconAddDate} name='plus-box-multiple-outline' />
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