import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Menu from '../../components/Menu';
import { Button } from '../../components/Button';
import styles from './styles';

interface TableData {
    date: string;
    status: string;
};

//Dados para teste abaixo:
const data: TableData[] = [
    { date: '2023-02-15', status: 'Aberto' },
    { date: '2023-02-16', status: 'Agendado' },
    { date: '2023-02-17', status: 'Agendado' },
    { date: '2023-02-18', status: 'Agendado' },
    { date: '2023-02-19', status: 'Agendado' },
    { date: '2023-02-20', status: 'Agendado' },
    { date: '2023-02-21', status: 'Agendado' },
];

function ListRefectoryForms() {
    const navigation = useNavigation<StackNavigationProp<any>>();

    return (
        <View style={styles.container}>
            <Menu />

            <ScrollView>
                <Text style={styles.titlePage}>Formulários do Refeitório</Text>

                <Button
                    title="Filtro"
                    onPress={() => { }}
                    iconName={<Icon name="filter-menu-outline" size={25} color="white" />}
                    iconPosition="left"
                />


                <View style={styles.tableContainer}>
                    <View style={styles.tableHeader}>
                        <Text style={[styles.tableHeaderText, { borderRightWidth: 1 }]}>Data</Text>
                        <Text style={styles.tableHeaderText}>Status</Text>
                    </View>
                    <ScrollView>
                        {data.map((rowData, index) => (
                            <View style={[styles.tableRow, { backgroundColor: index % 2 === 0 ? 'white' : '#F0F0F0' }]} key={index}>
                                <Text style={styles.tableRowText}>{rowData.date}</Text>
                                <View style={[styles.tableRowText, { flexDirection: 'row', alignItems: 'center' }]}>
                                    <Text style={{ color: rowData.status === 'Aberto' ? '#379936' : 'black' }}>{rowData.status}</Text>
                                    {rowData.status === 'Agendado' && (
                                        <TouchableOpacity
                                            style={styles.tableRowButton}
                                            onPress={() => { }}
                                        >
                                            <Icon name="clipboard-edit-outline" size={25} color="#696969" />
                                        </TouchableOpacity>

                                    )}
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <Text >
                    Os formulários só poderão ser modificados quando o status estiver no modo agendado, quando esses tiverem em
                    aberto não será possível modificá-los
                </Text>

                <Button title="Novo Forms" onPress={() => navigation.navigate('Dados do Formulário')} />

                <Button title="Voltar" onPress={() => { }} isBackButton />
            </ScrollView>
        </View>
    );
}

export default ListRefectoryForms;