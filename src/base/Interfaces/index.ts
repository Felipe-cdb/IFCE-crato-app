import { RefectoryStatusEnum, UserPermitions, UserTypes } from "../Enums"

export interface IUser {
    id: string;
    name: string;
    email: string;
    type: UserTypes;
    roles: UserPermitions[]; // MP, MM, RM
    phoneNumber?: string;
    avatarUrl?: string,
    course?: string,
    registration?: string,
    siape?: string,
    isActive: boolean,
    createdAt: string
}

export interface IRefectory {
    id: string;
    status: RefectoryStatusEnum;
    vigencyDate: string;
    startAnswersDate: string;
    menuUrl: string;
    hasAnswered: boolean;
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

export type IdentificationType = 'siap' | 'registration'

export type MenuAnswer = {
    breakfast: number,
	lunch: number,
	afternoonSnack: number,
	dinner: number,
	nightSnack: number
}