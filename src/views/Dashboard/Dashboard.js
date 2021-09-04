import React from 'react';
import './Dashboard.css';
import DigitalClock from '../../components/Dashboard/DigitalClock/DigitalClock';
import FavoriteWebSites from '../../components/Dashboard/FavoriteWebSites/FavoriteWebSites';


export default class Dashboard extends React.Component{
    render(){
        return (
            <div className="container">
                <DigitalClock />
                <FavoriteWebSites />
            </div>
        );
    }
}
