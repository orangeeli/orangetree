(()=> {

  'use strict';

  const jsdom = require('jsdom').jsdom,
    year = require('../app/js/year'),
    document = jsdom("<footer class=\"footer\"><span>&raquo; &nbsp;</span><span class=\"year\">2015</span><span>&nbsp; &laquo;</span></footer>"),
    window = document.defaultView,
    should = require('chai').should();

  console.log(window.document.documentElement.outerHTML);
// output: "<html><head></head><body>hello world</body></html>"

  console.log(window.innerWidth);
// output: 1024
  console.log(typeof window.document.getElementsByClassName);

  describe('Current year', ()=>{
    it("should update the year", ()=>{
      year.update(window.document);
      let currentYear = window.document.querySelector(".year").innerText;
      currentYear.should.equal(`${new Date().getFullYear()}`);
    });
  });

})();