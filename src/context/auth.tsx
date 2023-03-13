import React, { createContext, ReactNode, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack'
import { MessageType, showMessage } from 'react-native-flash-message';

import { api } from "../config";
import { IUser, IUserLog, ICheckRegister } from '../base/Interfaces'
// import { UserPermitions } from '../base/Enums'
import { EmailRegex, PasswordRegex } from "../base/Regexs";

interface AuthContextDataProps{
    user: IUser;
    isUserLoaded: boolean;
    aviso: (m: string, t: MessageType) => void;
    signIn: (user: IUserLog) => void;
    signUp: (user: ICheckRegister) => void;
    signOut: () => void;
}

interface AuthProviderProps{
    children: ReactNode;
}

const userVoid: IUser = {
    name: '',
    email: '',
    roles: [],
    type: ''
}

export const AuthContext = createContext({} as AuthContextDataProps);

function AuthProvider({ children }: AuthProviderProps){
    
    const [user, setUser] = useState({} as IUser);
    const [isUserLoaded, setIsUserLoaded] = useState<boolean>(false);
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        if (isUserLoaded) navigation.navigate('Drawer');
    }, [isUserLoaded])

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

    async function signUp(userRegister: ICheckRegister) {
        
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
            setIsUserLoaded(true)
        } catch (error: any) {
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
        setUser(userVoid);
        navigation.navigate('Login');
    }

    return(
        <AuthContext.Provider value={{ signIn, user, isUserLoaded, aviso, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;