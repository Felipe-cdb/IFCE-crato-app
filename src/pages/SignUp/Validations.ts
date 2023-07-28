import { UserTypes } from "../../base/Enums";
import { NameRegex, emailRegex, siapRegex1, siapRegex2 } from "ifce-crato-app/src/helpers";

export default class VALIDATION {

    static NAME(name: string | null | undefined): boolean {
        if (!name) return false;
        return NameRegex.test(name) && name.trim().length > 4;
    }

    static MATRICULA(registration: string | null | undefined): boolean {
        if (registration === undefined) return false;
        if (registration === null) return true;
        return registration.trim().length === 14;

    }

    static SIAP(registration: string | null | undefined): boolean {
        if (registration === undefined) return false;
        if (registration === null) return true;
        return !!registration.trim();
    }

    static EMAIL(email: string | null | undefined): boolean {
        if (email === undefined) return false;
        if (email === null) return true;
        return emailRegex.test(email);
    }

    static PASSWORD(passWrod: string | null | undefined): boolean {
        if (passWrod === undefined) return false;
        if (passWrod === null) return true;
        return passWrod.trim().length >= 8;
    }
}