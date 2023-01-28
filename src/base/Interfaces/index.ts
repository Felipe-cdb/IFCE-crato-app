export interface IUser {
    name: String;
    email: String;
    type: String;
    permicoes: String[], // GP, GM, GR
}

export interface IUserLog {
    email: string;
    password: string;
}

export interface IUserRegister {
    name: string;
    type: string;
    identification?: string;
    email: string;
    phone?: string;
    password: string;
}

export interface ICheckRegister extends IUserRegister {
    confirmPassword: string;
}