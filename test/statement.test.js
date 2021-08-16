/* eslint-disable no-undef */
const Statement = require('../src/statement');

describe( 'Statement', () => {
  statement = new Statement

  test( 'has a header', () => {
    expect(statement.header()).toEqual("|    date    ||  credit  ||  debit  || balance  |")
  })
 
})


// METHODS:
// format(amount)
// format(transaction)
// format(statement)
// print_(transaction_history)
