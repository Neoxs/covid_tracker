import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'

class App extends Component {
    render () {
        return (
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App