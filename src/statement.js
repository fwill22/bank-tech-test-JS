class Statement {
  
  // PSEUDOCODE:

  formatAmount = (transaction) => {
    if (transaction.amount === 0)
    // print BLANK SPACE
    else if (transaction.amount < 0) {

    // remove minus symbol and format with .toFixed(2)
    // ||  || transaction amount without - .toFixed(2) ||
  } else {
  // format with .toFixed(2)
  //}
}

  formatBalance = (transaction) => {
    add decimals and || ||
  }

  formatStatement (transactionHistory) => {
    map.reverse through transactionHistory and apply below formatting: 
    "`${Date}` +  this.formatAmount(transaction) + this.formatBalance(transaction) + \n"
  }

  header = () => {
    return "|    date    ||  credit  ||  debit  || balance  |"
  }

  printStatement = (transactionHistory) => {
    console.log(header + formatStatement(transactionHistory))
  }
  
}

module.exports = Statement;