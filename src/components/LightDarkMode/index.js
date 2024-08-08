import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickingButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  modeClassName = () => {
    const {isDarkMode} = this.state
    console.log(isDarkMode)

    const value = isDarkMode ? 'dark-btn' : 'light-btn'

    return value
  }

  render() {
    const {isDarkMode} = this.state

    const themeClassName = this.modeClassName()

    const text = isDarkMode ? 'Light Mode' : 'Dark Mode'

    const containerClassName = isDarkMode ? 'dark' : 'light'

    console.log(containerClassName)

    return (
      <div className="home">
        <div className={containerClassName}>
          <h1>Click To Change Mode</h1>
          <button
            className={themeClassName}
            type="button"
            onClick={this.onClickingButton}
          >
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
