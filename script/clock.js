video = document.querySelector('.nightVid');
nightMode = document.querySelector('#nightMode');
dayMode = document.querySelector('#dayMode')
clockContainer = document.querySelector('.clockContainer')
alarmBtn = document.querySelector('#alarmBtn')
var audio = new Audio('../img/sound.mp3');
hora = document.querySelector('#hora')
minuto = document.querySelector('#minuto')
segundo = document.querySelector('#segundo')
amOPm = document.querySelector('#amOPm')
alarmContainer = document.querySelector('.alarmContainer')

nightMode.addEventListener('click',()=>{
  nightMode.style.display = "none";
  dayMode.style.display = "flex"
  video.src = "../img/daysky.mp4"
  clockContainer.style.border = "5px solid rgb(0, 0, 0)";
  clockContainer.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
  clockContainer.style.color = "rgb(0, 0, 0)";
})

dayMode.addEventListener('click',()=>{
  nightMode.style.display = "flex";
  dayMode.style.display = "none"
  video.src = "../img/nightsky.mp4"
  clockContainer.style.border = "5px solid white";
  clockContainer.style.backgroundColor = "rgba(40, 37, 37, 0.650)";
  clockContainer.style.color = "#c3d1db";
})

function alarm (){
  audio.play();
}

setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
    if (hora.value == hour && minuto.value == min && segundo.value == sec && amOPm.value === am_pm){
      alarm()
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime = hour + ":"
            + min + ":" + sec + am_pm;
 
    document.getElementById("clock")
            .innerHTML = currentTime;
}

alarmBtn.addEventListener('click',()=>{
  alarmContainer.style.opacity = "1"
})

showTime();


