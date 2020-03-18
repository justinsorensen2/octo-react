import React, { Component } from 'react'
import Cardicon from '../images/mark.ico'
import Linktocat from '../images/linktocat.jpg'

export class ZLink extends Component {
  render() {
    return (
      <li class="CatItem">
        <a href="https://octodex.github.com/linktocat/">
          <img src={Linktocat} alt="Octocat Link" />
        </a>
        <summary>
          <strong>Linktocat</strong>
          <img src={Cardicon} alt="Small Github Octocat Icon" />
        </summary>
      </li>
    )
  }
}

export default ZLink
