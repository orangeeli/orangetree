(function(wd, doc, m){

  var skills = ["Seasoned Software Engineer", "Motorcycle Lover", "Crossfit Enthusiast", "Folk Dancing amateur"];

  var body = doc.querySelector("body");

  function onLoad(){

    var profession = doc.querySelector(".profession");

    function flip(){
      profession.innerText = skills[random(skills.length-1)];
    }

    function random(max) {
      return m.floor(m.random() * max);
    }
    wd.setInterval(flip, 5000);
  }

  body? body.addEventListener("load", onLoad) : console.log("[DEBUG] ");

})(window, document, Math);