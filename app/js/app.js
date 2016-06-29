import * as year from "./year";
import * as profession from "./profession";

((wd, doc)=>{
  'use strict';
  function onLoad(){
    year.update(doc);
    profession.start(doc);
  }

  doc? doc.addEventListener("DOMContentLoaded", onLoad, false) : console.log("[DEBUG] No document.");

})(window, document);