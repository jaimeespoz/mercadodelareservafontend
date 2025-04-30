import './register.css';

const register = function () {
    const registerPage = document.createElement('div');
    registerPage.innerHTML = `
    <div class="container">
        <div class="container-register" data-container>
        </div>
        <div class="container-contexto">
            <span>Hola register</span>
        </div>
    </div>
        `;

    document.body.innerHTML = '';
    document.body.appendChild(registerPage);
};

export { register };
