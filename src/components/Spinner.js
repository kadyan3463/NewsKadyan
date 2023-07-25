import React, { Component } from 'react'
import loading from './loading.webp'
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading" style={{width:50}} />
      </div>
    )
  }
}
export default Spinner