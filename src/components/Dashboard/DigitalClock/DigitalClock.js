import React, { Component } from 'react';
import './DigitalClock.css';


export default class Clock extends Component {
    constructor (props) {
        super(props);

        this.state = {
            dateClass: new Date()
        }

        this.time = this.state.dateClass.toLocaleTimeString();
        this.hourMin = this.time.length === 10? this.time.slice(0) : this.time.slice(0,5);
    }

    setTime = () => {
        this.setState({
            dateClass: new Date()
        })
        this.time = this.state.dateClass.toLocaleTimeString();
        this.hourMin = this.time.length === 10? this.time.slice(0) : this.time.slice(0,5);
    }

    componentDidMount () {
        setInterval(this.setTime, 1000)
    }
    
    render () {
        return (
            <div className="clock">
                {this.hourMin}
            </div>
        )
    }
}
