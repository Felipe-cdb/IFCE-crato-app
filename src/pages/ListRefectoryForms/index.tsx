import React, { useEffect, useState, useContext, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RefreshControl } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';

import Menu from '../../components/Menu';
import { Button as ButtonComponent } from '../../components/Button';
import styles from './styles';
import FormModel from '../../components/FormModel';
import Tooltip from '../../components/Tooltip';
import { IRefectory } from '../../base/Interfaces';
import { api } from '../../config';
import { AuthContext } from '../../context/auth';
import { defaultStyleProperties } from '../../base/styles';
import { RFValue } from 'react-native-responsive-fontsize';

function ListRefectoryForms() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [formularies, setFormularies] = useState<IRefectory[]>([])
    const [refreshing, setRefreshing] = useState<boolean>(true)

    const { aviso } = useContext(AuthContext)

    const loadFormularies = async () => {
        try {
            const response = await api.get(`refectory/?resPerPage=${10}&page=${1}`)
            if (response.data) setFormularies(response.data.list.sort((a: IRefectory, b: IRefectory) => a.vigencyDate > b.vigencyDate ? 1 : -1))
        } catch (error) {
            aviso('Falha ao carregar lista de formulários', 'warning', RFValue(64))
        }
        setRefreshing(false);
    }

    useFocusEffect(
        React.useCallback(() => {
            setRefreshing(true);

            return (
                onRefresh()
            )
        }, [])
    )

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
                    <Icon size={20} name="information-outline" />
                </Tooltip>
            </View>

            <View style={styles.listStyle}>
                <FlatList
                    style={{ width: '100%' }}
                    showsVerticalScrollIndicator={false}
                    data={formularies}
                    renderItem={({ item }) => (<FormModel
                        status={item.status}
                        vigencyDate={item.vigencyDate}
                        id={item.id}
                        onRefresh={onRefresh}
                    />)}
                    keyExtractor={(item: IRefectory) => item.id}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            colors={[defaultStyleProperties.greenColor]}
                            tintColor={defaultStyleProperties.greenColor}
                        />}
                />
            </View>

            <View style={styles.buttonContainer}>
                <ButtonComponent
                    typeButton='extraButton'
                    onPress={() => navigation.navigate('CreateForm')}
                >
                    <Text style={styles.buttonTitle}>Novo Formulário</Text>
                    <Icon style={styles.buttonStyle} name='file-move-outline' />
                </ButtonComponent>
            </View>

        </View>
    );
}

export default ListRefectoryForms;