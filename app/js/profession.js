module.exports=
  ((window, math, doc)=>{
    'use strict';
    const skills = ["Seasoned Software Engineer", "Motorcycle Lover", "Crossfit Enthusiast", "Folk Dancing amateur"];
    function flip(){
      let profession = doc.querySelector(".profession");
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

  })(window, Math, document);