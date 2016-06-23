(()=> {

  'use strict';

  const jsdom = require('jsdom').jsdom,
    profession = require('../app/js/profession'),
    document = jsdom("<span class=\"profession\"></span>"),
    window = document.defaultView,
    should = require('chai').should(),
    expect = require('chai').expect,
    skills = ["Seasoned Software Engineer", "Motorcycle Lover", "Crossfit Enthusiast", "Folk Dancing amateur"],
    sinon = require("sinon");

  let clock;

  beforeEach( function() {
    clock = sinon.useFakeTimers();
  });

  afterEach( function() {
    clock.restore();
  });

  describe('Profession stream', ()=>{
    it("should update the profession", ()=>{
      profession.start(window.document);
      clock.tick(5000);
      let professionText = window.document.querySelector(".profession").innerText;

      console.log(window.document.documentElement.outerHTML);
      console.log(window.document.querySelector(".profession").innerText);
      expect(skills).to.include(professionText);
    });
  });

})();