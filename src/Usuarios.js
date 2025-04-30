'use strinc';

function Usuarios(_id, username, password, accessToken, refreshToken) {
    Object.defineProperty(this, '_id', {
        get: function () {
            return _id;
        },
        set: function (value) {
            _id = value;
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(this, 'username', {
        get: function () {
            return username;
        },
        set: function (value) {
            username = value;
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(this, 'password', {
        get: function () {
            return password;
        },
        set: function (value) {
            password = value;
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(this, 'accessToken', {
        get: function () {
            return accessToken;
        },
        set: function (value) {
            accessToken = value;
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(this, 'refreshToken', {
        get: function () {
            return refreshToken;
        },
        set: function (value) {
            refreshToken = value;
        },
        enumerable: true,
        configurable: true,
    });
}

Usuarios.prototype = {
    constructor: Usuarios,

    sayHi: function () {
        return 'Hi';
    },

    sayName: function () {
        console.log(this.username);
    },

    toString: function () {
        return '[Usuario ' + this.username + ']';
    },
};

export default Usuarios;
