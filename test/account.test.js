/* eslint-disable no-undef */
const Account = require('../src/account');

beforeEach(function() {
  account = new Account()
})

test( 'opening balance is zero', () => {
  expect(account.openingBalance).toBe(0);
}) 

test( 'transactions can be saved to transaction history record', () => {
  account.deposit(100)
  account.withdraw(80)
  expect(account.transactionHistory).toContain(100, -80)
})

describe( '#deposit', () => {
  test( 'can deposit money to account', () => {
    account.deposit(100)
    expect(account.balance()).toEqual(100)
  })
})

describe( '#withdraw', () => {
  test( 'can withdraw money from account', () => {
    account.deposit(1000)
    account.withdraw(800)
    expect(account.balance()).toEqual(200)
  })

  test( 'cannot withdraw if amount greater than balance', () => {
    account.deposit(100)
    expect(() => {
      account.withdraw(120)
    }).toThrow('Insufficient Funds')
  })
})