import { UserPermitions, UserTypes } from "../Enums"

export interface IUser {
    name: String;
    email: String;
    type: String;
    roles: UserPermitions[]; // MP, MM, RM
    phoneNumber?: string;

}


export interface IUserLog {
    email: string;
    password: string;
}

export interface IUserRegister {
    name: string;
    type: UserTypes;
    identification?: string;
    email: string;
    phoneNumber: string;
    password: string;
}

export interface ICheckRegister extends IUserRegister {
    confirmPassword: string;
}