import '../../globalstyles.css';
import './register.css';

const register = function () {
    const registerPage = document.createElement('div');
    registerPage.innerHTML = `
    <div class="container">
        <div class="container-contexto">
            <div class="text-title-large">Crea tu Cuenta gratuita</div>
            <span>Hola register</span>
        </div>
        <div class="container-register" data-container>
            <form id="form-book">
                <div class="input-group">
                    <label for="username" class="form-label text-title-very-small">Email</label>
                    <input id="username" autocomplete="off" type="email" class="form-control text-label-medium"
                        placeholder="ingrese su correo" data-email>
                </div>
                <div data-email-error class="error"></div>

                <div class="input-group">
                    <label for="password" class="form-label text-title-very-small">Clave</label>
                    <input id="password" autocomplete="off" type="password" class="form-control text-label-medium"
                        placeholder="ingrese su clave" data-password>
                </div>
                <div data-password-error class="error"></div>

                <div data-books-cards></div>

                <div>
                    <button type="submit" data-btnContinuar class="btn text-label-medium">Continuar</button>
                </div>
            </form>
        </div>
    </div>
        `;

    document.body.innerHTML = '';
    document.body.appendChild(registerPage);
};

export { register };
