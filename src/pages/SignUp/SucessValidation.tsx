import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import LogoIF from '../../components/LogoIF';

const SucessValidation = () => {

    return(
        <ImageBackground
            source={require('../../assets/images/SucessoIMG.png')}
            resizeMode="cover"
            style={styles.containerSucess}
        >
            <LogoIF />

            <View style={styles.contetSucess}>
                <Text style={styles.titleSucess}>Seu Cadastro foi realizado Com sucesso</Text>

                <Text style={styles.textSucess}>
                    Sua conta foi ativada, agora você poderá acessar todos os recursos que a plataforma tem a oferecer.
                </Text>

                <TouchableOpacity style={styles.btnContinue}>
                    <Text style={styles.textContinue}>Continuar</Text>
                </TouchableOpacity>

            </View>
            
        </ImageBackground>
    )
}

export default SucessValidation;