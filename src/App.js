import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer, Auth } from './components';

import './App.css';

const STREAM_API_KEY = 'rcqrxpzueju5';

const cookies = new Cookies();
const AUTH_TOKEN = cookies.get("token");

const streamClient = StreamChat.getInstance(STREAM_API_KEY);

if(AUTH_TOKEN) {
    streamClient.connectUser({
        name: cookies.get("username"),
        fullName: cookies.get("fullName"),
        id: cookies.get("userId"),
        phoneNumber: cookies.get("phoneNumber"),
        image: cookies.get("avatarURL"),
        hashedPassword: cookies.get("hashedPassword")
    }, AUTH_TOKEN);
}

const App = () => {
    if(!AUTH_TOKEN) return <Auth />

    return (
        <div className="app__wrapper">
            <Chat client={streamClient} theme="team light">
                <ChannelListContainer />
                <ChannelContainer />
            </Chat>
        </div>
    );
}

export default App;
