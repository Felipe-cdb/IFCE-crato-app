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
