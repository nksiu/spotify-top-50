import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import classNames from 'classnames';

//Redux
import { connect } from 'react-redux';
import { getTrack } from '../actions/tracksActions'

export class TrackInfo extends Component {

    componentDidMount(){
        this.props.getTrack(this.props.token)
    };

    render() {
        const {trackName, imageURL, artistName, artistURL, albumName, albumReleased, duration, explicit} = this.props.track
        return (
            this.props.track ?
                <Fragment>
                    <h1 className="display-4 my-3">
                        <span className="text-dark">Track:</span>{' '} 
                        {trackName}
                    </h1>
                    <img src={imageURL} alt="Album Cover" style={{ display: 'block', margin: 'auto' }}></img>
                    <h4 className="mb-3">Track Details</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            Artist: {artistName}
                                <span className="btn-group float-right">
                                    <a href={artistURL} className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">Discover</a>
                                </span>
                        </li>
                        <li className="list-group-item">
                            Album: {albumName}
                        </li>
                        <li className="list-group-item">
                            Album Released: {albumReleased}
                        </li>
                        <li className="list-group-item">
                            Track Duration: <Moment format="m:ss">{duration}</Moment>
                        </li>
                        <li className="list-group-item">
                            Explicit: <span className={classNames({
                                'text-success': !explicit,
                                'text-danger': explicit
                            })}>{explicit ? 'Yes' : 'No'}</span>
                        </li>
                    </ul>
                    <hr/>
                    <Link to={`/?access_token=${this.props.token}`} className="btn btn-secondary">Back</Link>
                    <hr/>
                </Fragment>
            :
                null
        )
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    track: state.tracks.track
});

export default connect(mapStateToProps, { getTrack }) (TrackInfo)


