window.onload = () => {

    let date = new Date()
    date = date.toUTCString()

    let clockState = {
        city: Number(document.querySelector('.city').value),
        time: date.toString().slice(16, 25),
        hours: date.toString().slice(16, 18),
        status: this.hours < 13 ? 'AM' : 'PM',
        timeRef: document.querySelector('.time'),
    }

    document.querySelector('.city').addEventListener('change', () => update())

    function update() {
        let date = new Date()
        date = date.toUTCString()
        clockState.time = date.toString().slice(19, 25)
        clockState.hours = Number(date.toString().slice(17, 19))
        clockState.city = Number(document.querySelector('.city').value)
        clockState.hours = clockState.hours + clockState.city
        clockState.hours = clockState.hours > 24 ? clockState.hours = clockState.hours - 24 : clockState.hours = clockState.hours
        clockState.hours = clockState.hours == 12 || clockState.hours == 24 ? clockState.hours = 00 : clockState.hours = clockState.hours
        clockState.status = clockState.hours < 12 ? clockState.status = 'AM' : clockState.status = 'PM'
        clockState.hours = clockState.hours > 12 ? (clockState.hours - 12) : (clockState.hours)
        clockState.hours = clockState.hours < 10 ? clockState.hours = '0' + clockState.hours : clockState.hours = clockState.hours
        setDate(clockState)
    }

    function setDate(info) {
        info.timeRef.innerHTML = info.hours + (info.time) + info.status
    }

    setInterval(() => update(), 1000)
}








