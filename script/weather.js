const APIKEY = "27204bd43703cfc1ab3feabd40ead51e";
temp = document.querySelector('#temp')
term = document.querySelector('#term')
localidad = document.querySelector('#localidad')
wIcon = document.querySelector('#wIcon')
wIconText = document.querySelector('#wIconText')
visib = document.querySelector('#visib')
humed = document.querySelector('#humed')
precip = document.querySelector('#precip')
buenosAires = document.querySelector('#buenosAires')
chile = document.querySelector('#chile')
uruguay = document.querySelector('#uruguay')
paraguay = document.querySelector('#paraguay')
bolivia = document.querySelector('#bolivia')
newYork = document.querySelector('#newYork')
pais = "Buenos%20Aires"





function fetchBA () {
  fetch ('http://api.weatherstack.com/current?access_key=49c8f731ad28deb2508d7c4cb6ebcdee&query='+pais)
  .then( (resp) => resp.json())
  .then( (data) => {
    console.log(data)
    temp.innerText = `${data.current.temperature}°C`
    term.innerText = `Sens. Termica: ${data.current.feelslike}°C`
    localidad.innerText = `${data.location.name}`
    wIcon.src = `${data.current.weather_icons}`
    wIconText.innerText = `${data.current.weather_descriptions}`
    visib.innerText = `Visibilidad: ${data.current.visibility}`
    humed.innerText = `Humedad: ${data.current.humidity}`
    precip.innerText = `Probabilidades de Precipitaciones: ${data.current.precip}%`

  })
}


buenosAires.addEventListener('click',()=>{
  pais = "Buenos%20Aires"
  fetchBA ()
})

chile.addEventListener('click',()=>{
  pais = "chile"
  fetchBA ()
})

uruguay.addEventListener('click',()=>{
  pais = "uruguay"
  fetchBA ()
})

paraguay.addEventListener('click',()=>{
  pais = "paraguay"
  fetchBA ()
})

bolivia.addEventListener('click',()=>{
  pais = "bolivia"
  fetchBA ()
})

newYork.addEventListener('click',()=>{
  pais = "New%20York"
  fetchBA ()
})