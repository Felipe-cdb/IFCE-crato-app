import React, { createContext, ReactNode, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack'
import { MessageType, showMessage } from 'react-native-flash-message';

import { IUser, IUserLog, ICheckRegister } from '../base/Interfaces'
import { UserPermitions } from '../base/Enums'

interface AuthContextDataProps{
    user: IUser;
    isUserLogin: boolean;
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
    permitions: [],
    type: ''
}

export const AuthContext = createContext({} as AuthContextDataProps);

function AuthProvider({ children }: AuthProviderProps){
    
    const [user, setUser] = useState({} as IUser);
    const [isUserLogin, setIsUserLogin] = useState<boolean>(false);
    const navigation = useNavigation<StackNavigationProp<any>>();

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
        if (!userLog.email.trim()) {
            aviso('Insira um email válido', 'warning');
            return;
        }
        
        if (!userLog.password.trim()) {
            aviso('Insira uma senha', 'warning');
            return;
        }

        logar(userLog);
        navigation.navigate('Drawer');
    }

    function logar(userLog: IUserLog) {
        setUser({
            name: "Teste 1",
            email: "teste@mail.com",
            permitions: [],
            type: 'Aluno'
        });
        setIsUserLogin(true);
    }

    function signOut(){
        setIsUserLogin(false);
        setUser(userVoid);
        navigation.navigate('Login');
    }

    return(
        <AuthContext.Provider value={{ signIn, user, isUserLogin, aviso, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;