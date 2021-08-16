/* eslint-disable no-undef */
const Statement = require('../src/statement');

describe( 'Statement', () => {
  statement = new Statement

  test( 'it can print a statement', () => {
    expect(statement.print_(transactionHistory)).toEqual( `|    date    ||  credit  ||  debit  || balance  |\n`
                                                          `| ${new Date().toLocaleDateString()} ||  || 500.00 || 2500.00 |\n`
                                                          `| ${new Date().toLocaleDateString()} || 2000.00 ||  || 3000.00 |\n`
                                                          `| ${new Date().toLocaleDateString()} || 1000.00 ||  || 1000.00 |\n`)
  })
 
})


// METHODS:
// format(amount) - if 0 nothing printed, print to 2 decimal places. 
// format(transaction) - if minus value, print in debit column, if + value, print in credit column
// format(statement) - order transactionHistory in reverse chronology
// print_(transaction_history) - console log statement. 

// let(:credit_transaction) { double(:transaction, date: Date.today, credit: 1000, debit: 0, updated_balance: 1000) }
// let(:credit_transaction2) { double(:transaction, date: Date.today, credit: 2000, debit: 0, updated_balance: 3000) }
// let(:debit_transaction) { double(:transaction, date: Date.today, credit: 0, debit: 500, updated_balance: 2500) }
// let(:transaction_history) { [credit_transaction, credit_transaction2, debit_transaction] } 
