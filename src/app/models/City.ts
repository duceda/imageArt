import { ValidationUtil } from '../utilities/ValidationUtil';

export class City implements ICity {
    name: string;
    id: number;
    icon: string;

    constructor(name?: string, id?: number, icon?: string) {
        this.name = name || undefined;
        this.id = id || undefined;
        this.icon = icon || undefined;
    }

    public getName(): string {
        return this.name;
    }

    public getId(): number {
        return this.id;
    }

    public getIcon(): string {
        return this.icon;
    }


    public setName(name: string): void {
        this.name = name;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public setIcon(icon: string): void {
        this.icon = icon;
    }


    parseObject(obj) {
        if (ValidationUtil.stringIsNotBlank(obj.name)) {
            this.setName(obj.name);
        }

        if (ValidationUtil.numberIsNotZero(obj.id)) {
            this.setId(obj.id);
        }

        if (ValidationUtil.stringIsNotBlank(obj.icon)) {
            this.setIcon(obj.icon);
        }
    }
}
