const apiUrl = 'http://localhost:4000/api';

const ApiEndPoint = {
    Users: {
        get: `${apiUrl}/users`,
    },
    Jwt: {
        Login: `${apiUrl}/jwt/login`,
        Token: `${apiUrl}/jwt/token`,
    },
};

export { ApiEndPoint };
