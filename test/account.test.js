/* eslint-disable no-undef */
const Account = require('../src/account');

beforeEach(function() {
  account = new Account()
})

describe( 'Account', () => {
  test( 'opening balance is zero', () => {
    expect(account.openingBalance).toBe(0);
  }) 

  test( 'stores transaction objects in transaction history', () => {
    account.deposit(100)
    account.withdraw(80)
    expect(account.transactionHistory[1].currentBalance).toBe(20)
  })

  test( 'has an overdraft limit of £200', () => {
    account.deposit(200)
    account.withdraw(350)
    expect(account.balance()).toEqual(-150)
  })
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

  test( 'can withdraw floats', () => {
    account.deposit(100.50)
    account.withdraw(50.25)
    expect(account.balance()).toEqual(50.25)
  })

  test( 'cannot withdraw if amount greater than overdraft limit', () => {
    account.deposit(100)
    expect(() => {
      account.withdraw(301)
    }).toThrow('Insufficient Funds')
  })

  test( 'cannot withdraw invalid data type', () => {
    account.deposit(100)
    expect(() => {
      account.withdraw('money')
    }).toThrow('Invalid Data Type: Please enter an integer')
  })

  test( 'cannot withdraw negative amount', () => {
    account.deposit(100)
    expect(() => {
      account.withdraw(-20)
    }).toThrow('Invalid amount: unable to deposit negative sum')
  })

  describe( '#viewStatement', () => {
    test( 'can print transaction history as a formatted statement', () => {
      account.deposit(100)
      account.withdraw(80)
      expect(account.viewStatement()).toEqual( `|    date    ||  credit  ||  debit  || balance  |\n| ${new Date().toLocaleDateString()} ||  || 80.00 || 20.00 |\n| ${new Date().toLocaleDateString()} || 100.00 ||  || 100.00 |`)
    })
  })
})