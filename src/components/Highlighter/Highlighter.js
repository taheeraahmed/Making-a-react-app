import React from 'react';
import './Highlighter.css';

export class Highlighter extends React.Component{
    render(){
        return (
            <div className="highlight">
                {this.props.word}
            </div>
        );
    }
}