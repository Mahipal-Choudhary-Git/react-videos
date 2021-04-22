function VideoDetail({ video }) {
    return (
        <div>
            <div className="ui embed">
                <iframe
                    title="Video Player"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                />
            </div>
            <div className="ui segment">
                <h3 className="ui header">{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;
