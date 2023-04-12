import React, { createContext, ReactNode, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MessageType, showMessage } from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from "../config";
import { IUser, IUserLog, ICheckRegister } from '../base/Interfaces'
import { EmailRegex, PasswordRegex } from "../base/Regexs";
import { UserTypes } from "../base/Enums";

interface AuthContextDataProps {
    user: IUser;
    isUserLoaded: boolean;
    loading: boolean;
    aviso: (m: string, t: MessageType) => void;
    signIn: (user: IUserLog) => void;
    signUp: (user: ICheckRegister, finish: Function) => void;
    signOut: () => void;
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

    const [user, setUser] = useState({} as IUser);
    const [isUserLoaded, setIsUserLoaded] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const navigation = useNavigation<any>();

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
    }, []);

    const aviso = (mensagem: string, tipo: MessageType) => {
        showMessage({
            message: mensagem,
            type: tipo,
            duration: 2000,
            statusBarHeight: 30,
            hideOnPress: true,
            autoHide: true,
        });
    }

    async function signUp(userRegister: ICheckRegister, finish: Function) {
        if ((!userRegister.name?.trim() || !userRegister.type?.trim() || !userRegister.email?.trim() || !userRegister.password?.trim()
        || !userRegister.confirmPassword.trim() || !userRegister.phoneNumber.trim())
        || (userRegister.type == UserTypes.STD || userRegister.type == UserTypes.EMP) && !userRegister.identification?.trim())
        {
            aviso('Preencha todos os campos com *', 'danger');
            finish(false);
            return; 
        }
        
        if (userRegister.password != userRegister.confirmPassword) {
            aviso('A senha e senha de confirmação não são as mesmas!', 'warning');
            finish(false);
            return;
        }

        const userCreate = {
            name: userRegister.name,
            email: userRegister.email,
            password: userRegister.password,
            phoneNumber: userRegister.phoneNumber,
            siap: userRegister.identification || undefined,
            roles: [],
            type: userRegister.type,
        }
        console.log('api')
        api.post('/auth/signup', JSON.stringify(userCreate)).then((resp: any) => {
            aviso("Usuário cadastrado com sucesso!", "success");
            navigation.navigate('Login');
        }).catch((error: any) => {
            if (error.response){
                if (error.response.data.message === "Duplicate Email entered") {
                    aviso("Usuário já cadastrado", "warning");
                } else if (error.response.data.message === "phoneNumber must be a valid phone number") {
                    aviso("Número de telefone inválido", "warning");
                }
            }else {
                aviso("Ocorre um erro inesperado!", "warning");
            }
        });
        finish(false);
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
        try {
            const response = await api.post("auth/login", userLog);
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
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            if (error.response){
                if (error.response.data.message === "User not found") {
                    aviso("Usuário não encontrado", "warning");
                }
                if (error.response.data.message === "Invalid password") {
                    aviso("Senha incorreta", "warning");
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

    return(
        <AuthContext.Provider value={{ signIn, loading, user, isUserLoaded, aviso, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;