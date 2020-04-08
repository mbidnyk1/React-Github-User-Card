import React, { Component } from 'react'

class GithubCard extends Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div className = 'card'>
                <img src={this.props.userData.avatar_url} alt='Github avatar'/>
                <div className= 'card-info'>
                    <div className= 'name'>
                        {this.props.userData.name}
                    </div>
                    <div className= 'username'>{this.props.userData.login}</div>
                    <p>{this.props.userData.location}</p>
                    <p>{this.props.userData.html_url}</p>
                </div>
            </div>
        )
    }
}

export default GithubCard