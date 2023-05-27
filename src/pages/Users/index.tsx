import React from "react";
import { Text, View } from 'react-native'
import Menu from "../../components/Menu"
import SearchBar from "../../components/SearchBar";
import UserInfos from "../../components/UserInfos";
import { FlatList } from "react-native-gesture-handler";
import { IUser } from "../../base/Interfaces";
import { api } from "../../config";
import { AuthContext } from "../../context/auth";
import { Button as ButtonComponent } from '../../components/Button'
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RFValue } from "react-native-responsive-fontsize";

const Users = () => {
    const [users, setUsers] = React.useState<IUser[]>([])
    const [clicked, setClicked] = React.useState<boolean>(false)
    const [searchPhrase, setSearchPhrase] = React.useState<string>('')

    const { aviso } = React.useContext(AuthContext)

    const navigation = useNavigation<DrawerNavigationProp<any>>();

    const loadUsers = async (searchPhrase: string) => {
        try {
            const response = await api.get(`users/?resPerPage=${10}&page=${1}&keyword=${searchPhrase}`)
            if (response.data) setUsers(response.data.list)
        } catch (error) {
            aviso('Falha ao carregar lista de Usuários', 'warning')
        }
    }

    React.useEffect(() => {
        setTimeout(() => {
            loadUsers(searchPhrase)
        }, 500)
    }, [searchPhrase])


    return (
        <View style={{flex: 1,
            flexDirection: "column",
            alignItems: "center"}}>
        <Menu />
        <SearchBar 
            clicked={clicked}
            setClicked={setClicked}
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            />
        <FlatList
                    style={{width: '100%'}}
                    showsVerticalScrollIndicator={false}
                    data={users}
                    renderItem={({item}) => (<UserInfos
                        id={item.id}
                        name={item.name}
                        email={item.email}
                        identification={item.siape ?? item.registration ?? ''}
                        type={item.type}
                        roles={item.roles}
                    />)}
                    keyExtractor={(item) => item.email}
                />

        <ButtonComponent customStyle={{ marginBottom: RFValue(40), marginTop: RFValue(20) }} typeButton='backButton' onPress={() => navigation.navigate('Formulários do Refeitório')} >
            <Text style={{ color: 'white' }}>Voltar</Text>
        </ButtonComponent>
        </View>
    )
}

export default Users

