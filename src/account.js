class Account {
  constructor(openingBalance = 0) {
    this.openingBalance = openingBalance;
    this.transactionHistory = []
  }

  deposit = (amount) => {
    return this.transactionHistory.push(amount)
  }

  balance = () => {
    return this.transactionHistory.reduce((a,b) => a + b, 0)
  }
}



module.exports = Account;