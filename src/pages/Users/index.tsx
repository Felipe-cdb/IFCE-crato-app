import React from "react";
import { View } from "react-native";
import Menu from "../../components/Menu";
import SearchBar from "../../components/SearchBar";
import UserInfos from "../../components/UserInfos";
import { FlatList } from "react-native-gesture-handler";
import { IUser } from "../../base/Interfaces";
import { api } from "../../config";
import { AuthContext } from "../../context/auth";
import styles from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import UserPermissionsModal from "../../components/UserPermissionsModal";
import { constantUserType } from "../../base/constants";

const Users = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [clicked, setClicked] = React.useState<boolean>(false);
  const [searchPhrase, setSearchPhrase] = React.useState<string>("");
  const [useSelected, setUserSelected] = React.useState<IUser | null>(null);
  const [isModal, setIsModal] = React.useState<boolean>(false);

  const { aviso } = React.useContext(AuthContext);

  const loadUsers = async (searchPhrase: string) => {
    try {
      const response = await api.get(
        `users/?resPerPage=${10}&page=${1}&keyword=${searchPhrase}`
      );
      if (response.data) setUsers(response.data.list);
    } catch (error) {
      aviso("Falha ao carregar lista de Usuários", "warning", RFValue(64));
    }
  };

  const handleChageModal = (user: IUser) => {
    setUserSelected(user);
    setIsModal(!isModal);
  };

  React.useEffect(() => {
    setTimeout(() => {
      loadUsers(searchPhrase);
    }, 500);
  }, [searchPhrase]);

  return (
    <View style={styles.container}>
      <Menu />
      <SearchBar
        clicked={clicked}
        setClicked={setClicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      <FlatList
        style={styles.flatStyle}
        contentContainerStyle={styles.flatStyle}
        showsVerticalScrollIndicator={false}
        data={users}
        renderItem={({ item }) => (
          <UserInfos selectUser={handleChageModal} user={item} />
        )}
        keyExtractor={(item) => item.email}
      />

      {useSelected && (
        <UserPermissionsModal
          id={useSelected.id}
          name={useSelected.name}
          email={useSelected.email}
          identification={useSelected.siape ?? useSelected.registration ?? ""}
          isVisible={isModal}
          setVisible={() => {
            if(isModal) setUserSelected(null)
            setIsModal(!isModal);
          }}
          type={constantUserType[useSelected.type]}
          roles={useSelected.roles}
        />
      )}
    </View>
  );
};

export default Users;
