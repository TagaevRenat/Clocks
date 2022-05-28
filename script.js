document.addEventListener("DOMContentLoaded", () => setInterval(checkCityTime, 1000))
let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')
let ampm = document.querySelector('.am')


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
    if (hours > 12) {
        h.innerHTML = '0' + (hours - 12) + ':'
        ampm.innerHTML = 'PM'
    }
    if (hours < 12) {
        h.innerHTML = '0' + hours + ':'
        ampm.innerHTML = 'AM'
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





