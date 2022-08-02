import User from "./User";
import { iGoogleAuthentication,iFacebookAuthentication } from "../Interfaces/iAuthentication";
export default class Guest extends User implements iGoogleAuthentication,iFacebookAuthentication{
    private _facebookToken:string;
    private _googleToken:string;    
    constructor(){
            super()
            this._facebookToken = 'secret_token_fb';
            this._googleToken = 'secret_token_google';
        }
    setGoogleToken(token: string): void {
        this._googleToken = token;
    }
    setFacebookToken(token: string): void {
        this._facebookToken = token;
    }
    getFacebookLogin(token: string): boolean {
        return (this._facebookToken === token);
    }
    getGoogleLogin(token: string): boolean {
        return (this._googleToken === token);
    }

}