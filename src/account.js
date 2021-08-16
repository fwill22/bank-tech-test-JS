class Account {
  constructor(openingBalance = 0) {
    this.openingBalance = openingBalance;
    this.transactionHistory = []
  }

  deposit = (amount) => {
    if (isNaN(amount) === true) {
      throw new Error ('Invalid Data Type: Please enter an integer')
    }
    else if (amount < 0) {
      throw new Error ('Invalid amount: unable to deposit negative sum')
    }
    return this.transactionHistory.push(amount)
  }

  withdraw = (amount) => {
    if (isNaN(amount) === true) {
      throw new Error ('Invalid Data Type: Please enter an integer')
    }
    else if (amount < 0) {
      throw new Error ('Invalid amount: unable to deposit negative sum')
    }
    else if (amount > this.balance()) {
      throw new Error ('Insufficient Funds')
    }
    let withdrawal = - amount
    return this.transactionHistory.push(withdrawal)
  }

  balance = () => {
    return this.transactionHistory.reduce((a,b) => a + b, 0)
  }
}



module.exports = Account;