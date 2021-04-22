import "../styles/VideoCard.css";
function VideoCard({ video, handleSelectedVideo }) {
    return (
        <div
            className="item video-card"
            onClick={() => handleSelectedVideo(video)}
        >
            <img
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
                alt="thumbnail"
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoCard;
