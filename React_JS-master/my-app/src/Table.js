import React from 'react'
import User from './User'
import ExpandForm from './ExpandForm'

const Table = (props) => {
    const new_user = []
    for (let i = 0; i < props.users.length; i++) {
        new_user.push(<User key={props.users[i].id} 
                            expand={props.expand} 
                            id={props.users[i].id} 
                            name={props.users[i].name} 
                            username={props.users[i].username} 
                            email={props.users[i].email} 
                            street={props.users[i].address.street}
                            suite={props.users[i].address.suite}
                            city={props.users[i].address.city}/>)
    }

    return (
        <React.Fragment>
            <table className="products-table">
                <thead className="products-table-head">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>E-mail</th>
                        <th>Adress</th>
                        <th>Expand</th>
                    </tr>
                </thead>
                <tbody className="products-table-body">
                {new_user}
                </tbody>
            </table>
            
            {props.error}
            {props.children}
            {props.show ? <ExpandForm key={props.users[event.target.id -1].id}
                                            expand={props.expand}
                                            id={props.users[event.target.id -1].id} 
                                            name={props.users[event.target.id -1].name} 
                                            username={props.users[event.target.id -1].username}
                                            email={props.users[event.target.id -1].email}
                                            street={props.users[event.target.id -1].address.street}
                                            suite={props.users[event.target.id -1].address.suite}
                                            city={props.users[event.target.id -1].address.city}/>: null}
        </React.Fragment>
    )
    
}

export default Table