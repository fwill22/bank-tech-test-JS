const Account = require('../src/account');

test( 'opening balance is zero', () => {
  const account = new Account()
  expect(account.openingBalance).toBe(0);
}) 
