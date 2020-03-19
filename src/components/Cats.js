import React, { Component } from 'react'
import CatItem from './CatItem'
import Linktocat from '../images/linktocat.jpg'
import Daftpunktocat from '../images/daftpunktocat.gif'
import Maxtocat from '../images/maxtocat.gif'
import Megacat from '../images/megacat.jpg'
import Trekkie from '../images/trekkie.png'
import Xtocat from '../images/xtocat.jpg'

export class Cats extends Component {
  render() {
    const cats = [
      {
        name: 'Linktocat',
        url: Linktocat,
        alttext: 'Octocat Link',
        link: 'https://octodex.github.com/linktocat/',
        number: '#59:',
      },
      {
        name: 'Daftpunktocat',
        url: Daftpunktocat,
        alttext: 'Octocat DaftPunk, you know, with the helmet',
        link: 'https://octodex.github.com/daftpunktocat-thomas/',
        number: '#101:',
      },
      {
        name: 'Maxtocat',
        url: Maxtocat,
        alttext: 'Octocat Max - from the Grinch',
        link: 'https://octodex.github.com/maxtocat/',
        number: '#109:',
      },
      {
        name: 'Megacat',
        url: Megacat,
        alttext: 'Octocat Megaman',
        link: 'https://octodex.github.com/megacat/',
        number: '#60:',
      },
      {
        name: 'Trekkie',
        url: Trekkie,
        alttext: 'Octocat Geordi Laforge',
        link: 'https://octodex.github.com/trekkie/',
        number: '#16:',
      },

      {
        name: 'Xtocat',
        url: Xtocat,
        alttext: 'Octocat Wolverine',
        link: 'https://octodex.github.com/xtocat/',
        number: '#35:',
      },
    ]
    return (
      <ul class="Cats">
        {cats.map(cat => {
          return (
            <CatItem
              catName={cat.name}
              catUrl={cat.url}
              catAlttext={cat.alttext}
              catLink={cat.link}
              catNumber={cat.number}
            />
          )
        })}
      </ul>
    )
  }
}

export default Cats
