import React, { createContext, ReactNode, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack'

interface IUser {
    name: String;
    email: String;
    type: String;
    permicoes: String[], // GP, GM, GR
}

type UserType = {
    email: string;
    password: string;
}

interface AuthContextDataProps{
    user: IUser;
    isUserLogin: boolean;
    singIn: (user: UserType) => void;
}

interface AuthProviderProps{
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

function AuthProvider({ children }: AuthProviderProps){
    
    const [user, setUser] = useState({} as IUser);
    const [isUserLogin, setIsUserLogin] = useState<boolean>(false);
    const navigation = useNavigation<StackNavigationProp<any>>();

    async function singIn(userLog: UserType) {
        if (!userLog.email.trim()) {
            alert('Insira um email válido');
            return;
        }
        
        if (!userLog.password.trim()) {
            alert('Insira uma senha');
            return;
        }

        logar(userLog);
        navigation.navigate('Home');
    }

    function logar(userLog: UserType) {
        setUser({
            name: "Teste 1",
            email: "teste@mail.com",
            permicoes: [],
            type: 'Aluno'
        });
        setIsUserLogin(true)
    }

    return(
        <AuthContext.Provider value={{ singIn, user, isUserLogin }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;