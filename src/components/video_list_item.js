import React from 'react';

const VideoListItem = ({video}) => {
    const imageURL = video.snippet.thumbnails.default.url;
    //const video = props.video; //the above is completely identical
    //Can use different ES6 syntax to have a little different way of presenting it
    return (
        <li className="list-group-item">
            <div className = "video-list media">
                <div className = "media-left">
                    <img className = "media-object" src = {imageURL}/>
                </div>

                <div className = "media-body">
                    <div className = "media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
            {/* we are using bootstrap classes */}

        </li>
    );
}

export default VideoListItem;