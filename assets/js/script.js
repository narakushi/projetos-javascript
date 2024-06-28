function relogio() {
    const timer = document.querySelector('.timer');
    let relogio;
    let sec = 0;

    const getTimeBySeconds = (second) => {
        const data = new Date(second * 1000);
        return data.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'GMT' })
    }

    const iniciaRelogio = () => {
        relogio = setInterval(() => {
            sec++;
            timer.innerHTML = getTimeBySeconds(sec);
        }, 1000);
    }

    document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains('iniciar')) {
            timer.classList.remove('pause');
            clearInterval(relogio);
            iniciaRelogio();
        }

        else if (el.classList.contains('pausar')) {
            clearInterval(relogio);
            timer.classList.add('pause');
        }

        else if(el.classList.contains('zerar')){
            timer.classList.remove('pause');
            clearInterval(relogio);
            sec = 0;
            timer.innerHTML = '00:00:00';
        }
    })
}

relogio();