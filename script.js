document.addEventListener("DOMContentLoaded", () => setInterval(checkCityTime, 1000))
let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')


function checkCityTime() {
    let city = document.querySelector('.city').value
    city = Number(city)
    let date = new Date()
    date.setHours(date.getHours() + city)
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    setDate(hours, minutes, seconds)
}

function setDate(hours, minutes, seconds) {
    if (hours < 10) {
        h.innerHTML = '0' + hours + ':'
    }
    if (hours > 10) {
        h.innerHTML = hours + ':'
    }
    if (minutes < 10) {
        m.innerHTML = '0' + minutes + ':'
    }
    if (minutes > 10) {
        m.innerHTML = minutes + ':'
    }
    if (seconds < 10) {
        s.innerHTML = '0' + seconds
    }
    if (seconds > 10) {
        s.innerHTML = seconds
    }
}





