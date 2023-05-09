import React from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { defaultStyleProperties } from '../../base/styles';

interface ButtonProps extends TouchableOpacityProps {
    typeButton: 'mainButton' | 'backButton' | 'redButton' | 'extraButton';
    customStyle?: object
}

const stylesButtons = {
    mainColor: defaultStyleProperties.greenColor,
    backColor: defaultStyleProperties.grayColor,
    redColor: defaultStyleProperties.redColor,
    extraColor: defaultStyleProperties.blueColor,
}
export const Button = (props: ButtonProps) => (
    <TouchableOpacity {...props} style={{
        padding: RFValue(10),
        borderRadius: RFValue(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: (
            props.typeButton == 'mainButton' ? stylesButtons.mainColor :
                (
                    props.typeButton == 'backButton' ? stylesButtons.backColor :
                        (
                            props.typeButton == 'redButton' ? stylesButtons.redColor :
                                stylesButtons.extraColor
                        )
                )
        ),
        ...props.customStyle,
    }} />
);
