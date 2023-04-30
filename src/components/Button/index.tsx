import React from 'react';
import { TouchableOpacityProps, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps extends TouchableOpacityProps{
    typeButton: 'mainButton' |'backButton' | 'extraButton';
    style?: StyleProp<ViewStyle>;
}

const stylesButtons = {
    mainColor: '#379936',
    backColor: '#696969',
    extraColor: '#275D8E',
}
export const Button = (props: ButtonProps) => (
    <TouchableOpacity {...props} style={[
        props.style,
        {
            padding: RFValue(10),
            borderRadius: RFValue(8),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: (
                props.typeButton == 'mainButton' ? stylesButtons.mainColor :
                (
                    props.typeButton == 'backButton' ? stylesButtons.backColor :
                    stylesButtons.extraColor
                )
            )
        }
    ]}/>
);
