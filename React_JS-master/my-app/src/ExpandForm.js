import React from 'react'
import './style.css'

class ExpandForm extends React.Component {
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
                <div id="newproduct">
                    <div className="box-container" id="add-new-product-container">
                        <form >
                            <p>
                                <label className="text-field-label">User ID</label> <br/>
                                <input type='text' className="text-field-input" defaultValue={this.props.id}></input>
                            </p>
                            <p>
                                <label className="text-field-label">Name</label> <br/>
                                <input type='text' className="text-field-input" defaultValue={this.props.name}></input>
                            </p>
                            <p>
                                <label className="text-field-label">Username</label> <br/>
                                <input type='text' className="text-field-input" defaultValue={this.props.username}></input>
                            </p>
                            <p>
                                <label className="text-field-label">E-mail</label> <br/>
                                <input type='text' className="text-field-input" defaultValue={this.props.email}></input>
                            </p>
                            <p>
                                <label className="text-field-label">Address</label> <br/>
                                <input type='text' className="text-field-input" defaultValue={this.props.street + " " + this.props.suite + " " + this.props.city}></input>
                            </p>
                            {/* <input type='text' defaultValue={this.props.name}></input>
                            <input type='text' defaultValue={this.props.lastName}></input>
                            <input type='text' defaultValue={this.props.email}></input>
                            <input type='text' defaultValue={this.props.age}></input> */}  
                        </form>
                        <button className="primary-button long" id="create-btn" >Save</button>
                        <button className="primary-button long" id="create-btn" >Delete</button>
                        <button className="primary-button long" id="create-btn"  onClick={this.props.expand}>Close</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ExpandForm