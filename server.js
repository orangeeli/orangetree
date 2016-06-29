(()=>{

  'use strict';

  const express = require('express'),
    app = express(),
    helmet = require('helmet');


  app.use(helmet());
  app.use(express.static('./'));
  app.use(express.static('public'));


  // TODO - as a best practice, the routes should be declared on their own module
  app.get('/hello', function (req, res) {
    res.send('Hello World')
  });

  app.listen(3000, ()=>{
    console.log("The dev server just started.");
  });

})();