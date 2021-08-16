const Transaction = require('./transaction')
const Statement = require('./statement')

class Account {
  constructor(openingBalance = 0, overdraftLimit = 200) {
    this.openingBalance = openingBalance;
    this.overdraftLimit = overdraftLimit
    this.transactionHistory = []
  }

  deposit = (amount) => {
    this._depositValidations(amount)
    return this.transactionHistory.push(new Transaction(amount, amount + this.balance()))
  }

  withdraw = (amount) => {
    this._withdrawalValidations(amount)
    let withdrawal = - amount
    return this.transactionHistory.push(new Transaction(- amount, this.balance() - amount))
  }

  viewStatement = (transactionHistory) => {
    let statement = new Statement
    return statement.printStatement(transactionHistory)
  }

  balance = () => {
    return this.transactionHistory.map(transaction => transaction.amount).reduce((a,b) => a + b, 0)
  }

  _depositValidations = (amount) => {
    if (isNaN(amount) === true) {
      throw new Error ('Invalid Data Type: Please enter an integer')
    }
    else if (amount < 0) {
      throw new Error ('Invalid amount: unable to deposit negative sum')
    }
  }

  _withdrawalValidations = (amount) => {
    if (isNaN(amount) === true) {
      throw new Error ('Invalid Data Type: Please enter an integer')
    }
    else if (amount < 0) {
      throw new Error ('Invalid amount: unable to deposit negative sum')
    }
    else if (amount > this.balance() + this.overdraftLimit) {
      throw new Error ('Insufficient Funds')
    }
  }
}



module.exports = Account;