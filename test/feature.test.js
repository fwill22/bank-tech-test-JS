const Account = require('../src/account');

test( 'It prints the correct results in the statement', () => {
  let account = new Account
  const viewStatementSpy = jest.spyOn(console, 'log');
  account.deposit(1000)
  account.withdraw(800)
  account.viewStatement()

  expect(viewStatementSpy).toHaveBeenCalledWith(`|    date    ||  credit  ||  debit  || balance  |\n| ${new Date().toLocaleDateString()} ||  || 800.00 || 200.00 |\n| ${new Date().toLocaleDateString()} || 1000.00 ||  || 1000.00 |`)
})