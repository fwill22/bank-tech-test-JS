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

  test( 'can deposit floats', () => {
    account.deposit(100.50)
    expect(account.balance()).toEqual(100.50)
  })

  test( 'cannot desposit invalid data type', () => {
    expect(() => {
      account.deposit('money')
    }).toThrow('Invalid Data Type: Please enter an integer')
  })

  test( 'cannot deposit negative amount', () => {
    expect(() => {
      account.deposit(-20)
    }).toThrow('Invalid amount: unable to deposit negative sum')
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