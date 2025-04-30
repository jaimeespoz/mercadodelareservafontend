import { helpHttp } from './shared/helpHttp';
import { ApiEndPoint } from './shared/constants/constant';
import { userLogedIn } from './userLogedIn';

let api = helpHttp();
let api2 = userLogedIn();

export const UI = () => {
    async function prueba(username, password) {
        await api2.login(username, password);

        // return user.accessToken;
    }

    async function login(username, password) {
        const options = {
            body: {
                username: username,
                password: password,
            },
        };
        console.log('api (login): ', ApiEndPoint.Jwt.Login);
        console.log('options: ', JSON.stringify(options));
        const data = await api.post(`${ApiEndPoint.Jwt.Login}`, options);
        console.log(JSON.stringify(data));
        // console.log('volvi');
        // console.log('data : ', data);
    }

    const renderUsers = async (usuarios) => {
        const books = await api.get(`${ApiEndPoint.Users.get}`, {});
        // console.log('books', books);
        const bookCardContainer = document.querySelector('[data-books-cards]');
        // bookCardContainer.classList.add('prueba');
        bookCardContainer.innerHTML = '';
        books.forEach((book) => {
            console.log('book', book);
            const div = document.createElement('div');
            div.innerHTML = `
        <div class="card m-2">
            <div>
                <span class="card-title">${book.username}</span>
                <span class="card-text">${book.email}</span >
                <span class="card-text">${book._id}</span >
            </div>
        </div>
        `;
            bookCardContainer.appendChild(div);
        });
        // document.body.append(bookCardContainer);
    };
    return {
        prueba,
        login,
        renderUsers,
    };
};
