import React, { createContext, ReactNode, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MessageType, showMessage } from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from "react-native";

import { api } from "../config";
import { IUser, IUserLog } from '../base/Interfaces'
import { EmailRegex, PasswordRegex } from "../base/Regexs";

interface AuthContextDataProps {
    user: IUser;
    loading: boolean;
    isUserLoaded: boolean;
    screenLoading: boolean;
    changeUserValues: (userResponse: any) => any;
    signOut: () => any;
    signIn: (user: IUserLog) => void;
    aviso: (m: string, t: MessageType) => void;
    setLoggedUser: () => any;
    confirmCode: (email: string, code: string, errorInCode: () => void) => any;
    resendCode: (email: string, message: string) => any;
    setScreenLoading: React.Dispatch<React.SetStateAction<boolean>>;
    userReload: () => any;
}

interface AuthProviderProps {
    children: ReactNode;
}

const userVoid: IUser | any= {
    name: '',
    email: '',
    roles: [],
    type: '',
    isActive: true,
    createdAt: ''
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
                    changeUserValues(userResponse);
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

    const changeUserValues = (userResponse: any) => {
        setUser({
            id: userResponse.id,
            name: userResponse.name,
            email: userResponse.email,
            roles: userResponse.roles,
            type: userResponse.type,
            siape: userResponse.siape || undefined,
            course: userResponse.course || undefined,
            avatarUrl: userResponse.avatarUrl || undefined,
            registration: userResponse.registration || undefined,
            phoneNumber: userResponse.phoneNumber || undefined,
            isActive: userResponse.isActive || false,
            createdAt: userResponse.createdAt,
        });
    }

    const userReload = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId');
            const res = await api.get(`/users/${userId}`);
            if (res) {
                const userResponse = res.data;
                changeUserValues(userResponse);
                setIsUserLoaded(true);
            };
            setLoading(false);

            return;
        } catch (error: any) {
            setLoading(false);
        }
    }

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
            changeUserValues(userResponse);
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
                    aviso("Confirme seu email para continuar", "warning");
                } else if(error.response.data.message === 'User not found'){
                    aviso("Usuário não encontrado", "danger");
                } else if(error.response.data.message === 'Invalid password'){
                    aviso("Senha incorreta", "danger");
                }else {
                    aviso("Falha no login", "danger");
                }
            }else {
                aviso("Falha no login", "danger");
            }
            setScreenLoading(false);
        }
    }

    async function signOut(){
        setIsUserLoaded(false);
        setLoading(false);
        setUser(userVoid);
        await AsyncStorage.clear();
    }
    
    async function confirmCode(email: string, code: string, errorInCode: () => void){
        try {
            setScreenLoading(true);
            const response = await api.post('/auth/confirm/email-code', JSON.stringify({
                email: email, code: code
            }));

            const userResponse = response.data.user;
            changeUserValues(userResponse);
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
            signIn, aviso, signOut, setLoggedUser, changeUserValues,
            confirmCode, resendCode, setScreenLoading,userReload,
            loading, user, isUserLoaded, screenLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;