import React from 'react';

import VideoListItem from './videoListItem';

const VideoList = (props) => {
    const videosItems = props.videos.map((video, i) => {
        return (
            <VideoListItem 
                video={video}
                key={i}
                onVideoSelect={props.onVideoSelect} />
        ) 
    });

    return (
        <ul className="col-md-8 list-group">
            {videosItems}
        </ul>
    )
}

export default VideoList;