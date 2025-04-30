import 'style.css';
import 'material-symbols';

import { UI } from './UI';
const ui = new UI();

import { enConstruccionModal } from './shared/enconstruccion';
import { login } from './pages/login/index';

// const /* {JSON | undefined} */ $user = localStorage.getItem('username');
// const /* {JSON | undefined} */ $password = localStorage.getItem('password');

// console.log('aqui. ', $user, $password);

// const /* {HTMLElement} */ ventaGaragePage = document.createElement('div');
// ventaGaragePage.innerHTML = `
//     <div class="container" data-container>
//         <div class="text-title-large">Inicio de Sesion</div>
//         <form id="form-book" class="input-container">
//             <div class="input-group">
//                 <span class="material-symbols-rounded" aria-hidden="true">mail</span>
//                 <input autocomplete="off" type="email" class="text-label-medium"
//                     placeholder="ingrese su correo" data-email value="${$user}">
//             </div>
//             <div data-email-error class="error"></div>

//             <div class="input-group">
//                 <span class="material-symbols-rounded" aria-hidden="true">lock</span>
//                 <input autocomplete="off" type="password" class="text-label-medium"
//                     placeholder="ingrese su clave" data-password value="${$password}">
//             </div>
//             <div data-password-error class="error"></div>

//             <div>
//                 <button type="submit" data-btnContinuar class="btn text">Continuar</button>
//             </div>
//         </form>
//         <div class="input-footer">
//             <a href="#"><span class="text-label-small" data-olvido-clave-btn>Olvido su Clave de Acceso</span></a>
//             <a href="#"><span class="text-label-small" data-registrarse-btn>Crear una Cuenta Nueva</span></a>
//         </div>
//         <div data-books-cards></div>
//     </div>
// `;

const log = login();
// log.open();
