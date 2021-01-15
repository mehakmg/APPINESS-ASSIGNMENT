import React, { useState } from 'react';

const About = (props) => {
    return(
        <div className="mydiv">
            <h4>About</h4>
            <table>
                <tr>
                    <td>Application</td> <td>Basic login application using react & Redux</td>
                </tr>
                <tr>
                    <td>Developer</td> <td>Mehak Goyal</td>
                </tr>
            </table>
        </div>
    );
}

export default About;