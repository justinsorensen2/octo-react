import React, { Component } from 'react'
import Cats from './components/Cats'
import GitIcoLg from './images/mark64.png'
import GitIcoSm from './images/mark.ico'

class App extends React.Component {
  render() {
    return (
      <>
        <head lang="en">
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Octodex</title>
          <link rel="shortcut icon" href={GitIcoSm} />
          <link rel="stylesheet" href="./index.css" />
        </head>
        <body>
          <header>
            <nav class="TLNav">
              <ul class="TopLeft">
                <li>
                  <embed src={GitIcoLg}></embed>
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
          <main>
            <Cats></Cats>
          </main>
        </body>
      </>
    )
  }
}

export default App
