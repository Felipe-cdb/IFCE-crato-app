import React from "react";
import {
    View, Image, TouchableOpacity,
    StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { defaultStyleProperties } from "../../base/styles";
import ModalImagePicker from "../ModalImagePicker";

export interface ISelectedImage {
    uri: string,
    name?: string,
    type: string,
}

interface IImageProps {
    setSelectedImage: React.Dispatch<React.SetStateAction<ISelectedImage | null>>;
    size?: number;
    imageUri: string|undefined;
    setImageUri:  React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function ({
    setSelectedImage,
    size = 104,
    imageUri,
    setImageUri
}: IImageProps) {

    const [toAlterImage, setToAlterImage] = React.useState(false);

    const styles = StyleSheet.create({
        containerImageProfile: {
            width: RFValue(size),
            height: RFValue(size),
            borderRadius: RFPercentage(50),
            position: 'relative',
            alignItems: 'center',
            alignSelf: "center",
            justifyContent: 'center',
            backgroundColor: '#D9D9D9',
            borderWidth: 2,
            borderColor: '#D9D9D9'
        },

        contenteImageProfile: {
            borderRadius: RFPercentage(50),
            backgroundColor: '#D9D9D9',
        },

        imageProfile: {
            width: RFValue(size),
            height: RFValue(size),
            borderRadius: RFPercentage(50)
        },

        iconProfile: {
            fontSize: RFValue(size-8),
            color: defaultStyleProperties.blackColor
        },

        editButton: {
            position: 'absolute',
            bottom: RFValue(-8),
            right: RFValue(-4),
            width: RFValue(size-56),
            height: RFValue(size-56),
            borderRadius: RFPercentage(50),
            backgroundColor: defaultStyleProperties.blueColor,
            alignItems: 'center',
            justifyContent: 'center',
        },

        pencilEdit: {
            fontSize: RFValue(16),
            color: defaultStyleProperties.whiteColor
        },
    });

    return (<>
        <ModalImagePicker
            visible={toAlterImage}
            close={() => setToAlterImage(!toAlterImage)}
            setImageUri={setImageUri}
            setSelectedImage={setSelectedImage}
        />

        <View style={styles.containerImageProfile}>
            <View style={styles.contenteImageProfile} >
                {
                    imageUri ?
                        <Image source={{ uri: imageUri }} style={styles.imageProfile} /> :
                        <Icon name="account" style={styles.iconProfile} />
                }
            </View>
            <TouchableOpacity style={styles.editButton} onPress={() => setToAlterImage(!toAlterImage)}>
                <Icon name="camera" style={styles.pencilEdit} />
            </TouchableOpacity>
        </View>
    </>)
};