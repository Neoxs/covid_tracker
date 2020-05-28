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
        const fetchedData = await fetchData(country)
        console.log(fetchedData)

        this.setState({ data: fetchedData, country: country })

        console.log(country);
        // fetch the data
        //set the state
    }

    render () {
        const { data } = this.state

        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart />
            </div>
        )
    }
}

export default App