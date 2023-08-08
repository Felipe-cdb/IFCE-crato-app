import React, { useState, useContext } from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { manipulateAsync } from 'expo-image-manipulator'
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./styles";
import { AuthContext } from '../../context/auth';

interface IImagePickerProps {
    visible: boolean;
    close: () => any;
    setSelectedImage: React.Dispatch<React.SetStateAction<ISelectedImage | null>>;
    setImageUri: React.Dispatch<React.SetStateAction<string | undefined>>;
}

interface ISelectedImage {
    uri: string,
    name?: string,
    type: string,
}

export default function ModalImagePicker({
    visible,
    close,
    setSelectedImage,
    setImageUri
}: IImagePickerProps) {

    const { aviso } = useContext(AuthContext);

    const openGalery = async () => {
        try {
            const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
            if (!granted) return;

            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [3, 4],
                quality: 1,
            });

            if (result.canceled) {
                return;
            }

            const manipulatedImage = await manipulateAsync(
                result.assets[0].uri,
                [{ resize: { width: 800 } }],
                { compress: 0.5 }
            );

            const localUri = manipulatedImage.uri;
            const filename = localUri.split('/').pop();
            const match = /\.(\w+)$/.exec(filename as string);
            const type = match ? `image/${match[1]}` : `image`;
            setSelectedImage({
                uri: Platform.OS === 'ios' ? localUri.replace('file://', '') : localUri,
                name: filename,
                type
            });
            setImageUri(localUri);
        } catch (error) {
            aviso('Error ao anexar imagem', 'danger');
            console.log(error)
        }

        close();
    };
    
    const openCamera = async () => {
        try {
            const { granted } = await ImagePicker.requestCameraPermissionsAsync()
            if (!granted) return;

            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [3, 4],
                quality: 1,
            });

            if (result.canceled) {
                return;
            }

            const manipulatedImage = await manipulateAsync(
                result.assets[0].uri,
                [{ resize: { width: 800 } }],
                { compress: 0.5 }
            );

            const localUri = manipulatedImage.uri;
            const filename = localUri.split('/').pop();
            const match = /\.(\w+)$/.exec(filename as string);
            const type = match ? `image/${match[1]}` : `image`;
            setSelectedImage({
                uri: Platform.OS === 'ios' ? localUri.replace('file://', '') : localUri,
                name: filename,
                type
            });
            setImageUri(localUri);
        } catch (error) {
            aviso('Error ao anexar imagem', 'danger');
            console.log(error)
        }

        close();
    };

    return (
        <Modal
            testID={'modal'}
            isVisible={visible}
            onSwipeComplete={close}
            swipeDirection={['up', 'left', 'right', 'down']}
            onBackdropPress={close}
            onBackButtonPress={close}
            backdropOpacity={0.2}
            style={styles.modal}
        >
            <View style={styles.view}>
                <View style={styles.closeFlash} />
                <View style={styles.btnGroupModal}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={openCamera}
                    >
                        <View style={styles.circleIcon}>
                            <Icon name='camera' style={styles.iconBtn} />
                        </View>
                        <Text style={styles.txtBtn}>Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={openGalery}
                    >
                        <View style={styles.circleIcon}>
                            <Icon name='image' style={styles.iconBtn} />
                        </View>
                        <Text style={styles.txtBtn}>Galeria</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}