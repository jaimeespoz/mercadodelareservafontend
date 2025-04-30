'use strict';
import '../../globalstyles.css';
import './enconstruccion.css';
import 'material-symbols';

import enconstruccion from '/src/assets/images/enconstruccion.png';

const /** {HTMLElement} */ $overlay = document.createElement('div');
$overlay.classList.add('overlay', 'modal-overlay');

const enConstruccionModal = function () {
    const /** {HTMLElement} */ $modal = document.createElement('div');
    $modal.classList.add('modal');

    $modal.innerHTML = `
        <button
            class="icon-btn large"
            aria-label="Close modal"
            data-modal-close-btn
        >
            <span class="material-symbols-rounded" aria-hidden="true"
                >close</span
            >
            <div class="state-layer"></div>
        </button>
        <div>
            <img src="${enconstruccion}" alt="En Construccion" />
            <button type="button" class="fab" data-close-btn>
                <span class="material-symbols-outlined" aria-hidden="true"
                    >close</span
                >
                <div>
                    <hr class="solid">
                </div>

                <span class="text text-label-large">Cerrar</span>
                <div class="state-layer"></div>
            </button>
        </div>
    `;

    const open = function () {
        document.body.appendChild($modal);
        document.body.appendChild($overlay);
    };

    const close = function () {
        document.body.removeChild($modal);
        document.body.removeChild($overlay);
        window.location = '/';
    };

    const /** {HTMLElement} */ $modalCloseBtn = $modal.querySelector(
            '[data-modal-close-btn]'
        );
    $modalCloseBtn.addEventListener('click', close);
    const /** {HTMLElement} */ $closeBtn =
            $modal.querySelector('[data-close-btn]');
    $closeBtn.addEventListener('click', close);

    return { open, close };
};

export { enConstruccionModal };
