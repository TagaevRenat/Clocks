window.onload = () => {
    let date = new Date()

    let clockState = {
        city: Number(document.querySelector('.city').value),
        timeRef: document.querySelector('.time'),
        status: Number(date.toString().slice(16, 18)) > 11 ? 'PM' : 'AM'
    }

    function stopwatch() {
        date.setSeconds(date.getSeconds() + 1)
        setDate(clockState)
    }

    document.querySelector('.city').addEventListener('change', function () {
        date = new Date()
        date.setHours(date.getUTCHours())
        clockState.city = Number(document.querySelector('.city').value)
        date.setHours(date.getHours() + clockState.city)
        clockState.status = Number(date.toString().slice(16, 18)) > 11 ? 'PM' : 'AM'
        stopwatch()
    })

    function setDate(info) {
        let hours = date.toString().slice(16, 18)
        hours = hours > 12 ? hours - 12 : hours
        hours = hours < 10 ? '0' + hours : hours
        info.timeRef.innerHTML = hours + date.toString().slice(18, 24) + info.status
    }

    setInterval(() => stopwatch(), 1000)
}
