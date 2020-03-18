import React, { Component } from 'react'
import Cardicon from '../images/mark.ico'

export class CatItem extends Component {
  render() {
    return (
      <li class="CatItem">
        <a href={this.props.catLink}>
          <img src={this.props.catUrl} alt={this.props.catAlttext} />
        </a>
        <summary>
          <strong>{this.props.catName}</strong>
          <img src={Cardicon} alt="Small Github Octocat Icon" />
        </summary>
      </li>
    )
  }
}

export default CatItem
