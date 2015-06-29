(function(wd, doc, m){

  var skills = ["Seasoned Software Engineer", "Motorcycle Lover", "Crossfit Enthusiast", "Folk Dancing amateur"];

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

  console.log("[DEBUG] Selected the document: " + doc);

  doc? doc.addEventListener("DOMContentLoaded", onLoad, false) : console.log("[DEBUG] No document.");

})(window, document, Math);