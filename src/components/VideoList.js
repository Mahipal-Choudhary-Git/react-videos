import VideoCard from "./VideoCard";

function VideoList({ videos, handleSelectedVideo }) {
    const renderedList = videos.map((e, i) => {
        return (
            <VideoCard
                key={i}
                video={e}
                handleSelectedVideo={handleSelectedVideo}
            />
        );
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default VideoList;
