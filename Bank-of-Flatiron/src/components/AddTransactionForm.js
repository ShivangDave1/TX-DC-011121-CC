import React, { Component } from "react"

const URL = "http://localhost:6001/transactions"

class AddTransactionForm extends Component {
  state = {
    date: "",
    description: "",
    category: "",
    amount: 0,
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newTrans = {
      date: this.state.date,
      description: this.state.description,
      category: this.state.category,
      amount: this.state.amount,
    }

    const reqObj = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newTrans),
    }

    fetch(URL, reqObj)
      .then((r) => r.json())
      .then((newTrans) => this.props.addNewTrans(newTrans))
    this.setState({
      date: "",
      description: "",
      category: "",
      amount: 0,
    })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input
              onChange={(event) => this.setState({ date: event.target.value })}
              type="date"
              name="date"
            />
            <input
              onChange={(event) =>
                this.setState({ description: event.target.value })
              }
              type="text"
              name="description"
              placeholder="Description"
            />
            <input
              onChange={(event) =>
                this.setState({ category: event.target.value })
              }
              type="text"
              name="category"
              placeholder="Category"
            />
            <input
              onChange={(event) =>
                this.setState({ amount: event.target.value })
              }
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button
            onClick={this.handleSubmit}
            className="ui button"
            type="submit"
          >
            Add Transaction
          </button>
        </form>
      </div>
    )
  }
}

export default AddTransactionForm
