// Write your code here
import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {num: 0, oe: 'Count is Even'}

  inc = () => {
    this.setState(prev => {
      const newnum = Math.floor(Math.random() * 101) + prev.num
      const newoe =
        newnum % 2 === 0 ? (
          <p className="oddoreven">Count is Even</p>
        ) : (
          <p className="oddoreven">Count is Odd</p>
        )
      return {
        num: newnum,
        oe: newoe,
      }
    })
  }

  render() {
    const {num, oe} = this.state
    return (
      <div className="div">
        <h1 className="head">Count {num}</h1>
        <p className="oddoreven">{oe}</p>
        <button type="button" className="btn" onClick={this.inc}>
          Increment
        </button>
        <p className="cond">*Increase by Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
