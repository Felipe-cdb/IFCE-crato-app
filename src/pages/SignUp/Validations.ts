import { UserTypes } from "../../base/Enums";
import { NameRegex, emailRegex, formatPhoneNumber, siapRegex1, siapRegex2 } from "ifce-crato-app/src/helpers";

export default class VALIDATION {

    static NAME(name: string): boolean {
        return NameRegex.test(name) && name.trim().length > 4;
    }

    static MATRICULA(registration: string): boolean {
        return registration.trim().length === 14;

    }

    static SIAP(registration: string): boolean {
        return !!registration.trim();
    }

    static EMAIL(email: string): boolean {
        return emailRegex.test(email);
    }
    
    static PHONE(phone: string): boolean {
        if (!(phone.trim().length)) return true;
        return formatPhoneNumber(phone).length === 15
    }

    static PASSWORD(passWrod: string): boolean {
        return passWrod.trim().length >= 8;
    }
}