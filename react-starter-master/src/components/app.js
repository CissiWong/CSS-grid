import React from "react"
import a from "assets/a.png"

class App extends React.Component {

  render() {
    return (
      <div className="grid-container">
        <div className="wide" >
          <h1>Helvetica</h1>
          <h4>designed by</h4>
          <p>Max Miedinger 1957</p>
        </div>
        <div className="tall wide">
          <img src={a} alt="letter a" />
        </div>
        <div className="tall">Bild</div>
        <div>Bild</div>
        <div>
          <h3>Usage</h3>
          <p> / Apple's iOS interface /
          NYC's MTA & Chicago's Transit Authority signage /
          NASA Space Shuttle Orbiter
          </p>
        </div>
        <div>
          <h3>Widths & heights</h3>
          <p>/ 9 weights / three widths (normal, condensed, extended) / 51 fonts total</p>
        </div>
        <div>
          <h3>Strokes</h3>
          <p>/ cut horizontally or vertivally / distinguishes Helvetica from dupes like Arial</p>
        </div>
        <div>
          <h3>Punctuation</h3>
          <p>/heavier punctuation marks than Helvetica</p>
        </div>
        <div className="wide">
          <blockquote>I don't care what it says, as long as it's in Helvetica</blockquote>
        </div>
        <div className="wide">
          <h2>abcdefghijklmnopqrstuvwxyz</h2>
        </div>
        <div>
          <h3>helvetica - the movie</h3>
          <p>/ documentary by Gary Hustwit / released for Helvetica's 50th birthday (2007)</p>
        </div>
      </div>
    )
  }

}

export default App
