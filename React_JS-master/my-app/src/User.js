import React from 'react'
import data from './Data'

class User extends React.Component {
    constructor (/*props*/) {
        super(/*props*/)
        /*Initial State*/ 
        this.state = {
            show: false
        }
    }

    
    
    render () {
        return (
            <React.Fragment>
                        <tr>
                            <td>{this.props.id}</td>
                            <td>{this.props.name}</td>
                            <td>{this.props.username}</td>
                            <td>{this.props.email}</td>
                            <td>{this.props.street}, {this.props.suite}, {this.props.city}</td>
                            <td>
                                <button id={this.props.id} onClick={this.props.expand}>
                                    Expand
                                </button>
                            </td>
                        </tr>
            </React.Fragment>
        )
    }
    
}

export default User