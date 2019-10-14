import ReactDOM from 'react-dom'
import React from 'react'
import Wrapper from './Wrapper'
import Heading from './Heading'
import Menu from './Menu'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import Table from './Table'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'



const app = document.getElementById('app')


const Routes = () => {
    return (
        <Router>
            <Menu />
            <Switch>
                <Route exact path ='/' render={() => <Home name='Test'/>}/>
                <Route exact path ='/about' component={About}/>
                <Route exact path ='/contact' component={Contact}/>
                <Route exact path ='/login' component={Login}/>
                <Route 
                    exact path ='/user' 
                    render={() => 
                        <React.Fragment>
                            <Wrapper 
                                component={Table} 
                                methodType='GET'
                                url={'https://jsonplaceholder.typicode.com/users'}>
                                <Heading />
                            </Wrapper>
                        </React.Fragment>
                    }
                />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<Routes/>, app)