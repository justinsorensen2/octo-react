import React, { Component } from 'react'
import Cardicon from '../images/mark.ico'
import Cats from './Cats'

export class CatItem extends Component {
  render() {
    return (
      <li class="CatItem">
        <a href={this.props.link}>
          <img src={this.props.url} alt={this.props.alttext} />
        </a>
        <summary>
          <strong>{this.props.name}</strong>
          <img src={Cardicon} alt="Small Github Octocat Icon" />
        </summary>
      </li>
    )
  }
}

export default CatItem
