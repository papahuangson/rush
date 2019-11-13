const test = require('./tape-master');

test('footerMenu test', (t) => {
  console.log('in the test!');
  t.plan(1);
  t.equal(typeof Date.now, 'function');
});
