class Statement {
  
  printStatement = (transactionHistory) => {
    console.log(header() + formatStatement(transactionHistory))
  }

  formatStatement = (transactionHistory) => {
    // transactionHistory.map.reverse |transaction| formatTransaction(transaction)

    // through transactionHistory and apply formatTransaction(transactionHistory):
  }

  formatTransaction = (transaction) => {
    if (transaction.amount < 0) {
      _debitTransaction()
    } else {
      _creditTransaction()
    }
  }

  header = () => {
    return "|    date    ||  credit  ||  debit  || balance  |"
  }

  _creditTransaction = (transaction) => {
    return `| ${transaction.date} ||  || ${transaction.amount.toFixed(2)} || ${transaction.currentBalance.toFixed(2)} |`
  }

  _debitTransaction = (transaction) => {
    let absoluteAmount = Math.abs(transaction.amount)
    return `| ${transaction.date} || ${absoluteAmount.to(2)} ||  || ${transaction.currentBalance.toFixed(2)} |`
  }

}

module.exports = Statement;