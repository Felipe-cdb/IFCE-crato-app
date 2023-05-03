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

export const getFormatedDate = (date: Date): number => {
    return new Date(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`).valueOf()
}