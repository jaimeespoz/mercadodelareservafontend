import './forget.css';

const forget = function () {
    const forgetPage = document.createElement('div');
    forgetPage.innerHTML = `
    <div class="container">
        <div class="container-forget" data-container>
            <div class="text-title-large">Reinicie su clave</div>
            <span class="text-label-medium">Olvido su Clave de Acceso</span>
         <form id="form-book" class="input-container">
            <div class="input-group">
                <span class="material-symbols-rounded" aria-hidden="true">mail</span>
                <input id="username" autocomplete="off" type="email" class="text-label-medium"
                    placeholder="ingrese su correo" data-email>
            </div>
            <div data-email-error class="error"></div>
                            <div>
                    <button type="submit" data-btnReset class="btn text-label-medium">Reset Clave</button>
                </div>
        </form>
        </div>
        <div class="container-contexto">
            <span>Hola forget</span>
        </div>
    </div>
        `;

    document.body.innerHTML = '';
    document.body.appendChild(forgetPage);
};

export { forget };
