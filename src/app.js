import React from 'react'
import ReactDOM from 'react-dom'

const App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div>
        // Build something awesome
      </div>
    )
  }
})

ReactDOM.render(<App />, document.querySelector('#app'))
