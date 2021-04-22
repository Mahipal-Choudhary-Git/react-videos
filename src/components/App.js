import { useEffect, useState } from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

function App() {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const onFormSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
            },
        });
        setVideos(response.data.items);
    };
    const handleSelectedVideo = (video) => {
        setSelectedVideo(video);
    };
    useEffect(() => {
        onFormSubmit("Avengers");
    }, []);
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);
    return (
        <div className="ui container">
            <SearchBar onFormSubmit={onFormSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    {selectedVideo && (
                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideo} />
                        </div>
                    )}
                    <div className="five wide column">
                        <VideoList
                            videos={videos}
                            handleSelectedVideo={handleSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
