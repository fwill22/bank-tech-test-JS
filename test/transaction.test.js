/* eslint-disable no-undef */
const Transaction = require('../src/transaction');

describe( 'Transaction', () => {
  test( 'class has attributes', () => {
    transaction = new Transaction(200, 200)
    
    expect(transaction.date).toEqual(new Date().toLocaleDateString())
    expect(transaction.amount).toEqual(200)
    expect(transaction.currentBalance).toEqual(200)
  })
})
