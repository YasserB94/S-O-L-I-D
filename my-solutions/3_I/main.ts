import Guest from "./Models/Guest";
import Admin from "./Models/Admin";
// class GoogleBot implements UserAuth {}

const passwordElement = <HTMLInputElement>document.querySelector('#password');
const typePasswordElement = <HTMLInputElement>document.querySelector('#typePassword');
const typeGoogleElement = <HTMLInputElement>document.querySelector('#typeGoogle');
const typeFacebookElement = <HTMLInputElement>document.querySelector('#typeFacebook');
const loginAsAdminElement = <HTMLInputElement>document.querySelector('#loginAsAdmin');
const resetPasswordElement = <HTMLAnchorElement>document.querySelector('#resetPassword');
const loginForm = <HTMLFormElement>document.querySelector('#login-form');

let admin = new Admin();
let guest = new Guest();

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = loginAsAdminElement.checked ? admin : guest;
    if(user.constructor.name==='Admin' && (typeGoogleElement.checked||typeFacebookElement.checked)){
        
        alert('Admins can not login trough third party authentication!')
        return;
    }
    let authenticationSuccessfull = false;
    switch(true) {
        case typePasswordElement.checked:
            authenticationSuccessfull = user.checkPassword(passwordElement.value);
            break;
        case typeGoogleElement.checked:
            authenticationSuccessfull = user.checkGoogleLogin('secret_token_google');
            break;
        case typeFacebookElement.checked:
            authenticationSuccessfull = user.getFacebookLogin('secret_token_fb');
            break;
    }
    if(user.constructor.name==='Admin' && authenticationSuccessfull){
        alert('Welcome Master');
        return;
    }
    if(user.constructor.name==='Guest' && authenticationSuccessfull){
        alert('You are logged in, Enjoy logging in again,Mhuhahahauahuaha')
        return;
    }
    alert('Login Failed.')
    
});

resetPasswordElement.addEventListener('click', (event) => {
   event.preventDefault();
   const user = loginAsAdminElement.checked ? admin : guest;
   user.resetPassword();
});