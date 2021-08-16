class Account {
  constructor(openingBalance = 0) {
    this.openingBalance = openingBalance;
    this.transactionHistory = []
  }

  deposit = (amount) => {
    return this.transactionHistory.push(amount)
  }

  withdraw = (amount) => {
    if(amount > this.balance()) {
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