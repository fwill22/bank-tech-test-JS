/* eslint-disable no-undef */
const Statement = require('../src/statement');

const mockTransactionHistory = jest.fn(() => [{date: '10/01/2012', amount: 1000, currentBalance: 1000},
                                              {date: '13/01/2012', amount: 2000, currentBalance: 3000},
                                              {date: '14/01/2012', amount: 500, currentBalance: 2500}])
describe( 'Statement', () => {
  statement = new Statement

  test( 'it can print a statement', () => {
    expect(statement.printStatement(mockTransactionHistory)).toEqual( `|    date    ||  credit  ||  debit  || balance  |\n`
                                                          `| 14/01/2012 ||  || 500.00 || 2500.00 |\n`
                                                          `| 13/01/2012 || 2000.00 ||  || 3000.00 |\n`
                                                          `| 10/01/2012 || 1000.00 ||  || 1000.00 |\n`)
  })
})


// METHODS:
// format(transaction) - if minus value, print in debit column, if + value, print in credit column
// format(statement) - order transactionHistory in reverse chronology
// print_(transaction_history) - console log statement. 
