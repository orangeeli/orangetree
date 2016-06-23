module.exports=
  (()=>{
    'use strict';
    return {
      update (doc){
        const year = doc.querySelector(".year");
        year.innerText = `${new Date().getFullYear()}`;
      }
    }

  })();