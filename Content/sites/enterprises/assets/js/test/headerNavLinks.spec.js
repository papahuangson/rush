const test = require('tape');
const JSDOM = require('jsdom').JSDOM;
const DOM = new JSDOM('<!DOCTYPE html><body><div id="header-links"></div><div id="header-links--mobile"></div></body></html>');

global.document = DOM.window.document;

const headerNavLinks = require('../headerNavLinks');

const list = [
  {
    id: 0,
    name: 'Our Story',
    order: 0,
    url: '#',
    selected: true,
    machineName: 'our-story',
    children: [
      {
        id: 0,
        name: 'Overview',
        order: 0,
        url: '#',
        selected: true
      },
      {
        id: 1,
        name: 'Strategic Vision',
        order: 1,
        url: '#'
      },
      {
        id: 2,
        name: 'Culture and Values',
        order: 2,
        url: '#'
      }
    ],
  },
  {
    id: 1,
    name: 'Our Businesses',
    order: 1,
    url: '#',
    children: []
  },
  {
    id: 2,
    name: 'Investor Relations',
    order: 2,
    url: '#',
    children: []
  },
  {
    id: 3,
    name: 'Corporate Responsibility',
    order: 3,
    url: '#',
    children: []
  },
  {
    id: 4,
    name: 'Careers',
    order: 4,
    url: '#',
    children: []
  },
  {
    id: 5,
    name: 'News',
    order: 5,
    url: '#',
    machineName: 'news',
    children: [
      {
        id: 0,
        name: 'News Item 1',
        order: 0,
        url: '#'
      },
      {
        id: 1,
        name: 'News Item 2',
        order: 1,
        url: '#'
      },
      {
        id: 2,
        name: 'News Item 3',
        order: 2,
        url: '#'
      }
    ]
  }
];

test('createDesktopNavigation', (assert) => {
  const startingCountOfListItems = document.querySelectorAll('#header__content__navigation ul li').length;

  headerNavLinks.createDesktopNavigation('NOT AN EXISTING ELEMENT', list);

  assert.equal(
    document.querySelectorAll('#header__content__navigation ul li').length,
    startingCountOfListItems,
    'Should have returned, no adding anything to DOM'
  );

  assert.end();
});

test('createDesktopNavigation', (assert) => {
  const startingCountOfListItems = document.querySelectorAll('#header__content__navigation ul li').length;

  headerNavLinks.createDesktopNavigation('header__content__navigation', list);

  assert.equal(
    document.querySelectorAll('#header__content__navigation ul li').length,
    startingCountOfListItems + 12,
    'Should have created 12 links in header'
  );

  assert.end();
});

test('createMobileNavigation', (assert) => {
  const startingCountOfListItems = document.querySelectorAll('#mobile__drawer__body__navigation ul li').length;

  headerNavLinks.createMobileNavigation('NOT AN EXISTING ELEMENT', list);

  assert.equal(
    document.querySelectorAll('#mobile__drawer__body__navigation ul li').length,
    startingCountOfListItems,
    'Should have returned, no adding anything to DOM'
  );

  assert.end();
});

test('createMobileNavigation', (assert) => {
  const startingCountOfListItems = document.querySelectorAll('#mobile__drawer__body__navigation ul li').length;

  headerNavLinks.createMobileNavigation('mobile__drawer__body__navigation', list);

  assert.equal(
    document.querySelectorAll('#mobile__drawer__body__navigation ul li').length,
    startingCountOfListItems + 18,
    'Should have created 18 list items, including sub menus and dividers'
  );

  assert.end();
});
