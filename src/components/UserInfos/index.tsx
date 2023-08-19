import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { constantUserType } from "../../base/constants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./styles";
import { IUser } from "../../base/Interfaces";

interface UserInfosProps{
  user: IUser;
  selectUser(user: IUser): void;
}

const UserInfos = ({ user, selectUser }: UserInfosProps) => {
  const {email, siape, registration, name, type} = user;
  const [identification] = React.useState(siape ?? registration ?? "");

  return (
    <TouchableOpacity onPress={() => selectUser(user)} style={styles.container}>
      <View style={styles.nameContainer}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.nameText}>
          {" "}
          {name}{" "}
        </Text>
        <Text style={styles.typeText}> {constantUserType[type]} </Text>
      </View>

      <View style={styles.identificationContainerStyle}>
        <View style={styles.identificationStyle}>
          <Icon
            name="badge-account-horizontal-outline"
            style={styles.iconStyle}
          />
          <Text style={styles.identificationTextStyle}>{identification}</Text>
        </View>
        <View style={styles.emailStyle}>
          <Icon name="email" style={styles.iconStyle} />
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={styles.emailTextStyle}
          >
            {email}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserInfos;
