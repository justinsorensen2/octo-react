import React, { Component } from 'react'
import GitIcoLg from '../images/mark64.png'

export class Header extends Component {
  render() {
    return (
      <header>
        <nav class="TLNav">
          <ul class="TopLeft">
            <li>
              <img src={GitIcoLg} alt="GitHub Icon" />
            </li>
            <li>
              <strong>Octodex</strong>
            </li>
            <li>
              <a href="https://github.com/">Home</a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </li>
          </ul>
        </nav>
        <nav class="TRNav">
          <ul class="TopRight">
            <li>
              <a href="https://twitter.com/githubdesign">
                Follow us on Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com/">Back to GitHub.com</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
