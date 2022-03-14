import React, { Component } from 'react'

import ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'red', padding: 20, borderRadius: 10 }}>
                <span>HELLO WORLD</span>
            </div>
        )
    }
}

ReactDOM.render(
    React.createElement(App, {}, null),
    document.getElementById('react-target')
);

