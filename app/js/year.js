module.exports=
  ((doc)=>{
    'use strict';
    return {
      update (){
        const year = doc.querySelector(".year");
        year.innerText = `${new Date().getFullYear()}`;
      }
    }

  })(document);