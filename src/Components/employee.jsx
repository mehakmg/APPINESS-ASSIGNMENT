import React, { useState } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import '../App.css';

const PostEmployee = (props) => {
    console.log(props.postsemp)

    if (!props.isLoggedIn) {
        props.history.push("/login")
    }

    const data = props.postsemp.user.map((listValue,index) => {
        return (<tr key={index}>
                    <td>{listValue.id}</td>
                    <td>{listValue.name}</td>
                    <td>{listValue.age}</td>
                    <td>{listValue.email}</td>
                    <td>{listValue.gender}</td>
                    <td>{listValue.phoneNo}</td>
                </tr>)
    })

    return(
        <div>
            <button style={{float:"right",marginRight:"10px"}} onClick={() => {props.history.push('/about')}}>About Us</button>
            <div className="mydiv">
                <h4>Employee Information</h4>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Phone No.</th>
                        </tr>
                {data}
                </table>
            </div>
        </div>
    );
}

const mapStateToPropsd = state => {
    console.log(state)
    return {
        postsemp: state.employee,
        isLoggedIn: state.login.isLoggedIn
    }
}

export default connect(mapStateToPropsd)(withRouter(PostEmployee))