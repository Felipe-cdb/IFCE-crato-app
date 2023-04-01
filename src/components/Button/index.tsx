import React from 'react';
import { TouchableOpacity, Text, ViewStyle, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

interface ButtonProps {
    title?: string;
    onPress: () => void;
    isBackButton?: boolean;
    iconName?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    buttonStyle?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
    title = '',
    onPress,
    isBackButton = false,
    iconName = null,
    iconPosition = 'right',
    buttonStyle = {},
}) => {
    const navigation = useNavigation();
    const buttonStyles = isBackButton
        ? styles.backButton
        : iconName
            ? styles.extraButton
            : styles.mainButton;

    const handlePress = isBackButton ? navigation.goBack : onPress;

    const iconMarginStyles = iconPosition === 'right'
        ? { marginLeft: 15, marginRight: 2 }
        : { marginLeft: 2, marginRight: 15 };

    return (
        <TouchableOpacity
            style={[
                buttonStyles,
                buttonStyle,
                { flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row' },
            ]}
            onPress={handlePress}>
            {iconName ? <View style={[styles.iconStyles, iconMarginStyles]}>{iconName}</View> : null}
            {title ? <Text style={styles.buttonText}>{title.toUpperCase()}</Text> : null}
        </TouchableOpacity>
    );
};
