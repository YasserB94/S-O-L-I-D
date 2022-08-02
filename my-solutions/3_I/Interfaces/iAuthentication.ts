export interface iAuthentication{
    checkPassword(password:string):boolean;
    resetPassword():void;
}
export interface iGoogleAuthentication extends iAuthentication{
    getGoogleLogin(token:string):boolean;
    setGoogleToken(token:string):void;
}
export interface iFacebookAuthentication extends iAuthentication{
    getFacebookLogin(token:string):boolean;
    setFacebookToken(token:string):void;

}