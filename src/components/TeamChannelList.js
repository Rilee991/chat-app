import React from 'react';

import { AddChannel } from '../assets';

const TeamChannelList = (props) => {
    const { children, error = false, loading, type } = props;

    if(error) {
        return type === "team" ? (
            <div className="team-channel-list">
                <p className="team-channel-list__message">
                    Connection error with stream! Please wait and try again after few mins.
                </p>
            </div>
        ) : null;
    }

    if(loading) {
        return (
            <div className="team-channel-list">
                <p className="team-channel-list__message loading">
                    { type === "team" ? 'Channels' : 'Messages'} loading...
                </p>
            </div>
        );
    }

    return (
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <div className="team-channel-list__header__list">
                    { type === "team" ? 'Channels' : 'Direct Messages'}
                </div>
            </div>
            {children}
        </div>
    );
}

export default TeamChannelList;
