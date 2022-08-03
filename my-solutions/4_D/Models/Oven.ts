import { iOven as OvenInterface } from "../Interfaces/iOven";
export class Oven implements OvenInterface {
    private _powerStatus: boolean
    private _parentElement: HTMLDivElement;
    protected _statusMessages = {
        turnOn: 'The oven is on',
        turnOff: `The oven is off`,
        bakeWithoutPower: `There is no power!`
    }
    constructor(htmlParentElement: HTMLDivElement) {
        this._powerStatus = false;
        this._parentElement = htmlParentElement;
    }
    turnOn(): void {
        if (this._powerStatus) {
            console.error(this);
            console.error(`Power was already set to ${this._powerStatus}`)
            return
        };
        this._powerStatus = true;
        const msg = this._statusMessages.turnOn;
        this.updateParent(msg, 1000);
    }
    turnOff(): void {
        if (!this._powerStatus) {
            console.error(this)
            console.error(`Power was already set to ${this._powerStatus}`)
            return
        };
        this._powerStatus = false;
        const msg = this._statusMessages.turnOff
        this.updateParent(msg, 3000);
    }
    bake(item: string): void {
        if (this._powerStatus) {
            const msg = `Now baking ${item} !`;
            this.updateParent(msg, 2000);
            return;
        }
        const msg = this._statusMessages.bakeWithoutPower;
        this.updateParent(msg, 2000);
    }
    updateParent(msg: string, timer: number) {
        setTimeout((): void => {
            const p = this.createStatusParagraph(msg);
            this.clearParent();
            this._parentElement.appendChild(p);
        }, timer)
    }
    clearParent(): void {
        this._parentElement.innerHTML = '';
    }
    createStatusParagraph(message: string): HTMLParagraphElement {
        const p = document.createElement('p');
        const d = new Date();
        p.innerText = `${d.getHours()}:${d.getMinutes()} : ${message}`
        return p;
    }

}
export class ElectricOven extends Oven {
    constructor(htmlParentElement: HTMLDivElement) {
        super(htmlParentElement);
        this.setCustomStatusMessages()
    }
    setCustomStatusMessages(): void {
        this._statusMessages = {
            turnOn: 'The electricity is on',
            turnOff: 'The electricity is off',
            bakeWithoutPower: 'There is no electricity!'
        }
    }
}
export class GasOven extends Oven {
    constructor(htmlParentElement: HTMLDivElement) {
        super(htmlParentElement);
        this.setCustomStatusMessages()
    }
    setCustomStatusMessages(): void {
        this._statusMessages = {
            turnOn: 'The gas is on',
            turnOff: 'The gas is off',
            bakeWithoutPower: 'There is no gas!'
        }
    }
}