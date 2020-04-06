import React, { Component, Fragment } from 'react';

//Components
import TrackItem from './TrackItem';

//Third-Party Component
import ScrollUpButton from "react-scroll-up-button";

export class Tracks extends Component {

    render() {
        return (
            <div>
                <ScrollUpButton />
                {this.props.tracks ?
                <Fragment>
                    {
                        this.props.tracks.map(track => (
                            <TrackItem key={track.id} track={track}/>
                        ))
                    }
                </Fragment>
            :
                null
                }
            </div>
        )
    };
}

export default Tracks
