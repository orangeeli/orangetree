import * as year from "./year";
import * as profession from "./profession";

((wd, doc)=>{
  'use strict';
  function onLoad(){
    year.update(doc);
    profession.start(doc);
  }

  if(doc){
    doc.addEventListener("DOMContentLoaded", onLoad, false);
  } else {
    console.log("[DEBUG] No document.");
  }

})(window, document);