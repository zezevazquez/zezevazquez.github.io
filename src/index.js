import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p>
          "A React Placeholder"
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
