import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./styles";

interface ILinkList {
    link: string;
    removeLink: Function;
    indexLink: number;
}

function LinkList({ link, removeLink, indexLink }: ILinkList){

    return(
        <View style={styles.linkView}>
            <Text style={styles.linkText}>{link}</Text>
            <TouchableOpacity style={styles.removeLink} onPress={() => removeLink(indexLink)}>
                <Icon name="trash-can-outline" style={styles.iconTrash} />
            </TouchableOpacity>
        </View>
    )
}

export default LinkList;