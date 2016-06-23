module.exports=
  ((math)=>{
    'use strict';
    const skills = ["Seasoned Software Engineer", "Motorcycle Lover", "Crossfit Enthusiast", "Folk Dancing amateur"];
    function flip(doc){
      return function(){
        let profession = doc.querySelector(".profession"),
          index = random(skills.length-1);

        console.log(`The selected skill '${skills[index]}'`);

        profession.innerText = skills[index];

        console.log(`Inner text: '${profession.innerText}'`);
      }

    }

    function random(max) {
      return math.floor(math.random() * max);
    }

    return {
      start (document){
        setInterval(flip(document), 5000);
      }
    }

  })(Math);