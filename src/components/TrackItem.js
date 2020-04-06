import React from 'react';
import classNames from 'classnames';
// import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function TrackItem({ track: {trackName, artistName, rank, id, explicit, token, trackURL, country } }) {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-8">
                    <h4>{rank}.{' '}  
                        <span className={classNames({
                            'text-success': !explicit,
                            'text-danger': explicit
                            })}>
                            {trackName}
                        </span>
                    </h4>
                    <p>{artistName}</p>
                    {/* <p><Moment format="mm:ss">{duration}</Moment></p> */}
                </div>
                <div className="col-md-2">
                    <Link to={`/track/${id}/?access_token=${token}&country=${country}`} className="btn btn-secondary">Track Details</Link>
                </div>
                <div className="col-md-2">
                    <a href={trackURL} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Listen To Track</a>
                </div>
            </div>
        </div>
    )
}


