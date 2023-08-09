import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';
import Menu from "../../components/Menu";
import EmptyRefectory from './EmptyRefectory';
import { Button as ButtonComponent } from '../../components/Button';
import { RefectoryChoices } from '../../components/RefectoryChoices';
import { OpenURLButton } from '../../components/OpenUrlButton';
import MenuFormUrlModal from '../../components/MenuFormUrlModal';
import styles from './styles';
import { refectoryStatusConstants } from '../../base/constants';
import { RefreshControl } from 'react-native-gesture-handler'

import { RefectoryContext } from '../../context/refectory.context'
import { AuthContext } from '../../context/auth'
import { RefectoryStatusEnum, UserPermitions } from '../../base/Enums';
import ButtonLoading from '../../components/ButtonLoading';
import { defaultStyleProperties } from '../../base/styles';
import { api } from '../../config';
import RefectoryAlreadyAnswered from './RefectoryAlreadyAnswered';
import { formatDate } from '../../helpers';

const Refectory = () => {
    const [isVisible, setVisible] = React.useState<boolean>(false)
    const [loading, setLoading] = React.useState<boolean>(false)
    const [refreshing, setRefreshing] = React.useState(false);

    const { user, aviso } = useContext(AuthContext)
    const { refectory, checkboxAnswerFields, setCheckboxAnswerFields, setRefectoryStoraged, loadCurrentRefectory } = useContext(RefectoryContext)

    const navigation = useNavigation<DrawerNavigationProp<any>>();

    const handleSubmit = async () => {
        const filter = Object.values(checkboxAnswerFields).filter(val => val !== 0)
        if (!filter.length) return aviso('Nenhuma opção selecionada', 'warning')
        setLoading(true)

        try {
            await api.post(`/refectory/create/answer/${refectory?.id}`, checkboxAnswerFields)
            setCheckboxAnswerFields({ afternoonSnack: 0, breakfast: 0, dinner: 0, lunch: 0, nightSnack: 0 })

            if (refectory) {
                await setRefectoryStoraged({ ...refectory, hasAnswered: true })
            }
            aviso('Registramos a sua resposta, obrigado!', 'success')
            setLoading(false)
            navigation.navigate('Mural')
        } catch (error: any) {
            console.log(error.response)
            aviso('Falha ao submeter formulário.', 'danger')
            setLoading(false)

        }
    }

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await loadCurrentRefectory()
        setRefreshing(false)
    }, []);

    return (
        <>
            <Menu />
            {!refectory
                ?
                (
                    <ScrollView
                        contentContainerStyle={styles.scrollViewContainer}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}
                        />}
                    >
                        <EmptyRefectory />
                    </ScrollView>
                )
                :
                (
                    <>
                        <MenuFormUrlModal isVisible={isVisible} setVisible={() => setVisible(!isVisible)} action='update' />
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                        >
                            <View style={styles.container}>
                                <Text style={styles.titlePage}>Refeitório</Text>

                                <View style={styles.dateForms}>
                                    <Text style={styles.dateFormsFont}>
                                        Formulário referente a {formatDate(new Date(refectory.vigencyDate))}
                                    </Text>

                                    <Text style={styles.dateFormsFont}>
                                        Respostas aceitas até {formatDate(new Date(refectory.startAnswersDate))} às 19h
                                    </Text>
                                </View>

                                <View style={styles.refectoryChoices}>
                                    {refectory.hasAnswered || refectory.status === RefectoryStatusEnum.open ? <RefectoryAlreadyAnswered /> : <RefectoryChoices />}
                                </View>

                                <View style={styles.menuContainer}>
                                    <OpenURLButton
                                        url={refectory.menuUrl}
                                        textColor='white'
                                        icon={<Icon style={styles.iconMenu} name='microsoft-excel' />}
                                    >
                                        Cardápio
                                    </OpenURLButton>

                                    {!user.roles.includes(UserPermitions.RM) ? '' : (
                                        <ButtonComponent
                                            typeButton='extraButton'
                                            onPress={() => setVisible(true)}
                                        >
                                            <Icon style={styles.editMenuIcon} name='pencil-outline' />
                                        </ButtonComponent>
                                    )}
                                </View>

                                <ButtonComponent disabled={refectory.hasAnswered || refectory.status === RefectoryStatusEnum.open} typeButton='mainButton' onPress={handleSubmit}>
                                    <Text style={{ ...styles.actionButtomTitle, opacity: refectory.hasAnswered || refectory.status === RefectoryStatusEnum.open ? 0.2 : 1 }}>
                                        {loading ?
                                            <ButtonLoading size={'small'} color={defaultStyleProperties.blueColor} />
                                            :
                                            'Enviar'
                                        }
                                    </Text>
                                </ButtonComponent>
                            </View>
                        </ScrollView>
                    </>
                )}
        </>
    )
}

export default Refectory;