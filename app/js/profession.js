module.exports=
  ((window, math)=>{
    'use strict';
    const skills = ["Seasoned Software Engineer", "Motorcycle Lover", "Crossfit Enthusiast", "Folk Dancing amateur"],
      profession = doc.querySelector(".profession");

    function flip(){
      profession.innerText = skills[random(skills.length-1)];
    }

    function random(max) {
      return math.floor(math.random() * max);
    }

    return {
      start (){
        window.setInterval(flip, 5000);
      }
    }

  })(window, Math);