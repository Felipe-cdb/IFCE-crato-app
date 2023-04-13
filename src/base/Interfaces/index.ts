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
    email: string;
    password: string;
    phoneNumber?: string;
    identification: string;
    roles: UserPermitions[];
    type: UserTypes;
}

export interface ICheckRegister extends IUserRegister {
    confirmPassword: string;
}