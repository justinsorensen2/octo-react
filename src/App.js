import React, { Component } from 'react'
import Cats from './components/Cats'
import Header from './components/Header'
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
          <Header></Header>
          <main>
            <Cats></Cats>
          </main>
        </body>
      </>
    )
  }
}

export default App
