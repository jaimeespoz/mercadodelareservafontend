import { helpHttp } from './shared/helpHttp';
import { ApiEndPoint } from './shared/constants/constant';

let apiJWT = helpHttp();

export const userLogedIn = () => {
    async function login(username, password) {
        const options = {
            body: {
                username: username,
                password: password,
            },
        };

        const response = await apiJWT.post(`${ApiEndPoint.Jwt.Login}`, options);
        // console.log('response.', response);
        if (response.retorno === '00') {
            console.log('Exito');
            localStorage.setItem('username', response.username);
            localStorage.setItem('password', response.password);
            localStorage.setItem(
                'accessToken',
                'Bearer ' + response.accessToken
            );
            localStorage.setItem(
                'refreshToken',
                'Bearer ' + response.refreshToken
            );
        } else {
            // console.log('Retorno.', response.retorno);
            console.log('Error,,', response.retorno);
            localStorage.setItem('username', '');
            localStorage.setItem('password', '');
            localStorage.setItem('accessToken', '');
            localStorage.setItem('refreshToken', '');
        }
    }

    return {
        login,
    };
};
