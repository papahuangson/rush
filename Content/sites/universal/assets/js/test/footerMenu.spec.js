const test = require('tape');
const JSDOM = require('jsdom').JSDOM;
const DOM = new JSDOM('<!DOCTYPE html><body><div id="footer-links"></div><div id="footer-links--mobile"></div></body></html>');

global.document = DOM.window.document;

const footerMenu = require('../footerMenu');

const sampleList = [
  {
    name: 'Test link',
    url: '#',
    id: 0
  },
  {
    name: 'Test link',
    url: '#',
    id: 1
  },  {
    name: 'Test link',
    url: '#',
    id: 2
  },
  {
    name: 'Test link',
    url: '#',
    id: 3
  }
];

test('generateDesktopFooterLinks', (assert) => {
  const startingNumberOfLinks = document.querySelectorAll('#footer-links a').length;

  footerMenu.generateDesktopFooterLinks(sampleList);

  assert.equal(
    document.querySelectorAll('#footer-links a').length,
    startingNumberOfLinks + sampleList.length,
    `Should have anchor tags equal to number of items in list (${sampleList.length})`
  );

  assert.end();
});

test('generateMobileFooterLinks', (assert) => {
  const startingNumberOfLinks = document.querySelectorAll('#footer-links--mobile a').length;

  footerMenu.generateMobileFooterLinks(sampleList);

  assert.equal(
    document.querySelectorAll('#footer-links--mobile a').length,
    startingNumberOfLinks + sampleList.length,
    `Should have anchor tags equal to number of items in list (${sampleList.length})`
  );

  assert.end();
});
