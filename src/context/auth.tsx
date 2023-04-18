import React, { createContext, ReactNode, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MessageType, showMessage } from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from "react-native";

import { api } from "../config";
import { IUser, IUserLog, ICheckRegister } from '../base/Interfaces'
import { EmailRegex, PasswordRegex } from "../base/Regexs";
import { UserTypes } from "../base/Enums";

interface AuthContextDataProps {
    user: IUser;
    loading: boolean;
    isUserLoaded: boolean;
    screenLoading: boolean;
    signOut: () => any;
    signIn: (user: IUserLog) => void;
    signUp: (user: ICheckRegister) => void;
    aviso: (m: string, t: MessageType) => void;
    setLoggedUser: () => any;
    confirmCode: (email: string, code: string, errorInCode: () => void) => any;
    resendCode: (email: string, message: string) => any;
}

interface AuthProviderProps {
    children: ReactNode;
}

const userVoid: IUser = {
    name: '',
    email: '',
    roles: [],
    type: ''
}

export const AuthContext = createContext({} as AuthContextDataProps);

function AuthProvider({ children }: AuthProviderProps) {

    const navigation = useNavigation<any>();
    const [user, setUser] = useState({} as IUser);
    const [loading, setLoading] = useState<boolean>(true);
    const [isUserLoaded, setIsUserLoaded] = useState<boolean>(false);
    const [screenLoading, setScreenLoading] = useState<boolean>(false);

    useEffect(() => {
        async function userInCache() {
            const userId = await AsyncStorage.getItem('userId');
            const tokenLocal = await AsyncStorage.getItem('token');
            
            if(!userId || !tokenLocal){
                setLoading(false);
                return ;
            }

            api.defaults.headers.common['Authorization'] = `Bearer ${tokenLocal}`;
            try {
                const res = await api.get(`/users/${userId}`);
                if (res) {
                    const userResponse = res.data;
                    setUser({
                        name: userResponse.name,
                        email: userResponse.email,
                        roles: userResponse.roles,
                        type: userResponse.type,
                        phoneNumber: userResponse.phoneNumber || undefined
                    });
                    setIsUserLoaded(true);
                };
                setLoading(false);

                return;
            } catch (error: any) {
                setLoading(false);
            }
        }

        userInCache();
        setScreenLoading(false);
    }, []);

    const aviso = (mensagem: string, tipo: MessageType) => {
        showMessage({
            message: mensagem,
            type: tipo,
            duration: 3000,
            statusBarHeight: StatusBar.currentHeight,
            hideOnPress: true,
            autoHide: true,
            floating: true,
            style: {
                width: '90%',
                marginVertical: '5%',
                borderRadius: 8,
                alignSelf: "center"
            }
        });
    }

    async function setLoggedUser() {
        setIsUserLoaded(true);
    }

    async function signUp(userRegister: ICheckRegister) {
        if ((!userRegister.name?.trim() || !userRegister.type?.trim() || !userRegister.email?.trim() || !userRegister.password?.trim()
        || !userRegister.confirmPassword.trim())
        || (userRegister.type == UserTypes.STD || userRegister.type == UserTypes.EMP) && !userRegister.identification.trim())
        {
            aviso('Preencha todos os campos com *', 'danger');
            return; 
        }
        
        if (userRegister.password != userRegister.confirmPassword) {
            aviso('A senha e senha de confirmação não são as mesmas!', 'warning');
            return;
        }

        const userCreate = {
            name: userRegister.name,
            email: userRegister.email,
            password: userRegister.password,
            phoneNumber: userRegister.phoneNumber || undefined,
            siap: userRegister.type == UserTypes.EMP ? userRegister.identification : undefined,
            registration: userRegister.type == UserTypes.STD ? userRegister.identification : undefined,
            type: userRegister.type,
        }
        try {
            setScreenLoading(true);
            await api.post('/auth/signup', JSON.stringify(userCreate));
            setScreenLoading(false);
            navigation.navigate('validation', {email: userRegister.email});
            aviso("Só falta confirmar seu email!", "success");
        } catch (error: any) {
            setScreenLoading(false);
            if (error.response){
                if (error.response.data.message === "Duplicate Email entered") {
                    aviso("Usuário já cadastrado", "warning");
                } else if (error.response.data.message === "phoneNumber must be a valid phone number") {
                    aviso("Número de telefone inválido", "warning");
                }
            }else {
                aviso("Ocorre um erro inesperado!", "warning");
            }
        }
    }

    async function signIn(userLog: IUserLog) {
        if (!EmailRegex.test(userLog.email)) {
            aviso('E-mail invalido', 'warning');
            return;
        }
    
        if (!PasswordRegex.test(userLog.password)) {
            aviso('Senha invalida', 'warning');
            return;
        }
        await logar(userLog);
    }

    async function logar(userLog: IUserLog) {
        setScreenLoading(true);
        try {
            const response = await api.post("/auth/login", JSON.stringify(userLog));

            const userResponse = response.data.user;
            setUser({
                name: userResponse.name,
                email: userResponse.email,
                roles: userResponse.roles,
                type: userResponse.type,
                phoneNumber: userResponse.phoneNumber || undefined
            });
            AsyncStorage.setItem('token', response.data.token);
            AsyncStorage.setItem('userId', userResponse.id);
            api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            setIsUserLoaded(true);
            setScreenLoading(false);
        } catch (error: any) {
            if (error.response){
                if (error.response.data.message === "Pending email confirmation") {
                    try {
                        resendCode(userLog.email, 'Confirme seu email para continuar.')
                        navigation.navigate('validation', {email: error.response.data.user.email});
                    } catch (error) {
                        
                    }
                    setScreenLoading(false);
                    aviso("Confirme seu email para continuar", "warning");
                }
            }else {
                aviso("Falha no login", "warning");
            }
        }
    }

    function signOut(){
        setIsUserLoaded(false);
        setLoading(false);
        setUser(userVoid);
        AsyncStorage.clear();
    }
    
    async function confirmCode(email: string, code: string, errorInCode: () => void){
        try {
            setScreenLoading(true);
            const response = await api.post('/auth/confirm/email-code', JSON.stringify({
                email: email, code: code
            }));

            const userResponse = response.data.user;
            setUser({
                name: userResponse.name,
                email: userResponse.email,
                roles: userResponse.roles,
                type: userResponse.type,
                phoneNumber: userResponse.phoneNumber || undefined
            });
            AsyncStorage.setItem('token', response.data.token);
            AsyncStorage.setItem('userId', userResponse.id);
            api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

            setScreenLoading(false);
            navigation.navigate('sucess');
            
        } catch (error: any) {
            setScreenLoading(false);
            errorInCode();
            if (error.response){
                if (error.response.data.message === "User not found or already is active") {
                    aviso("Usuário não encontrado", "warning");
                } else if (error.response.data.message === "Invalid code") {
                    aviso("O código de verificação inserido é inválido. Por favor, verifique o código enviado para o seu e-mail e tente novamente.", "warning");
                } else if (error.response.data.message === "Expired code") {
                    aviso("Código expirado. Por favor, solicite um novo código.", "warning");
                }
            }else {
                aviso("Ocorre um erro inesperado!", "warning");
            }
        }
    }

    async function resendCode(email: string, message: string) {
        try {
            const response = await api.post('/auth/resend/email-code', JSON.stringify({email}))
            aviso(message, 'success');
            console.log(response.data)
        } catch (error: any) {
            if (error.response && error.response.data.message === "User not found or already is active"){
                aviso("Usuário não encontrado", "warning");
            }else {
                aviso("Ocorre um erro inesperado!", "warning");
            }
        }
    }

    return(
        <AuthContext.Provider value={{
            signIn, aviso, signUp, signOut, setLoggedUser,
            confirmCode, resendCode,
            loading, user, isUserLoaded, screenLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;