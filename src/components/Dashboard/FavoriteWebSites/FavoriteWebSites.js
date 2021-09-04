import React, {Component} from 'react';
import './FavoriteWebSites.css';
import Instagram from './images/instagram.svg'
import Netflix from './images/netflix.svg';
import Blackboard from './images/blackboard.svg'
import Reddit from './images/reddit.svg'
import NRK from './images/tv.svg'
import IconHolder from './IconHolder/IconHolder';

export default class FavoriteWebSites extends Component {
    render(){
        return (
            <div className="FavoriteWebSites">
                <h2>Favoritter</h2>
                <div className="Icons">
                    <IconHolder title="Blackboard" image={Blackboard} link="https://innsida.ntnu.no/blackboard"/>
                    <IconHolder title="Reddit" image={Reddit} link="https://reddit.com"/>
                    <IconHolder title="Instagram" image={Instagram} link="https://instagram.com"/>
                    <IconHolder title="NRK" image={NRK} link="https://nrk.no"/>
                    <IconHolder title="Netflix" image={Netflix} link="https://www.netflix.com"/>
                </div>
            </div>
        );
    }
}