import "./video.scss";

const Video = () => {
  return (
    <iframe className="freestyle-video"
            src="https://www.youtube.com/embed/RJRKsF7xPfs"
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
    />
  );
};

export default Video;
