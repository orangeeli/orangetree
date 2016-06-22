module.exports=
  ((doc)=>{
    return {
      update (){
        const year = doc.querySelector(".year");
        year.innerText = `${new Date().getFullYear()}`;
      }
    }

  })(document);