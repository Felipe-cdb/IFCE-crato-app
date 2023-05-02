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