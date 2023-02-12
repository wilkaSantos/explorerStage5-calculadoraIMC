
export const Modal = {
    popUpModal: document.querySelector('.conatiner-modal'),
    modalTitle: document.querySelector('.popupTitle'),
    closeButton: document.querySelector('.closeButton'),
    open(){
        this.popUpModal.classList.remove('disable');
    },
    close(){
        this.popUpModal.classList.add('disable');
        location.reload();
    }
}

window.addEventListener('keydown', (event) => {
    if(event.key === 'Escape'){
      Modal.close();
    }
});