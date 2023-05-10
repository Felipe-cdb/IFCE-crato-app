import React, { useEffect, useState, useContext, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RefreshControl } from 'react-native-gesture-handler';

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
    const [refreshing, setRefreshing] = useState<boolean>(true)

    const { aviso } = useContext(AuthContext)

    const loadFormularies = async () => {
        try {
            const response = await api.get(`refectory/?resPerPage=${10}&page=${1}`)
            if (response.data) setFormularies(response.data.list.sort((a: IRefectory, b: IRefectory) => a.vigencyDate > b.vigencyDate ? 1 : -1 ))
        } catch (error) {
            aviso('Falha ao carregar lista de formulários', 'warning')
        }
        setRefreshing(false);
    }

    useEffect(() => {
        loadFormularies()
    }, []);

    const onRefresh = useCallback(() => {
		setRefreshing(true);
		loadFormularies();
  	}, [refreshing]);

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

            <View style={{
                width: '100%',
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={formularies}
                    renderItem={({item}) => (<FormModel
                        status={item.status}
                        vigencyDate={item.vigencyDate}
                    />)}
                    keyExtractor={(item: IRefectory) => item.id}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            colors={['#19882C']}
                            tintColor={'#19882C'}
                        />}
                />

                <View style={{
                    width: '90%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: RFValue(20)
                    
                }}>
                    <ButtonComponent typeButton='backButton' onPress={() => navigation.goBack()} >
                        <Text style={styles.buttonTitle} >Voltar</Text>
                    </ButtonComponent>
                    
                    <ButtonComponent
                        typeButton='extraButton'
                        onPress={() => navigation.navigate('CreateForm')}
                    >
                        <Text style={styles.buttonTitle} >Novo Formulário</Text>
                        <Icon color={'white'} style={{
                            fontSize: 16,
                            marginHorizontal: 5
                        }} name='file-image-plus-outline'/>
                    </ButtonComponent>
                </View>
            </View>
            
        </View>
    );
}

export default ListRefectoryForms;