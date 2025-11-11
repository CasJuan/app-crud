import modalHtml from './render-modal.html?raw';
import './render-modal.css';


let modal, form;

export const showModal = () => {
    modal?.classList.remove('hide-modal');
}

export const hidenModal = () => {
    modal?.classList.add('hide-modal');
}

export const renderModal = (element) => {
    if(modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';

    form = modal.querySelector('form');


    modal.addEventListener('click', (event) => {
        if(event.target.className === 'modal-container'){
            hidenModal()
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
    })
    
    element.append(modal);
}