export class ValidationUtil {

    constructor() { }

    public static anyNotNull(object: any): boolean {
        let anyIsNotNull = false;

        if (typeof object !== 'undefined' && object !== null) {
            anyIsNotNull = true;
        }

        return anyIsNotNull;
    }

    public static collectionIsNotEmpty(collection: Array<any>): boolean {
        let collectionIsNotEmpty = false;

        if (typeof collection !== 'undefined' && collection !== null &&
            collection.constructor === Array && collection.length > 0) {
            collectionIsNotEmpty = true;
        }

        return collectionIsNotEmpty;
    }

    public static stringIsNotBlank(text: any): boolean {
        let stringIsNotBlank = false;

        if (typeof text === 'string' && text !== '') {
            stringIsNotBlank = true;
        }

        return stringIsNotBlank;
    }

    public static numberIsNotZero(num: any): boolean {
        let numberIsNotZero = true;

        if (typeof num === 'number' && num > 0) {
            numberIsNotZero = true;
        }

        return numberIsNotZero;
    }
}