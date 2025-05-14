import './forget.css';

const forget = function () {
    const forgetPage = document.createElement('div');
    forgetPage.innerHTML = `
    <div class="page-forget">
        <div class="container">
            <div class="container-forget">
                <div class="text-title-large">Reinicie su clave</div>
                <span class="text-label-medium">Olvido su Clave de Acceso</span>
                <form id="form-book" class="input-container">
                    <div class="input-group">
                        <span class="material-symbols-rounded" aria-hidden="true">mail</span>
                        <input id="username" autocomplete="off" type="email" class="text-label-medium"
                            placeholder="ingrese su correo" data-email>
                    </div>
                    <div data-email-error class="error"></div>
                </form>
            </div>
            <div class="container-contexto">
                <span>Hola forget</span>
            </div>
        </div>
    </div>
        `;

    document.body.innerHTML = '';
    document.body.appendChild(forgetPage);
};

export { forget };
