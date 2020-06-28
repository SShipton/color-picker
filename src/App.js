import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    hue: this.getRandomInt(361),
    saturation: this.getRandomInt(101),
    lightness: this.getRandomInt(101),
  }

  handleChangingHue = event => {
    const hue = event.target.value

    this.setState({ hue })
  }

  handleChangingSaturation = event => {
    const saturation = event.target.value

    this.setState({ saturation })
  }

  handleChangingLightness = event => {
    const lightness = event.target.value

    this.setState({ lightness })
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  randomizeColor = event => {
    const hue = this.getRandomInt(361)
    const saturation = this.getRandomInt(101)
    const lightness = this.getRandomInt(101)

    this.setState({
      hue,
      saturation,
      lightness,
    })
  }

  render() {
    const hslColors = `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`

    let textColor = 'black'
    if (this.state.lightness < 33) {
      textColor = 'white'
    }
    return (
      <main>
        <h1>Color Picker</h1>
        <section>
          <div
            className="color"
            style={{
              color: textColor,
              backgroundColor: hslColors,
            }}
          >
            *
          </div>
          <fieldset>
            <input
              type="range"
              min="0"
              max="360"
              value={this.state.hue}
              onChange={this.handleChangingHue}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.saturation}
              onChange={this.handleChangingSaturation}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.lightness}
              onChange={this.handleChangingLightness}
            />
          </fieldset>
        </section>
        <code>{hslColors}</code>
        <button onClick={this.randomizeColor}>
          Click me for a random color!
        </button>
      </main>
    )
  }
}

export default App
