import React, { useEffect, useState, useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Menu from '../../components/Menu';
import { Button as ButtonComponent } from '../../components/Button';
import styles from './styles';
import FormModel from '../../components/FormModel';
import Tooltip from '../../components/Tooltip';
import { RFValue } from 'react-native-responsive-fontsize';
import { IRefectory } from '../../base/Interfaces';
import { api } from '../../config';
import { AuthContext } from '../../context/auth';

function ListRefectoryForms() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [formularies, setFormularies ] = useState<IRefectory[]>([])

    const { aviso } = useContext(AuthContext)

    useEffect(() => {
        const loadFormularies = async () => {
            try {
                const response = await api.get(`refectory/?resPerPage=${10}&page=${1}`)
                if (response.data) setFormularies(response.data.list)
            } catch (error) {
                aviso('Falha ao carregar lista de formulários', 'warning')
            }
        }

        loadFormularies()
    }, [])

    return (
        <View style={styles.container}>
            <Menu />

            <View style={styles.titlePageContainer}>
                <Text style={styles.titlePage}>
                    Lista de formulários
                </Text>
                <Tooltip tooltipText='Apenas os formulários agendados poderão ser excluídos.'>
                    <Icon size={20} name="information-outline"/>
                </Tooltip>
            </View>

            <View style={{ height: '60%', width: '100%' }}>
                <ScrollView >
                    { formularies.map((item, key) => (
                        <FormModel key={key} status={item.status} vigencyDate={item.vigencyDate}/>
                    ) ) }
                    
                </ScrollView>
            </View>

            <View >
                <ButtonComponent
                customStyle={{ marginVertical: RFValue(20) }}
                typeButton='extraButton'
                onPress={() => navigation.navigate('CreateForm')}
                >
                    <Text style={styles.buttonTitle} >Novo Formulário</Text>
                    <Icon color={'white'} style={{ fontSize: 16, marginHorizontal: 5}} name='file-image-plus-outline'/>
                </ButtonComponent>

                <ButtonComponent typeButton='backButton' onPress={() => navigation.goBack()} >
                    <Text style={styles.buttonTitle} >Voltar</Text>
                </ButtonComponent>
            </View>
        </View>
    );
}

export default ListRefectoryForms;