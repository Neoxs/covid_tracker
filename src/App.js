import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import image from './img/image.png'

import { fetchData } from './api'

class App extends Component {

    state= {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const data = await fetchData()

        this.setState({ data })
    }

    handleCountryChange = async (country) => {
        
        // fetch the data
        const fetchedData = await fetchData(country)

        //set the state
        this.setState({ data: fetchedData, country: country })
        
    }

    render () {
        const { data, country } = this.state

        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App