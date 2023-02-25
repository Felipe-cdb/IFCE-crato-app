import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

interface ButtonProps {
    title: string;
    onPress: () => void;
    isBackButton?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress, isBackButton }) => {
    const navigation = useNavigation();
    const buttonStyles = isBackButton ? styles.backButton : styles.mainButton;

    const handlePress = isBackButton ? navigation.goBack : onPress;

    return (
        <TouchableOpacity style={buttonStyles} onPress={handlePress}>
            <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    );
};
