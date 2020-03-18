import React, { Component } from 'react'
import Cats from './components/Cats'
import ZLink from './components/ZLink'
import GitIcoLg from './images/mark64.png'
import GitIcoSm from './images/mark.ico'
import Daftpunktocat from './images/daftpunktocat.gif'
import Maxtocat from './images/maxtocat.gif'
import Megacat from './images/megacat.jpg'
import Trekkie from './images/trekkie.png'
import Xtocat from './images/xtocat.jpg'

class App extends React.Component {
  render() {
    return (
      <>
        <head lang="en">
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Octodex</title>
          <link rel="shortcut icon" href={GitIcoSm} />
          <link rel="stylesheet" href="/screen.css" />
        </head>
        <body>
          <header>
            <nav>
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
            <ul class="Cats">
              <ZLink></ZLink>
              <li class="CatItem">
                <a href="https://octodex.github.com/maxtocat/">
                  <img src={Maxtocat} alt="Octocat Max - from the Grinch" />
                </a>
                <summary>
                  <strong>Maxtocat</strong>
                  <a href="https://github.com/jeejkang">
                    <embed src={GitIcoSm} />
                  </a>
                </summary>
              </li>
              <li class="CatItem">
                <a href="https://octodex.github.com/megacat/">
                  <img src={Megacat} alt="Octocat Megaman" />
                </a>
                <summary>
                  <strong>Megacat</strong>
                  <a href="https://github.com/jasoncostello">
                    <embed src={GitIcoSm} />
                  </a>
                </summary>
              </li>
              <li class="CatItem">
                <a href="https://octodex.github.com/trekkie/">
                  <img src={Trekkie} alt="Octocat Geordi LaForge" />
                </a>
                <summary>
                  <strong>Trekkie</strong>
                  <a href="https://github.com/cameronmcefee">
                    <embed src={GitIcoSm} />
                  </a>
                </summary>
              </li>
              <li class="CatItem">
                <a href="https://octodex.github.com/xtocat/">
                  <img src={Xtocat} alt="Octocat Wolverine" />
                </a>
                <summary>
                  <strong>X-tocat</strong>
                  <a href="https://github.com/cameronmcefee">
                    <embed src={GitIcoSm} />
                  </a>
                </summary>
              </li>
              <li class="CatItem">
                <a href="https://octodex.github.com/daftpunktocat-thomas/">
                  <img
                    src={Daftpunktocat}
                    alt="Octocat DaftPunk, you know, with the helmet"
                  />
                </a>
                <summary>
                  <strong>Daftpunktocat</strong>
                  <a href="https://github.com/jeejkang">
                    <embed src={GitIcoSm} />
                  </a>
                </summary>
              </li>
            </ul>
          </main>
        </body>
      </>
    )
  }
}

export default App
