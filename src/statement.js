class Statement {
  
  printStatement = (transactionHistory) => {
    return this.header() + this.formatStatement(transactionHistory).reverse().join('\n')
  }

  formatStatement = (transactionHistory) => {
    return transactionHistory.map((transaction) => this.formatTransaction(transaction))
  }

  formatTransaction = (transaction) => {
    if (transaction.amount < 0) {
      return this._debitTransaction(transaction)
    } else {
      return this._creditTransaction(transaction)
    }
  }

  header = () => {
    return "|    date    ||  credit  ||  debit  || balance  |\n"
  }

  _creditTransaction = (transaction) => {
    return `| ${transaction.date} || ${transaction.amount.toFixed(2)} ||  || ${transaction.currentBalance.toFixed(2)} |`
  }

  _debitTransaction = (transaction) => {
    let absoluteAmount = Math.abs(transaction.amount)
    return `| ${transaction.date} ||  || ${absoluteAmount.toFixed(2)} || ${transaction.currentBalance.toFixed(2)} |`
  }
}

module.exports = Statement;