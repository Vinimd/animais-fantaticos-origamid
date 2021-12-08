export default function initOpen() {
    const li = document.querySelector('[data-semana]');
    const openDays = li.dataset.semana.split(',').map(Number);
    const openHour = li.dataset.horario.split(',').map(Number);

    setInterval(()=>{
        const now = new Date();

        const dayNow = now.getDay();
        const hourNow = now.getHours();
    
        const isDayOpen = openDays.includes(dayNow);
        const isHourOpen = (hourNow >= openHour[0] && hourNow < openHour[1])
    
        if(isDayOpen && isHourOpen){
            li.classList.add('aberto');
        }else if(li.classList.contains('aberto') && !isHourOpen && !isDayOpen){
            li.classList.remove('aberto');
        }
        // console.log(isDayOpen && isHourOpen)
    },2000)

}