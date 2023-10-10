function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    const hourDeg = (hour % 12) * 30 + (minute / 60) * 30;
    const minuteDeg = (minute / 60) * 360 + (second / 60) * 6;
    const secondDeg = (second / 60) * 360;
  
    document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('second').style.transform = `rotate(${secondDeg}deg)`;
  
    setTimeout(updateClock, 1000);
  }
  
  updateClock();
  