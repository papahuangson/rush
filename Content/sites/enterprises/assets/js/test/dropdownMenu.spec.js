const test = require('tape');
const JSDOM = require('jsdom').JSDOM;
const fs = require('fs');

const html = fs.readFileSync(__dirname + '/../../../../../../static-index.html', 'utf8')
const DOM = new JSDOM(html);

global.document = DOM.window.document;

const dropdownMenu = require('../dropdownMenu');

test('toggleMenu', (assert) => {
  // initialize menu div to not show up by default
  // console.log(document);
  // document.createElement('div').setAttribute('id', 'menu');

  // get nav item in default/onload state - it should not be expanded
  const elem = document.querySelectorAll('.mobile__drawer__body__navigation__item a:first-child')[0];
  assert.equal(
    elem.getAttribute('aria-expanded'),
    'false',
    'Dropdown should not be expanded on load'
  );

  // run toggleMenu - this will set aria-expanded to true and show the menu
  dropdownMenu.toggleMenu({ preventDefault: () => {}, target: elem }, 'our-story');

  // after running toggleMenu,aria-expanded should be set to true
  assert.equal(
    elem.getAttribute('aria-expanded'),
    'true',
    'Dropdown should be expanded after toggled'
  );

  // document.getElementById('email-signup__input').click();

  // assert.equal(
  //   elem.getAttribute('aria-expanded'),
  //   'false',
  //   'Dropdown should close if currently open'
  // );

  assert.end();
});
