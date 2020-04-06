import React, { Component } from 'react';

//Components
import LocalKey from './LocalKey';
import Select from 'react-select';
import { Tracks } from './Tracks';

//Redux
import { connect } from 'react-redux';
import { getTracks } from '../actions/tracksActions'

const options = [
    { value: '37i9dQZEVXbMDoHDwVN2tF', label: 'Global' },
    { value: '37i9dQZEVXbJPcfkRz0wJ0', label: 'Australia' },
    { value: '37i9dQZEVXbJNSeeHswcKB', label: 'Belgium' },
    { value: '37i9dQZEVXbMXbN3EUUhlg', label: 'Brazil' },
    { value: '37i9dQZEVXbKj23U1GF4IR', label: 'Canada' },
    { value: '37i9dQZEVXbOa2lmxNORXQ', label: 'Columbia' },
    { value: '37i9dQZEVXbL3J0k32lWnN', label: 'Denmark' },
    { value: '37i9dQZEVXbIPWwFssbupI', label: 'France' },
    { value: '37i9dQZEVXbJiZcmkrIHGU', label: 'Germany' },
    { value: '37i9dQZEVXbLwpL8TjsxOG', label: 'Hong Kong' },
    { value: '37i9dQZEVXbKMzVsSGQ49S', label: 'Iceland' },
    { value: '37i9dQZEVXbLZ52XmnySJg', label: 'India' },
    { value: '37i9dQZEVXbIQnj7RRhdSX', label: 'Italy' },
    { value: '37i9dQZEVXbKXQ4mDTEBXq', label: 'Japan' },
    { value: '37i9dQZEVXbO3qyFxbkOE1', label: 'Mexico' },
    { value: '37i9dQZEVXbJvfa0Yxg7E7', label: 'Norway' },
    { value: '37i9dQZEVXbKyJS56d1pgi', label: 'Portugal' },
    { value: '37i9dQZEVXbLoATJ81JYXz', label: 'Sweden' },
    { value: '37i9dQZEVXbLnolsZ8PSNw', label: 'United Kingdom' },
    { value: '37i9dQZEVXbLRQDuF5jeBp', label: 'USA' }
];

export class SelectBar extends Component {
    
    handleChange = selectedOption => {
        this.props.getTracks(selectedOption, this.props.token)
    }

    render() {
        return (
            <div>
                {this.props.selectedCountry ? (
                    (this.props.selectedCountry === 'Global') ? 
                        (<h1 className="h1.display-4 my-3">Top 50 Tracks Globally</h1>) 
                        : (<h1 className="h1.display-4 my-3">Top 50 Tracks in {this.props.selectedCountry}</h1>)
                ) : (
                    <h1 className="h1.display-4 my-3">Top 50 Tracks</h1>
                )}
                <LocalKey />
                <Select 
                    onChange={this.handleChange}
                    options={options}
                    autoFocus={true}
                    isSearchable={false}
                />
                <hr/>
                {this.props.selectedCountry ? (
                    <Tracks tracks={this.props.tracks}/>
                ) : (
                    null
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    tracks: state.tracks.tracks,
    selectedCountry: state.tracks.selectedCountry
});

export default connect (mapStateToProps, { getTracks }) (SelectBar)
