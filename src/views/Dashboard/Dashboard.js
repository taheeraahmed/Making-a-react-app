import React from 'react';
import './Dashboard.css';
import DigitalClock from '../../components/DigitalClock/DigitalClock';


export default class Dashboard extends React.Component{
    render(){
        return (
            <div className="container">
                <p>Hello</p>
                <DigitalClock />
            </div>
        );
    }
}
