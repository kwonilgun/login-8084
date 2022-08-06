'use strict';


//지연하는 함수 이다. 
function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
  }
  
  sleep(3000);