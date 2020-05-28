import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

class App extends Component {

    state= {
        data: {},
    }

    async componentDidMount() {
        const data = await fetchData()

        this.setState({ data })
    }

    render () {
        const { data } = this.state

        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App