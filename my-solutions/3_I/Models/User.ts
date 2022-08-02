import { iAuthentication } from "../Interfaces/iAuthentication";
export default class User implements iAuthentication{
    protected _password:string;
    constructor(password?:string){
        const DEFAULTS = {
            password:'user',
        }
        password ? this._password = password:this._password = DEFAULTS.password;
    }
    checkPassword(password: string): boolean {
        return(password===this._password);
    }
    resetPassword(): void {
        const newPass = prompt('What is your new password?');
        typeof newPass==="string" ? this._password = newPass : this.resetPassword();
    }
}