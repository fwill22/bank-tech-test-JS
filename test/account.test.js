/* eslint-disable no-undef */
const Account = require('../src/account');

beforeEach(function() {
  let account = new Account()

test( 'opening balance is zero', () => {
  expect(account.openingBalance).toBe(0);
}) 

test( 'deposit can be saved to transaction history record', () => {
  account.deposit(100)
  expect(account.transactionHistory).toContain(100)
})

test( 'can deposit money to account', () => {
  account.deposit(100)
  expect(account.balance()).toEqual(100)
})
})