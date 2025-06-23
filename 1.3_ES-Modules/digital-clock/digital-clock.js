
class DigitalClock extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        this.showCurrentTime()
        setInterval(() => {this.showCurrentTime()}, 1000);
    }

    showCurrentTime(){
        const now = this.getCurrentTime()
        this.innerHTML = now 
    }

    getCurrentTime(){
        const now = new Date()
        const hours = now.getHours()
        const minutes = now.getMinutes()
        const seconds = now.getSeconds()
        return `${hours}:${minutes}:${seconds}`
    }
}

window.customElements.define('digital-clock', DigitalClock)
//obtener la hora
//cada segundo tendresmo que volver a calcular la hora
//mostrar la hora 