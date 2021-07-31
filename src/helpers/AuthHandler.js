import Cookies from 'js-cookie';

export const isLogged = () => {
    let token = Cookies.get('token');
    return (token) ? true: false;
}

export const doLogin = (token, rememberPassword = false) => {
    if(rememberPassword) {
        Cookies.set('token', token, {expires:1000*60*60*24*30 });
    } else {
        Cookies.set('token', token);
    }
}