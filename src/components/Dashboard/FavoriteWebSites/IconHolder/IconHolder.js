import React, {Component} from 'react';
import './IconHolder.css';

export default class IconHolder extends Component {
    render(){
        return (
            <a href={this.props.link}>
                <div className="IconHolder">
                    <h3>{this.props.title}</h3>
                    <img src={this.props.image} alt='icon' width="50px"/>
                </div>
            </a>
        );
    }
}