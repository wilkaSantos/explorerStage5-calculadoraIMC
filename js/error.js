
export const Error = {
    messageErro: document.querySelector('.container-error'),
    open(){ 
        this.messageErro.classList.remove('disable') 
    },
    close(){ 
        this.messageErro.classList.add('disable')
    }
}