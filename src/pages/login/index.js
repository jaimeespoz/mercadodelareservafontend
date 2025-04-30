import './login.css';
import { dummyPage } from '../dummy/index';
import { register } from '../register/index';
import { forget } from '../forget/index';

import { UI } from '../../UI';
const ui = new UI();

const /* {JSON | undefined} */ $user = localStorage.getItem('username');
const /* {JSON | undefined} */ $password = localStorage.getItem('password');

const login = function () {
    const loginPage = document.createElement('div');
    loginPage.innerHTML = `
     <div class="container">
        <div class="container-login" data-container>
            <div class="text-title-large">Inicio de Sesion</div>
            <form id="form-book" class="input-container">
                <div class="input-group">
                    <span class="material-symbols-rounded" aria-hidden="true">mail</span>
                    <input id="username" autocomplete="off" type="email" class="text-label-medium"
                        placeholder="ingrese su correo" data-email>
                </div>
                <div data-email-error class="error"></div>

                <div class="input-group">
                    <span class="material-symbols-rounded" aria-hidden="true">lock</span>
                    <input id="password" autocomplete="off" type="password" class="text-label-medium"
                        placeholder="ingrese su clave" data-password>
                </div>
                <div data-password-error class="error"></div>

                <div data-books-cards></div>

                <div>
                    <button type="submit" data-btnContinuar class="btn text-label-medium">Continuar</button>
                </div>
            </form>
            <div class="input-footer">
                <a href="#"><span class="text-label-small" data-olvido-clave-btn>Olvido su Clave de Acceso</span></a>
                <a href="#"><span class="text-label-small" data-registrarse-btn>Crear una Cuenta Nueva</span></a>
            </div>
        </div>
        <div class="container-contexto">
            <span>Hola login</span>
        </div>
    </div> 
        `;

    // document.body.append(bookCardContainer);
    document.body.appendChild(loginPage);

    // const lpage = document.getElementById('form-book');

    // loginPage.getElementById('form-book').addEventListener('submit', (e) => {
    document.getElementById('form-book').addEventListener('submit', (e) => {
        const username = loginPage.querySelector('[data-email]').value;
        const password = loginPage.querySelector('[data-password]').value;
        if (username && password) {
            // ui.prueba(username, password);
            ui.login(username, password);
            // ui.renderUsers();
            const body = document.body;
            body.innerHTML = '';
            body.appendChild(dummyPage);

            e.preventDefault();
        } else {
            console.log('NO entre');
        }
    });

    const /** */ $emailInput = loginPage.querySelector('[data-email]');
    const /** */ $emailError = loginPage.querySelector('[data-email-error]');
    const /** */ $passwordInput = loginPage.querySelector('[data-password]');
    const /** */ $passwordError = loginPage.querySelector(
            '[data-password-error]'
        );
    const /** */ btnContinuar = loginPage.querySelector('[data-btnContinuar]');
    const /** */ $emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const /** */ $passwordPattern = /^(\d{4})$/;

    $emailInput.value = $user;
    $passwordInput.value = $password;

    btnContinuar.disabled = true;

    const enableContinuar = function () {
        btnContinuar.disabled = !$emailInput.value || !$passwordInput.value;
        // console.log('enableContinuar', btnContinuar.disabled);
    };

    $emailInput.addEventListener('keyup', enableContinuar);
    $passwordInput.addEventListener('keyup', enableContinuar);

    function validateEmail() {
        if (!$emailPattern.test($emailInput.value)) {
            $emailInput.parentElement.style.border = '1px solid #e74c3c';
            $emailError.classList.add('active');
            $emailError.textContent =
                'Ingrese Casilla de Correo (ejemplo@dominio.cl)';
            console.log('validateEmail');
        } else {
            $emailInput.parentElement.style.border = '1px solid #27ae60';
            $emailError.classList.remove('active');
        }
    }

    $emailInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            validateEmail();
        }
    });

    $emailInput.addEventListener('focusout', (e) => {
        if ($emailInput.value !== '') {
            validateEmail();
        }
    });

    $emailInput.addEventListener('click', (e) => {
        $emailInput.parentElement.style.border = '1px solid #27ae60';
        $emailError.textContent = '';
        $emailError.classList.remove('active');
    });

    function validatePassword() {
        if (
            $passwordInput.value === '' ||
            !$passwordPattern.test($passwordInput.value)
        ) {
            $passwordInput.parentElement.style.border = '1px solid #e74c3c';
            $passwordError.classList.add('active');
            $passwordError.textContent = 'Clave de Acceso de 4 digitos';
        } else {
            $passwordInput.parentElement.style.border = '1px solid #27ae60';
            $passwordError.classList.remove('active');
        }
    }

    $passwordInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            validatePassword();
        }
    });

    $passwordInput.addEventListener('focusout', (e) => {
        if ($passwordInput.value !== '') {
            validatePassword();
        }
    });

    $passwordInput.addEventListener('click', (e) => {
        $passwordInput.parentElement.style.border = '1px solid #27ae60';
        $passwordInput.value = '';
        $passwordError.textContent = '';
        $passwordError.classList.remove('active');
    });

    const /** {HTMLElement} */ $olvidoClaveBtn = document.querySelector(
            '[data-olvido-clave-btn]'
        );

    $olvidoClaveBtn.addEventListener('click', function () {
        forget();
        // const /** */ body = document.body;
        // body.innerHTML = '';
        // const /** {Object} */ modal = enConstruccionModal();
        // modal.open();
    });

    const /** {HTMLElement} */ $registrarseBtn = document.querySelector(
            '[data-registrarse-btn]'
        );

    $registrarseBtn.addEventListener('click', function () {
        register();
        // const /** */ body = document.body;
        // body.innerHTML = '';
        // const /** {Object} */ modal = enConstruccionModal();
        // modal.open();
    });
};

export { login };
