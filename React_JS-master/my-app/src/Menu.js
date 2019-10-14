import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const Menu = () => {
    return (
        <div id='menu'>
            <ul>
                <li>
                    <Link to='/'  className='link'>Home</Link>
                </li>
                <li>
                    <Link to='/about' className='link'>About us</Link>
                </li>
                <li>
                    <Link to='/contact' className='link'>Contact us</Link>
                </li>
                <li>
                    <Link to='/login' className='link'>Login</Link>
                </li>
                <li>
                    <Link to='/user' className='link'>User</Link>
                </li>
            </ul>
        </div>
        
    )
}

export default Menu 