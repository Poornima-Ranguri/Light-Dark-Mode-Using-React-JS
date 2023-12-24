import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  changingMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modelClassName = isDarkMode ? 'dark' : 'light'
    const textBtn = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const headingClassName = isDarkMode ? 'heading-dark' : 'heading-light'
    return (
      <div className="home">
        <div className={modelClassName}>
          <h1 className={headingClassName}>Click To Change Mode</h1>
          <button
            className="btn-dark"
            type="button"
            onClick={this.changingMode}
          >
            {textBtn}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
