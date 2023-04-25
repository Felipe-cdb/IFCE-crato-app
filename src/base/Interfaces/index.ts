import { UserPermitions, UserTypes } from "../Enums"

export interface IUser {
    name: String;
    email: String;
    type: String;
    roles: UserPermitions[]; // MP, MM, RM
    phoneNumber?: string;
    avatarUrl?: string,
    course?: string,
    registration?: string,
    siape?: string,
    isActive: boolean,
    createdAt: string
}


export interface IUserLog {
    email: string;
    password: string;
}

export interface IUserRegister {
    name: string;
    email: string;
    password: string;
    course?: string;
    phoneNumber?: string;
    registration?: string;
    siap?: string;
    type: UserTypes;
}

export interface ICheckRegister extends IUserRegister {
    confirmPassword: string;
}