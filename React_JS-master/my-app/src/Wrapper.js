import React from 'react'

import axios from 'axios'
import Error from './Error'
import Table from './Table'

class Wrapper extends React.Component {
    constructor (props) {
        super(props)
        /*Initial State*/ 
        this.state = {
            users: [],
            show: false,
            error: null,
            loading: false
        }
    }

    expand = (event) => {
        this.setState({ show: !this.state.show })
        console.log(event.target)
        console.log(this.state.users[event.target.id -1] )
    }

    componentDidMount () {
        this.setState({loading: true})
        axios({
            method: this.props.methodType,
            url: this.props.url})
            .then((response) => {
                this.setState({users: response.data, loading: false})
            })
            .catch((error) => {
                this.setState({error: <Error />, loading: false})
            })
    }
    

    render () {
        return (
            <React.Fragment>
                <this.props.component users={this.state.users} 
                        show={this.state.show} 
                        expand={this.expand}
                        children={this.props.children}/>
                {this.state.error}
                {this.state.loading && <div>LOADING...</div>}
            </React.Fragment>
        )
        
    }
}

export default Wrapper