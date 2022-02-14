const apiKey = '7d46010a527df78ce2862a037d80c3ff'
const wrapper = document.querySelector(".wrapper")
navigator.geolocation.getCurrentPosition(function(position) {
    const {latitude, longitude} = position.coords
    console.log(latitude, longitude)
    console.log(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    .then((response) => response.json())
    .then(datas => {
        const dataslist = datas.list
        dataslist.forEach(data => {
            render(data)
        })
    })

})

function render(weather) {
    const html = `
    <div class="div">
        <img src="http://openweathermap.org/img/wn/${(weather.weather[0].icon)}.png"/>
        <h3>${weather.dt_txt}</h3>
        <p>${weather.weather[0].description}</p>
        <p>${((weather.main.temp) - 270).toFixed(2)}&#8451</p>

    </div>

    `
    wrapper.insertAdjacentHTML("beforeend", html)
}
