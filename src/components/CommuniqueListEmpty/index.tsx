import React from "react";
import { View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { defaultStyleProperties } from "../../base/styles";

const CommuniqueListEmpty = () => (
    <View style={{
        height: '100%',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: '50%'
    }}>
        <Icon name="message-text-clock-outline" style={{
            fontSize: RFValue(80),
            color: defaultStyleProperties.greenColor,
            opacity: 0.6,
        }} />

        <Text style={{
            fontSize: RFValue(16),
            fontWeight: '700',
            color: defaultStyleProperties.greenColor,
            opacity: 0.6,
        }}>
            Não há comunicados no momento!
        </Text>
    </View>
);

export default CommuniqueListEmpty;