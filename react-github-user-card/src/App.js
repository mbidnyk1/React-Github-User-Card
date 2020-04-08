import React, { Component } from 'react'
import axios from 'axios'
import GithubCard from './components/GithubCard'
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            userData: {}
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/mbidnyk1')
            .then(result => {
                this.setState({userData: result.data})
                console.log(result.data)
            })
            .catch(error => {
                console.log('error:',error)
            })
    }
    render() {
        return (
            <>
            <h1> Github User Card</h1>
            <GithubCard userData={this.state.userData}/>
            </>
        )
    }
}
export default App;