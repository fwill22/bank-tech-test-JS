class Statement {
  
  printStatement = (transactionHistory) => {
    console.log(this.header() + this.formatStatement(transactionHistory).join('\n'))
  }

  formatStatement = (transactionHistory) => {
    return transactionHistory.map((transaction) => this.formatTransaction(transaction))
  }

  formatTransaction = (transaction) => {
    if (transaction.amount < 0) {
      this._debitTransaction(transaction)
    } else {
      this._creditTransaction(transaction)
    }
  }

  header = () => {
    return "|    date    ||  credit  ||  debit  || balance  |\n"
  }

  _creditTransaction = (transaction) => {
    return `| ${transaction.date} ||  || ${transaction.amount.toFixed(2)} || ${transaction.currentBalance.toFixed(2)} |\n`
  }

  _debitTransaction = (transaction) => {
    let absoluteAmount = Math.abs(transaction.amount)
    return `| ${transaction.date} || ${absoluteAmount.to(2)} ||  || ${transaction.currentBalance.toFixed(2)} |\n`
  }

}

module.exports = Statement;