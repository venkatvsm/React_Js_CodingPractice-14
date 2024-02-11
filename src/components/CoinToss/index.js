// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {coinToss: 0, total: 0, head: 0, tails: 0}

  coinTossTriggered = () => {
    const result = Math.floor(Math.random() * 2)
    result === 0
      ? this.setState(prevState => ({
          coinToss: result,
          total: prevState.total + 1,
          head: prevState.head + 1,
        }))
      : this.setState(prevState => ({
          coinToss: result,
          total: prevState.total + 1,
          tails: prevState.tails + 1,
        }))
  }

  render() {
    const {coinToss, total, head, tails} = this.state
    return (
      <div className="bg_container">
        <div className="card_container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="Head-para">Heads (or) Tails</p>
          {coinToss === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="image"
              alt ="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="image"
              alt="toss result"
            />
          )}
          <button
            type="button"
            onClick={this.coinTossTriggered}
            className="btnEl"
          >
            Toss Coin
          </button>
          <div className="paraContainer">
            <p className="para">Total: {total}</p>
            <p className="para">Heads: {head}</p>
            <p className="para">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
