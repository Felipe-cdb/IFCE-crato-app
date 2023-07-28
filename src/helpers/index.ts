import { UserTypes } from "../base/Enums";
import { IdentificationType } from "../base/Interfaces";

export const checkUserTypeIdentification = (userType: UserTypes): IdentificationType => {
    switch (userType) {
        case UserTypes.EMPLOYEETAE:
        case UserTypes.EMPLOYEETEACHER:
            return 'siap'
        case UserTypes.STUDENT:
            return 'registration'
    }
}

export function formatDate(date: Date, monthName = false) {
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = monthName ? date.toLocaleString('default', { month: 'long' }) : String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    if (monthName) {
        return `${day} de ${month} de ${year}`;
    }
    return `${day}/${month}/${year}`
}

export function maskEmail(email: string) {
    const atIndex = email.indexOf('@');
    const domain = email.slice(atIndex + 1);
    const maskedUsername = email.slice(0, 2) + '*'.repeat(atIndex - 2);
    const maskedDomain = domain.slice(0, 1) + '*'.repeat(domain.length - 5) + domain.slice(-3);
    return maskedUsername + '@' + maskedDomain;
}

export function formatPhoneNumber(value: string) {
    // Remove todos os caracteres que não são números
    const numericValue = value.replace(/\D/g, '');

    // Aplica a máscara de telefone (XX) XXXXX-XXXX
    let formattedValue = '';
    if (numericValue.length > 0) {
        formattedValue += '(' + numericValue.substring(0, 2);
    }
    if (numericValue.length > 2) {
        formattedValue += ') ' + numericValue.substring(2, 7);
    }
    if (numericValue.length > 7) {
        formattedValue += '-' + numericValue.substring(7, 11);
    }

    return formattedValue;
};

export const NameRegex = /^[a-zA-Z\s]+$/;
export const emailRegex = /^[\w-]+(\.[\w-]+)*@(ifce\.edu\.br|aluno\.ifce\.edu\.br)$/;
export const siapRegex1 = /^\d{6}$/;
export const siapRegex2 = /^\d{6}-\d{3}$/;

/**
 * Tornar toda primeira letra maiuscula de um nome.
 * @param {string} str 
 * @returns {string}
 */
export const capitalizeAfterSpace = (str: string) => {
    return str.replace(/(?:^|\s)\S/g, function (match) {
        return match.toUpperCase();
    });
}

export default function formatSIAPNumber(input: string): string {
    // Remover caracteres não numéricos
    const digitsOnly = input.replace(/\D/g, '');

    // Formatar como "123456" ou "123456-789" dependendo do tamanho
    if (digitsOnly.length <= 6) {
        return digitsOnly;
    }
    else {
        const formattedSIAP = digitsOnly.replace(/(\d{6})(\d{0,3})/, '$1-$2');
        return formattedSIAP;
    }
}