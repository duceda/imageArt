import { ValidationUtil } from '../utilities/ValidationUtil';

export class City implements ICity {
    name: string;
    id: number;
    icon: string;
    info: string;

    constructor(name?: string, id?: number, icon?: string, info?: string) {
        this.name = name || undefined;
        this.id = id || undefined;
        this.icon = icon || undefined;
        this.info = info || '';
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

    public getInfo(): string {
        return this.info;
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

    public setInfo(info: string): void {
        this.info = info;
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

        if (ValidationUtil.stringIsNotBlank(obj.info)) {
            this.setInfo(obj.info);
        }
    }
}
