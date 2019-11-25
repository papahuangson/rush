const test = require('tape');
const JSDOM = require('jsdom').JSDOM;
const fs = require('fs');

const html = fs.readFileSync(__dirname + '/../../../../../../static-index.html', 'utf8')
const DOM = new JSDOM(html);

global.document = DOM.window.document;

const mobileMenu = require('../mobileMenu');

test('opening and closing the drawer', (assert) => {
  assert.equal(
    document.querySelector('#mobile-drawer').classList.contains('mobile__drawer--hide'),
    true,
    'Drawer should be closed on load'
  );

  mobileMenu.openDrawer();

  assert.equal(
    document.querySelector('#mobile-drawer').classList.contains('mobile__drawer--hide'),
    false,
    'Hide class should be removed'
  );
  assert.equal(
    document.querySelector('#mobile-drawer').classList.contains('mobile__drawer--show'),
    true,
    'Show class should be added'
  );

  mobileMenu.closeDrawer();

  assert.equal(
    document.querySelector('#mobile-drawer').classList.contains('mobile__drawer--hide'),
    true,
    'Hide class should be added to element'
  );
  assert.equal(
    document.querySelector('#mobile-drawer').classList.contains('mobile__drawer--show'),
    false,
    'Show class should be removed'
  );

  mobileMenu.openDrawer();

  assert.end();
});

test('expanding mobile menu list items', (assert) => {
  const newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'sample');

  const event = { target: newDiv };

  assert.equal(
    document.querySelector('#our-story--child-menu--hide').classList.contains('hide'),
    true,
    'hide menu button should not be visible on load'
  );

  mobileMenu.toggleMobileSubNav(event, 'our-story--child-menu');

  assert.equal(
    document.querySelector('#our-story--child-menu--hide').classList.contains('hide'),
    false,
    'sub nav menu is opened'
  );

  mobileMenu.toggleMobileSubNav(event, 'our-story--child-menu');

  assert.equal(
    document.querySelector('#our-story--child-menu--hide').classList.contains('hide'),
    true,
    'sub nav menu is closed'
  );

  assert.end();
});