import User from "./User";
export default class Admin extends User{
    constructor(password?:string){
        const DEFAULTS = {
            password:'admin',
        }
        password ? super(password) : super(DEFAULTS.password);
    }
}