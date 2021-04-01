import React, { Component } from "react"
import TransactionsList from "./TransactionsList"
import Search from "./Search"
import AddTransactionForm from "./AddTransactionForm"

class AccountContainer extends Component {
  state = {
    transactions: [],
    query: "",
  }

  changeSearch = (e) => {
    this.setState({ query: e.target.value })
  }

  componentDidMount = async () => {
    const res = await fetch("http://localhost:6001/transactions")
    const transactions = await res.json()
    this.setState({ transactions })
  }

  addNewTrans = (newTrans) => {
    this.setState({ transactions: [newTrans, ...this.state.transactions] })
  }

  render() {
    let filteredTransactions = this.state.transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(this.state.query)
    )
    return (
      <div>
        <Search search={this.changeSearch} />
        <AddTransactionForm addNewTrans={this.addNewTrans} />
        <TransactionsList transactions={filteredTransactions} />
      </div>
    )
  }
}

export default AccountContainer
